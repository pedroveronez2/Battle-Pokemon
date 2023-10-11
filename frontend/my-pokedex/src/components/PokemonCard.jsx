import React from 'react';

const cardStyles = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  textAlign: 'center',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const imageStyles = {
  maxWidth: '100%',
  height: 'auto',
};

function PokemonCard({ pokemon }) {
  return (
    <li style={cardStyles}>
      <span>{pokemon.id}.</span>
      <img src={pokemon.frontImage} alt={pokemon.name} style={imageStyles} />
      <h3>{pokemon.name}</h3>
    </li>
  );
}

export default PokemonCard;
