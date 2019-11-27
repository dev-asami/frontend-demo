package jp.co.sunarch.frontend.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaymentRequest {

	@JsonProperty("payment_id")
	String paymentId;

	@JsonProperty("ephemeral_key")
	String ephemeralKey;

	@JsonProperty("primary_account_number")
	String primaryAccountNumber;

	@JsonProperty("expiration_date")
	String expirationDate;

	@JsonProperty("security_code")
	String securityCode;

	@JsonProperty("image_token")
	String imageToken;

	@JsonProperty("image_key")
	String imageKey;

	@JsonProperty("image_createtime")
	Long imageCreatetime;

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getEphemeralKey() {
		return ephemeralKey;
	}

	public void setEphemeralKey(String ephemeralKey) {
		this.ephemeralKey = ephemeralKey;
	}

	public String getPrimaryAccountNumber() {
		return primaryAccountNumber;
	}

	public void setPrimaryAccountNumber(String primaryAccountNumber) {
		this.primaryAccountNumber = primaryAccountNumber;
	}

	public String getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(String expirationDate) {
		this.expirationDate = expirationDate;
	}

	public String getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(String securityCode) {
		this.securityCode = securityCode;
	}

	public String getImageToken() {
		return imageToken;
	}

	public void setImageToken(String imageToken) {
		this.imageToken = imageToken;
	}

	public String getImageKey() {
		return imageKey;
	}

	public void setImageKey(String imageKey) {
		this.imageKey = imageKey;
	}

	public Long getImageCreatetime() {
		return imageCreatetime;
	}

	public void setImageCreatetime(Long imageCreatetime) {
		this.imageCreatetime = imageCreatetime;
	}

	@Override
	public String toString() {
		return String.format(
				"PaymentRequest [paymentId=%s, ephemeralKey=%s, primaryAccountNumber=%s%s%s, expirationDate=%s, securityCode=%s, imageToken=%s, imageKey=%s, imageCreatetime=%s]",
				paymentId, ephemeralKey,
				primaryAccountNumber.replaceAll("^(.{6}).*.{4}$", "$1"),
				primaryAccountNumber.replaceAll("^.{6}(.+).{4}$", "$1").replaceAll(".", "*"),
				primaryAccountNumber.replaceAll("^.{6}.*(.{4})$", "$1"),
				expirationDate, securityCode.replaceAll(".", "*"), imageToken, imageKey, imageCreatetime);
	}

}
