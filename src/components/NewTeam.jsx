import React, { Component } from 'react';
import Pokemons from '../containers/Pokemons';
import { Grid, Box, GridItem, Button, Center } from '@chakra-ui/react';
import PokemonCard from './PokemonCard';

class NewTeam extends Component {
  constructor() {
    super();
    this.state = {
      newTeam: [],
    };
  }

  clickPokemon = poke => {
    if (this.state.newTeam.length < 6) {
      this.setState({ newTeam: [...this.state.newTeam, poke] });
    }
  };

  clickTeam = index => {
    this.state.newTeam.splice(index, 1);
    this.setState({ newTeam: [...this.state.newTeam] });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/new_team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      credentials: "include",
      body: JSON.stringify({ message: 'Howdy!'})
    })
  }

  render() {
    return (
      <div>
        <Box h="200px" w="100%">
          <Grid templateColumns="repeat(6, 1fr)">
            {this.state.newTeam.map((poke, index) => (
              <GridItem onClick={() => this.clickTeam(index)}>
                <PokemonCard
                  clickPokemon={null}
                  style={{ margin: '0 auto' }}
                  poke={poke}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Center m='10'>
          <Button onClick={(e) => this.handleOnClick(e)} >Make New Team</Button>
        </Center>
        <Pokemons clickPokemon={this.clickPokemon} />
      </div>
    );
  }
}

export default NewTeam;
