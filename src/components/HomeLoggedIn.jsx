import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { Grid, Box } from '@chakra-ui/react';

const HomeLoggedIn = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch('https://localhost:3000/user_teams', { credentials: 'include' })
      .then(resp => resp.json())
      .then(pokemons => setPokemons(pokemons));
  }, []);
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap="6">
      {pokemons.map(teams => {
        <Box>
          {teams.map(poke => (
            <PokemonCard poke={poke} />
          ))}
        </Box>;
      })}
    </Grid>
  );
};

export default HomeLoggedIn;
