import React, { useState, useEffect } from 'react';
import { Grid } from '@chakra-ui/react';
import PokemonCard from '../components/PokemonCard';

const Pokemons = props => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pokemons')
      .then(resp => resp.json())
      .then(pokemons => setPokemons(pokemons));
  }, []);

  return (
    <Grid
      style={{ width: '70%', margin: '0 auto' }}
      templateColumns="repeat(3, 1fr)"
      rowGap={6}
      columnGap={100}
    >
      {pokemons.map((poke, index) => (
        <PokemonCard
          clickPokemon={props.clickPokemon !== null ? props.clickPokemon : null}
          poke={poke}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default Pokemons;
