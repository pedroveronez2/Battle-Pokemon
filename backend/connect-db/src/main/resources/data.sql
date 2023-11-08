CREATE TABLE pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

INSERT INTO pessoa (nome, email, senha) VALUES ('lucas', 'email@example.com', 'senhaSegura');
