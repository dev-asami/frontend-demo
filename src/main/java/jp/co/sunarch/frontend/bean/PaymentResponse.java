package jp.co.sunarch.frontend.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaymentResponse {

	@JsonProperty("processing_time")
	Long processingTime;

	@JsonProperty("status")
	String status;

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

	@Override
	public String toString() {
		return String.format("PaymentResponse [processingTime=%s, status=%s]", processingTime, status);
	}

}
