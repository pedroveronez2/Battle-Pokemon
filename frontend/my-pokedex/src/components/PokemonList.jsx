import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import PokemonDetailsModal from './PokemonDetailsModal';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/pokemon/list?limit=151')
      .then((response) => {
        setPokemonList(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de Pokémon', error);
      });
  }, []);

  const pokemonsPerRow = 4;

  const openPokemonDetails = (pokemonId) => {
    // Busque os dados do Pokémon pela URL apropriada
    axios
      .get(`http://localhost:8080/api/pokemon/${pokemonId}`)
      .then((response) => {
        setSelectedPokemon(response.data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error('Erro ao buscar os detalhes do Pokémon', error);
      });
  };

  const closePokemonDetails = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {pokemonList.map((pokemon) => (
          <li
            key={pokemon.id}
            style={{
              flexBasis: `calc(100% / ${pokemonsPerRow})`,
              textAlign: 'center',
              margin: '10px 0',
            }}
          >
            <PokemonCard pokemon={pokemon} />
            <button onClick={() => openPokemonDetails(pokemon.id)}>
              Ver Detalhes
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <PokemonDetailsModal
          pokemon={selectedPokemon}
          onClose={closePokemonDetails}
        />
      )}
    </div>
  );
}

export default PokemonList;
