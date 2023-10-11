# Use a imagem base do OpenJDK para o Java
FROM openjdk:17

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo JAR do aplicativo Spring Boot para o contêiner
COPY target/Pokedex-0.0.1-SNAPSHOT.jar /app/app.jar

# Exponha a porta em que o aplicativo Spring Boot é executado (8080 por padrão)
EXPOSE 8080

# Comando para executar o aplicativo Spring Boot quando o contêiner for iniciado
CMD ["java", "-jar", "app.jar"]
