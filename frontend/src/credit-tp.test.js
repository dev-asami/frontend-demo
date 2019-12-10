import render from './credit-tp';

describe('credit-tp', () => {
	describe('default rendering', () => {
		let $root;
		let $primaryAccountNumber;
		let $primaryAccountNumberLabel;
		let $primaryAccountNumberField;
		let $cardIcon;
		let $expirationDate;
		let $expirationDateLabel;
		let $expirationDateField;
		let $securityCode;
		let $securityCodeLabel;
		let $securityCodeField;
		let $paymentBtn;
		let $paymentBtnButton;

		beforeEach(() => {
			document.body.innerHTML = '<div id="sunarch-credit"></div>';

			render();

			$root = document.querySelector('#sunarch-credit');
			$primaryAccountNumber = $root.children[0];
			$primaryAccountNumberLabel = $primaryAccountNumber.querySelector('label');
			$primaryAccountNumberField = $primaryAccountNumber.querySelector('input');
			$cardIcon = $primaryAccountNumber.querySelector('img');
			$expirationDate = $root.children[1];
			$expirationDateLabel = $expirationDate.querySelector('label');
			$expirationDateField = $expirationDate.querySelector('input');
			$securityCode = $root.children[2];
			$securityCodeLabel = $securityCode.querySelector('label');
			$securityCodeField = $securityCode.querySelector('input');
			$paymentBtn = $root.children[3];
			$paymentBtnButton = $paymentBtn.querySelector('button');
		});

		describe('primary account number', () => {
			it('has default class', () => {
				expect($primaryAccountNumber.className)
					.toBe('sunarch-credit-css-primary-account-number');
			});
		});

		describe('primary account number label', () => {
			it('has default class', () => {
				expect($primaryAccountNumberLabel.className)
					.toBe('sunarch-credit-css-primary-account-number-label');
			});

			it('has default text', () => {
				expect($primaryAccountNumberLabel.textContent)
					.toBe('カード番号');
			});
		});

		describe('primary account number field', () => {
			it('has default class', () => {
				expect($primaryAccountNumberField.className)
					.toBe('sunarch-credit-css-primary-account-number-field');
			});

			it('has default placeholder', () => {
				expect($primaryAccountNumberField.placeholder)
					.toBe('#### #### #### ####');
			});
		});

		describe('card-icon', () => {
			it('has default class', () => {
				expect($cardIcon.className)
					.toBe('sunarch-credit-css-card-icon');
			});
		});

		describe('expiration date', () => {
			it('has default class', () => {
				expect($expirationDate.className)
					.toBe('sunarch-credit-css-expiration-date');
			});
		});

		describe('expiration date label', () => {
			it('has default class', () => {
				expect($expirationDateLabel.className)
					.toBe('sunarch-credit-css-expiration-date-label');
			});

			it('has default text', () => {
				expect($expirationDateLabel.textContent)
					.toBe('有効期限');
			});
		});

		describe('expiration date field', () => {
			it('has default class', () => {
				expect($expirationDateField.className)
					.toBe('sunarch-credit-css-expiration-date-field');
			});

			it('has default placeholder', () => {
				expect($expirationDateField.placeholder)
					.toBe("MM / 'YY");
			});
		});

		describe('security code', () => {
			it('has default class', () => {
				expect($securityCode.className)
					.toBe('sunarch-credit-css-security-code');
			});
		});

		describe('security code label', () => {
			it('has default class', () => {
				expect($securityCodeLabel.className)
					.toBe('sunarch-credit-css-security-code-label');
			});

			it('has default text', () => {
				expect($securityCodeLabel.textContent)
					.toBe('セキュリティコード');
			});
		});

		describe('security code field', () => {
			it('has default class', () => {
				expect($securityCodeField.className)
					.toBe('sunarch-credit-css-security-code-field');
			});

			it('has default placeholder', () => {
				expect($securityCodeField.placeholder)
					.toBe('');
			});
		});

		describe('payment btn', () => {
			it('has default class', () => {
				expect($paymentBtn.className)
					.toBe('sunarch-credit-css-payment-btn');
			});
		});

		describe('payment btn button', () => {
			it('has default class', () => {
				expect($paymentBtnButton.className)
					.toBe('sunarch-credit-css-payment-btn-button');
			});

			it('has default text', () => {
				expect($paymentBtnButton.textContent)
					.toBe('購入');
			});
		});
	});

	describe('custom rendering', () => {
		let $root;
		let $primaryAccountNumber;
		let $primaryAccountNumberLabel;
		let $primaryAccountNumberField;
		let $cardIcon;
		let $expirationDate;
		let $expirationDateLabel;
		let $expirationDateField;
		let $securityCode;
		let $securityCodeLabel;
		let $securityCodeField;
		let $paymentBtn;
		let $paymentBtnButton;

		beforeEach(() => {
			document.body.innerHTML = `
				<div id="sunarch-credit"
				  primary-account-number-class="custom-primary-account-number"
				  primary-account-number-label-class="custom-primary-account-number-label"
					primary-account-number-label-text="Card number"
					primary-account-number-field-class="custom-primary-account-number-field"
					primary-account-number-field-placeholder="Enter number"
					card-icon-class="custom-card-icon"
					expiration-date-class="custom-expiration-date"
					expiration-date-label-class="custom-expiration-date-label"
					expiration-date-label-text="Expiration date"
					expiration-date-field-class="custom-expiration-date-field"
					expiration-date-field-placeholder="Enter date"
					security-code-class="custom-security-code"
					security-code-label-class="custom-security-code-label"
					security-code-label-text="Security code"
					security-code-field-class="custom-security-code-field"
					security-code-field-placeholder="Enter code"
					payment-btn-class="custom-payment-btn"
					payment-btn-button-class="custom-payment-btn-button"
					payment-btn-button-text="Buy"
				></div>
			`;

			render();

			$root = document.querySelector('#sunarch-credit');
			$primaryAccountNumber = $root.children[0];
			$primaryAccountNumberLabel = $primaryAccountNumber.querySelector('label');
			$primaryAccountNumberField = $primaryAccountNumber.querySelector('input');
			$cardIcon = $primaryAccountNumber.querySelector('img');
			$expirationDate = $root.children[1];
			$expirationDateLabel = $expirationDate.querySelector('label');
			$expirationDateField = $expirationDate.querySelector('input');
			$securityCode = $root.children[2];
			$securityCodeLabel = $securityCode.querySelector('label');
			$securityCodeField = $securityCode.querySelector('input');
			$paymentBtn = $root.children[3];
			$paymentBtnButton = $paymentBtn.querySelector('button');
		});

		describe('primary account number', () => {
			it('has specified class', () => {
				expect($primaryAccountNumber.className)
					.toBe('custom-primary-account-number');
			});
		});

		describe('primary account number label', () => {
			it('has specified class', () => {
				expect($primaryAccountNumberLabel.className)
					.toBe('custom-primary-account-number-label');
			});

			it('has specified text', () => {
				expect($primaryAccountNumberLabel.textContent)
					.toBe('Card number');
			});
		});

		describe('primary account number field', () => {
			it('has specified class', () => {
				expect($primaryAccountNumberField.className)
					.toBe('custom-primary-account-number-field');
			});

			it('has specified placeholder', () => {
				expect($primaryAccountNumberField.placeholder)
					.toBe('Enter number');
			});
		});

		describe('card-icon', () => {
			it('has specified class', () => {
				expect($cardIcon.className)
					.toBe('custom-card-icon');
			});
		});

		describe('expiration date', () => {
			it('has specified class', () => {
				expect($expirationDate.className)
					.toBe('custom-expiration-date');
			});
		});

		describe('expiration date label', () => {
			it('has specified class', () => {
				expect($expirationDateLabel.className)
					.toBe('custom-expiration-date-label');
			});

			it('has specified text', () => {
				expect($expirationDateLabel.textContent)
					.toBe('Expiration date');
			});
		});

		describe('expiration date field', () => {
			it('has specified class', () => {
				expect($expirationDateField.className)
					.toBe('custom-expiration-date-field');
			});

			it('has specified placeholder', () => {
				expect($expirationDateField.placeholder)
					.toBe("Enter date");
			});
		});

		describe('security code', () => {
			it('has specified class', () => {
				expect($securityCode.className)
					.toBe('custom-security-code');
			});
		});

		describe('security code label', () => {
			it('has specified class', () => {
				expect($securityCodeLabel.className)
					.toBe('custom-security-code-label');
			});

			it('has specified text', () => {
				expect($securityCodeLabel.textContent)
					.toBe('Security code');
			});
		});

		describe('security code field', () => {
			it('has specified class', () => {
				expect($securityCodeField.className)
					.toBe('custom-security-code-field');
			});

			it('has specified placeholder', () => {
				expect($securityCodeField.placeholder)
					.toBe('Enter code');
			});
		});

		describe('payment btn', () => {
			it('has specified class', () => {
				expect($paymentBtn.className)
					.toBe('custom-payment-btn');
			});
		});

		describe('payment btn button', () => {
			it('has specified class', () => {
				expect($paymentBtnButton.className)
					.toBe('custom-payment-btn-button');
			});

			it('has specified text', () => {
				expect($paymentBtnButton.textContent)
					.toBe('Buy');
			});
		});
	});
});
