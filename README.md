# README - Projeto API Spring Boot e Aplicativo React para Pokémons

Este é um projeto que consiste em uma API Spring Boot para acessar dados de Pokémons e um aplicativo React que consome essa API. A API consome a PokeAPI para obter informações detalhadas sobre Pokémons e fornece endpoints para acessar informações individuais e listas de Pokémons.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha os seguintes pré-requisitos instalados em sua máquina:

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (normalmente instalado automaticamente com o Node.js)

## Configurando e Executando a API Spring Boot

1. Clone este repositório em sua máquina:

   ```shell
   git clone https://github.com/pedroveronez2/API-POKEMON-SPRING-BOOT.git
Navegue até a pasta do projeto da API Spring Boot:

cd seu-projeto/api-spring-boot
Execute a aplicação Spring Boot:

./mvnw spring-boot:run
A API será iniciada em http://localhost:8080.

# Endpoints da API

GET /api/pokemon/{id}: Obtém informações detalhadas sobre um Pokémon específico com base em seu ID.
GET /api/pokemon/{nome}: Obtém informações detalhadas sobre um Pokémon específico com base em seu nome.
GET /api/pokemon/list?limit={limit}: Obtém uma lista de Pokémons com base no limite especificado.

## Configurando e Executando o Aplicativo React

Navegue até a pasta do projeto React:

cd seu-projeto/react-app

Instale as dependências do aplicativo React:

npm install

Inicie o aplicativo React:

npm start

# O aplicativo React será executado em http://localhost:3000 e deve ser aberto automaticamente em seu navegador padrão.

Usando o Aplicativo React
O aplicativo React permite que você visualize informações sobre Pokémons usando a API Spring Boot. Você pode acessar Pokémons específicos ou listar vários deles.

Certifique-se de que a API Spring Boot esteja em execução antes de usar o aplicativo React.
