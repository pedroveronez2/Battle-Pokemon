import React, { createContext, useState } from 'react';

export const Mycontext = createContext();

export const MycontextProvider = ({ children }) => {
  // Defina os parâmetros iniciais
  const [parametro, setParametro] = useState('Valor Inicial');

  return (
    <Mycontext.Provider value={{ parametro, setParametro }}>
      {children}
    </Mycontext.Provider>
  );
};

