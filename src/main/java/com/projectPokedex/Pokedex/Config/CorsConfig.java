package com.projectPokedex.Pokedex.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // Defina o caminho da API que você deseja permitir
                        .allowedOrigins("http://localhost:3000") // Permita solicitações deste domínio
                        .allowedMethods("GET", "POST", "PUT", "DELETE") // Permita métodos HTTP
                        .allowCredentials(true); // Permita enviar credenciais (por exemplo, cookies)
            }
        };
    }
}
