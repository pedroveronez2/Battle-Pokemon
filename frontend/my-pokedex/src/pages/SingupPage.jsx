import React, { useState } from 'react';
import axios from 'axios';  // Importe o Axios
import './Signup_login.css';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos dados
    if (!name || !email || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Faça uma chamada para a API para validar os dados (substitua a URL pela sua API real)
      const response = await axios.post('http://localhost:8081/trainer', {
        "nome":name,
        "email":email,
        "senha": password,
      });

      // Verifique a resposta da API
      if (!response.data.success) {
        alert('Cadastro bem-sucedido!');
        // Limpe os campos do formulário
        setName('');
        setEmail('');
        setPassword('');
      } 
    } catch (error) {
      alert('Ocorreu um erro ao processar a solicitação.');
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="signup-input"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="signup-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="signup-button" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default SignupPage;
