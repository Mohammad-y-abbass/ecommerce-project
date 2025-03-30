package com.ecommerce.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {

		Dotenv dotenv = Dotenv.configure()
				.directory("C:/Users/dell/OneDrive - Lebanese University/Desktop/ecommerce/backend/.env")
				.load();

		// Set environment variables manually
		System.setProperty("DB_URL", dotenv.get("DB_URL"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));

		System.setProperty("TOKEN_SECRET", dotenv.get("TOKEN_SECRET"));
		System.setProperty("TOKEN_EXPIRATION", dotenv.get("TOKEN_EXPIRATION"));

		SpringApplication.run(BackendApplication.class, args);
	}

}
