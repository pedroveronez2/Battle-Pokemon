import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import PokemonDetailsModal from './PokemonDetailsModal';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loadingError, setLoadingError] = useState(null);
  const [noResults, setNoResults] = useState(false); // Estado para rastrear nenhum resultado encontrado

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/pokemon/list?limit=151')
      .then((response) => {
        setPokemonList(response.data);
        setLoadingError(null);
      })
      .catch((error) => {
        console.error('Erro ao buscar a lista de Pokémon', error);
        setLoadingError('Ocorreu um erro ao carregar a lista de Pokémon.');
      });
  }, []);

  const pokemonsPerRow = 4;

  const openPokemonDetails = (pokemonId) => {
    axios
      .get(`http://localhost:8080/api/pokemon/${pokemonId}`)
      .then((response) => {
        setSelectedPokemon(response.data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error('Erro ao buscar os detalhes do Pokémon', error);
        setLoadingError('Ocorreu um erro ao carregar os detalhes do Pokémon.');
      });
  };

  const closePokemonDetails = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
    setLoadingError(null);
  };

  const searchValue = searchText.toLowerCase();
  const filteredPokemonList = pokemonList.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchValue) ||
      pokemon.id.toString().includes(searchValue)
    );
  });

  // Verifica se nenhum resultado foi encontrado
  useEffect(() => {
    setNoResults(filteredPokemonList.length === 0);
  }, [searchText, filteredPokemonList]);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <input
        type="text"
        placeholder="Pesquisar Pokémon por ID ou nome"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {loadingError ? (
        <div style={{ color: 'red' }}>{loadingError}</div>
      ) : noResults ? ( // Exibe a mensagem "Nenhum Pokémon encontrado" quando necessário
        <div>Nenhum Pokémon encontrado.</div>
      ) : (
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {filteredPokemonList.map((pokemon) => (
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
      )}
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
