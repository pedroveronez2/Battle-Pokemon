import React, { useState } from 'react';
import './Signup_login.css';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica de criação de conta, como enviar os dados para o servidor.
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
