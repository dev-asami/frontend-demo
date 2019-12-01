import Cleave from 'cleave.js';

// デフォルトのスタイル指定を読み込む
import '../css/credit-tp.css';

(function() {

	const template = document.getElementById("sunarch-credit");
	const primaryAccountNumberClass = template.getAttribute("primary-account-number-class") || "sunarch-credit-css-primary-account-number";
	const primaryAccountNumberLabelClass = template.getAttribute("primary-account-number-label-class") || "sunarch-credit-css-primary-account-number-label";
	const primaryAccountNumberLabelText = template.getAttribute("primary-account-number-label-text") || "カード番号";
	const primaryAccountNumberFieldClass = template.getAttribute("primary-account-number-field-class") || "sunarch-credit-css-primary-account-number-field";
	const primaryAccountNumberFieldPlaceholder = template.getAttribute("primary-account-number-field-placeholder") || "#### #### #### ####";
	const cardIconClass = template.getAttribute("card-icon-class")  || "sunarch-credit-css-card-icon";

	const expirationDateClass = template.getAttribute("expiration-date-class") || "sunarch-credit-css-expiration-date";
	const expirationDateLabelClass = template.getAttribute("expiration-date-label-class") || "sunarch-credit-css-expiration-date-label";
	const expirationDateLabelText = template.getAttribute("expiration-date-label-text") || "有効期限";
	const expirationDateFieldClass = template.getAttribute("expiration-date-field-class") || "sunarch-credit-css-expiration-date-field";
	const expirationDateFieldPlaceholder = template.getAttribute("expiration-date-field-placeholder") || "MM / 'YY";

	const securityCodeClass = template.getAttribute("security-code-class") || "sunarch-credit-css-security-code";
	const securityCodeLabelClass = template.getAttribute("security-code-label-class") || "sunarch-credit-css-expiration-date-label";
	const securityCodeLabelText = template.getAttribute("security-code-label-text") || "セキュリティコード";
	const securityCodeFieldClass = template.getAttribute("security-code-field-class") || "sunarch-credit-css-expiration-date-field";
	const securityCodeFieldPlaceholder = template.getAttribute("security-code-field-placeholder") || "";

	const paymentBtnClass = template.getAttribute("payment-btn-class") || "sunarch-credit-css-payment-btn";
	const paymentBtnButtonClass = template.getAttribute("payment-btn-button-class") || "sunarch-credit-css-payment-btn-button";
	const paymentBtnButtonText = template.getAttribute("payment-btn-button-text") || "購入";

	const primaryAccountNumberTemplate = `
<div class="${primaryAccountNumberClass}">
	<label for="sunarch-credit-primary-account-number-field-id" class="${primaryAccountNumberLabelClass}">${primaryAccountNumberLabelText}</label>
	<input type="text" class="${primaryAccountNumberFieldClass}" placeholder="${primaryAccountNumberFieldPlaceholder}" id="sunarch-credit-primary-account-number-field-id" />
	<img src="#" class="${cardIconClass}">
</div>`;

	const expirationDateTemplate = `
<div class="${expirationDateClass}">
	<label for="sunarch-credit-expiration-date-field-id" class="${expirationDateLabelClass}">${expirationDateLabelText}</span>
	<input type="text" class="${expirationDateFieldClass}" placeholder="${expirationDateFieldPlaceholder}" id="sunarch-credit-expiration-date-field-id" />
</div>`;

	const securityCodeTemplate = `
<div class="${securityCodeClass}">
	<label for="sunarch-credit-security-code-field-id" class="${securityCodeLabelClass}">${securityCodeLabelText}</span>
	<input type="text" class="${securityCodeFieldClass}" placeholder="${securityCodeFieldPlaceholder}" id="sunarch-credit-security-code-field-id" />
</div>`;

	const paymentBtnTemplate = `
<div class="${paymentBtnClass}">
	<button type="button" id="sunarch-credit-payment-btn-button-id" class="${paymentBtnButtonClass}">${paymentBtnButtonText}</button>
</div>`;

	const baseUrl = template.getAttribute("base-url");
	const paymentId = template.getAttribute("payment-id");
	const ephemeralKey = template.getAttribute("payment-signature");

	const pollingInterval = template.getAttribute("sunarch-api-polling-interval") || 1000;
	const retryMax = template.getAttribute("sunarch-api-retry-max") || 90;

	template.innerHTML = primaryAccountNumberTemplate + expirationDateTemplate + securityCodeTemplate + paymentBtnTemplate;

	const primaryAccountNumber = new Cleave('#sunarch-credit-primary-account-number-field-id', {
		creditCard: true,
		onCreditCardTypeChanged: function (type) {
			console.log(type);
		}
	});
	const expirationDate = new Cleave('#sunarch-credit-expiration-date-field-id', {
		date: true,
		delimiter: ' / ',
		datePattern: ['m', 'y']
	});

	const paymentBtn = document.getElementById("sunarch-credit-payment-btn-button-id");
	paymentBtn.addEventListener('click', function(event){
		const pan = primaryAccountNumber.getRawValue();
		const expdate = expirationDate.getRawValue();

		document.getElementById("sunarch-credit-primary-account-number-field-id").classList.remove("sunarch-bg-warning");
		document.getElementById("sunarch-credit-expiration-date-field-id").classList.remove("sunarch-bg-warning");

		if(!pan.match(/^[0-9]{14,16}$/)){
			document.getElementById("sunarch-credit-primary-account-number-field-id").focus();
			document.getElementById("sunarch-credit-primary-account-number-field-id").classList.add("sunarch-bg-warning");
			return;
		}
		if(!expdate.match(/^[0-9]{4}$/)){
			document.getElementById("sunarch-credit-expiration-date-field-id").focus();
			document.getElementById("sunarch-credit-expiration-date-field-id").classList.add("sunarch-bg-warning");
			return;
		}

		var event = new CustomEvent("preprocessing");
		template.dispatchEvent(event);

		const req = {
			"payment_id":paymentId,
			"ephemeral_key":ephemeralKey,
			"primary_account_number":pan,
			"expiration_date":expdate
		};
		fetch(baseUrl + "/payment", {
			method: "POST",
			redirect: "error",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(req)
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			if(myJson.status == "OK"){
				console.log("OK: " + JSON.stringify(myJson));
				// event
				var event = new CustomEvent("success", {detail: {processingTime: myJson.processing_time}});
				template.dispatchEvent(event);

			}else if(myJson.status == "PENDING"){
				console.log("OK: " + JSON.stringify(myJson));
				// event
				var event = new CustomEvent("pending", {detail: {
						processing_time: myJson.processing_time,
						image_b64: myJson.image_b64,
						image_token: myJson.image_token,
						image_createtime: myJson.image_createtime
					}});
				template.dispatchEvent(event);
			}else{
				var event = new CustomEvent("error", {detail: {
					processing_time: myJson.processing_time,
				}});
				template.dispatchEvent(event);
			}
		})
		.catch(function(error) {
			console.log(JSON.stringify(error));
			var event = new CustomEvent("error");
			template.dispatchEvent(event);
		})
		.then(function(){
			var event = new CustomEvent("complete");
			template.dispatchEvent(event);
		})
	});

})()
