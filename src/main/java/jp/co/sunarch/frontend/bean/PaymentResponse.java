package jp.co.sunarch.frontend.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaymentResponse {

	@JsonProperty("processing_time")
	Long processingTime;

	@JsonProperty("status")
	String status;

	@JsonProperty("image_b64")
	String imageb64;

	@JsonProperty("image_token")
	String imageToken;

	@JsonProperty("image_createtime")
	Long imageCreatetime;

	public Long getProcessingTime() {
		return processingTime;
	}

	public void setProcessingTime(Long processingTime) {
		this.processingTime = processingTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getImageb64() {
		return imageb64;
	}

	public void setImageb64(String imageb64) {
		this.imageb64 = imageb64;
	}

	public String getImageToken() {
		return imageToken;
	}

	public void setImageToken(String imageToken) {
		this.imageToken = imageToken;
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
				"PaymentResponse [processingTime=%s, status=%s, imageb64=%s, imageToken=%s, imageCreatetime=%s]",
				processingTime, status, imageb64, imageToken, imageCreatetime);
	}

}
