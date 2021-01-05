import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const typeColors = {
  fire: 'Crimson',
  water: 'Blue',
  grass: 'Green',
  electric: 'Yellow',
  flying: 'LightCyan',
  ground: 'Chocolate',
  normal: 'Bisque',
  steel: 'LightGrey',
  poison: 'Purple',
  psychic: 'PaleVioletRed',
  dark: 'Black',
  bug: 'Chartreuse',
  fighting: 'Brown',
  rock: 'SaddleBrown',
  ghost: 'RebeccaPurple',
  ice: 'WhiteSmoke',
  dragon: 'DarkSlateBlue',
  fairy: 'LightPink'
};

const PokemonCard = props => {
  const { poke } = props;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={
        props.clickPokemon !== null
          ? () => props.clickPokemon(props.poke)
          : null
      }
    >
      <Box
        rounded="10px"
        overflow="hidden"
        boxShadow="md"
        w="200px"
        h="200px"
        bg={typeColors[poke.type_1]}
        style={{
          textAlign: 'center',
          textTransform: 'capitalize',
          margin: '0 auto',
        }}
      >
        <Box
          rounded="10px"
          style={{ margin: '10px auto' }}
          bg="white"
          w="180px"
          h="180px"
        >
          <Image style={{ margin: '0 auto' }} src={poke.sprite} />
          <Box pt={1}>{poke.name}</Box>
          <Box pt={5}>
            {poke.type_1} {poke.type_2}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default PokemonCard;
