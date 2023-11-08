import React, { useState } from 'react';

const modalContainerStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Alinhar o conteúdo no centro verticalmente
};

const arrowStyles = {
  cursor: 'pointer',
  fontSize: '24px',
  margin: '0 10px',
};

function PokemonDetailsModal({ pokemon, onClose }) {
  const {
    name,
    frontAnimatedImage,
    backAnimatedImage,
    id,
    types,
    abilities,
    stats,
  } = pokemon;

  const [showFrontImage, setShowFrontImage] = useState(true);

  const toggleImage = () => {
    setShowFrontImage(!showFrontImage);
  };

  return (
    <div style={modalContainerStyles}>
      <div style={modalStyles}>
        <h2>{name}</h2>
        <div>
          {showFrontImage ? (
            <img src={frontAnimatedImage} alt={`${name} (frente animada)`} />
          ) : (
            <img src={backAnimatedImage} alt={`${name} (costas animada)`} />
          )}
        </div>
        <div>
          <span
            style={arrowStyles}
            onClick={toggleImage}
          >
            {'<'}
          </span>
          <span
            style={arrowStyles}
            onClick={toggleImage}
          >
            {'>'}
          </span>
        </div>
        <p>ID: {id}</p>
        <p>Tipo: {types.join(', ')}</p>
        <p>Habilidades: {abilities.join(', ')}</p>
        <h3>Estatísticas:</h3>
        <ul>
          <li>Ataque: {stats.attack}</li>
          <li>Defesa: {stats.defense}</li>
          <li>HP: {stats.hp}</li>
          <li>Ataque Especial: {stats['special-attack']}</li>
          <li>Defesa Especial: {stats['special-defense']}</li>
          <li>Velocidade: {stats.speed}</li>
        </ul>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default PokemonDetailsModal;
