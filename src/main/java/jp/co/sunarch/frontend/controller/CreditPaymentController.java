package jp.co.sunarch.frontend.controller;

import java.time.Instant;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.co.sunarch.frontend.bean.PaymentRequest;
import jp.co.sunarch.frontend.bean.PaymentResponse;

@RestController
@RequestMapping("/api/v1")
public class CreditPaymentController {

	Logger log = LoggerFactory.getLogger(CreditPaymentController.class);

	@PostMapping(path="/payment", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PaymentResponse> purchase(@RequestBody PaymentRequest req) throws Exception {

		// TODO: stub
		PaymentResponse res = new PaymentResponse();
		res.setStatus("OK");
		res.setProcessingTime(Instant.now().getEpochSecond());

		// TODO: sleep
		TimeUnit.SECONDS.sleep(Math.round(Math.random() * 5));

		log.info("{}", res);
		return ResponseEntity.ok(res);

	}

}
