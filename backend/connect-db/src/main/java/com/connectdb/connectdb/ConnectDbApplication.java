package com.connectdb.connectdb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*", allowedHeaders = "*") // Configuração CORS global
public class ConnectDbApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConnectDbApplication.class, args);
	}

}
