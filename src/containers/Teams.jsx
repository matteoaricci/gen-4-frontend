import React, { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import { Grid, Box } from '@chakra-ui/react';

class Teams extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/user_teams')
      .then(resp => resp.json())
      .then(teams => this.setState({ teams: teams }));
  }

  render() {
    return (
      <Grid templateColumns="repeat(6, 1fr)" gap="6">
        {this.state.teams.map(teams => {
          <Box>
            {teams.map(poke => (
              <PokemonCard poke={poke} />
            ))}
          </Box>;
        })}
      </Grid>
    );
  }
}

export default Teams;
