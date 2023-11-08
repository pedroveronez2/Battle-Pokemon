import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticação

  // Função para simular o logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Sair</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Cadastro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
