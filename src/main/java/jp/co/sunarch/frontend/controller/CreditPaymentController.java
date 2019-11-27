package jp.co.sunarch.frontend.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.Instant;
import java.util.Base64;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.code.kaptcha.Constants;
import com.google.code.kaptcha.impl.DefaultKaptcha;
import com.google.code.kaptcha.util.Config;

import jp.co.sunarch.frontend.bean.PaymentRequest;
import jp.co.sunarch.frontend.bean.PaymentResponse;

@RestController
@RequestMapping("/api/v1")
public class CreditPaymentController {

	Logger log = LoggerFactory.getLogger(CreditPaymentController.class);

	@PostMapping(path="/payment", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<PaymentResponse> purchase(@RequestBody PaymentRequest req) throws Exception {

		PaymentResponse res = new PaymentResponse();
		if(req.getExpirationDate().substring(2).compareTo("30") >= 0) {
			// TODO: Risk base demo
			Properties props = new Properties();
			props.setProperty(Constants.KAPTCHA_BORDER, "yes");
			props.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_LENGTH, "5");
			props.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_STRING, "12345689");
			props.setProperty(Constants.KAPTCHA_OBSCURIFICATOR_IMPL, "com.google.code.kaptcha.impl.WaterRipple");
			props.setProperty(Constants.KAPTCHA_NOISE_IMPL, "com.google.code.kaptcha.impl.NoNoise");
			props.setProperty(Constants.KAPTCHA_TEXTPRODUCER_CHAR_SPACE, "5");
			props.setProperty(Constants.KAPTCHA_TEXTPRODUCER_FONT_COLOR, "BLUE");
			Config config = new Config(props);
			DefaultKaptcha kaptcha = new DefaultKaptcha();
			kaptcha.setConfig(config);
			String capText = kaptcha.createText();
			BufferedImage bi = kaptcha.createImage(capText);
			ByteArrayOutputStream bao = new ByteArrayOutputStream();
			try {
				ImageIO.write(bi, "jpg", bao);
			} catch (IOException e) {
				log.error("An exception occurred during image creation.", e);
			}
			String base64Image = Base64.getEncoder().encodeToString(bao.toByteArray());
			long createTime = Instant.now().getEpochSecond();

			// TODO: For now, Base64.
			String tokenKey = Base64.getEncoder().encodeToString(String.format("%1$s\t%2$020d", capText, createTime).getBytes());

			res.setStatus("PENDING");
			res.setImageb64(String.format("data:image/jpeg;base64,%1$s", base64Image));
			res.setImageToken(tokenKey);
			res.setImageCreatetime(createTime);
		}else {
			res.setStatus("OK");
		}
		res.setProcessingTime(Instant.now().getEpochSecond());

		// TODO: sleep
		TimeUnit.SECONDS.sleep(Math.round(Math.random() * 10));

		log.info("{}", res);
		return ResponseEntity.ok(res);

	}

}
