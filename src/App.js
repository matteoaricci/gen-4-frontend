import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login';
import Register from './components/Register';
import Pokemons from './containers/Pokemons';
import NewTeam from './components/NewTeam'

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/newteam">
            <NewTeam />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
