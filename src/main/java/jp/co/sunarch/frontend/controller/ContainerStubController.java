package jp.co.sunarch.frontend.controller;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ContainerStubController {

	@RequestMapping(path="/")
	public String driver(Model model) throws NoSuchAlgorithmException {
		String paymentId = UUID.randomUUID().toString();
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		byte[] hashBytes = md.digest(paymentId.getBytes(StandardCharsets.UTF_8));
		model.addAttribute("paymentId", paymentId);
		model.addAttribute("signature", bin2hex(hashBytes));
		return "tp";
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handleException(Exception exception) {
		return ResponseEntity.status(500).body("Internal server error.");
	}

	String bin2hex(byte[] data) {
		StringBuilder sb = new StringBuilder();
		for (byte b : data) {
			String s = Integer.toHexString(0xff & b);
			if (s.length() == 1) {
				sb.append("0");
			}
			sb.append(s);
		}
		return sb.toString();
	}

}
