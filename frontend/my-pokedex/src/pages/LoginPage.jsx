import React, { useState } from 'react';
import './Signup_login.css'; // Importe o mesmo arquivo de estilos do Signup

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
  };


  return (
    
    <div className="signup-container"> 


      <h2 className="signup-title">Login</h2> 
      <form onSubmit={handleSubmit}>
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
        <button className="signup-button" type="submit">Entrar</button> 
      </form>
    </div>
  );
}

export default LoginPage;
