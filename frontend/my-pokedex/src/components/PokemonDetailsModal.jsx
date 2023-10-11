import React from 'react';

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
};

function PokemonDetailsModal({ pokemon, onClose }) {
  return (
    <div style={modalContainerStyles}>
      <div style={modalStyles}>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.frontAnimatedImage} alt={`${pokemon.name} (frente animada)`} />
        <img src={pokemon.backAnimatedImage} alt={`${pokemon.name} (costas animada)`} />
        <p>ID: {pokemon.id}</p>
        <p>Tipo: {pokemon.types.join(', ')}</p>
        <p>Habilidades: {pokemon.abilities.join(', ')}</p>
        <h3>Estatísticas:</h3>
        <ul>
          <li>Ataque: {pokemon.stats.attack}</li>
          <li>Defesa: {pokemon.stats.defense}</li>
          <li>HP: {pokemon.stats.hp}</li>
          <li>Ataque Especial: {pokemon.stats['special-attack']}</li>
          <li>Defesa Especial: {pokemon.stats['special-defense']}</li>
          <li>Velocidade: {pokemon.stats.speed}</li>
        </ul>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default PokemonDetailsModal;
