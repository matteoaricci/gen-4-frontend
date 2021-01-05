import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Pokemons from './containers/Pokemons';
import NewTeam from './components/NewTeam';
import Home from './containers/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem('logged_in'))
  }, []);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navbar loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/login">
            <Login setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/register">
            <Register setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/newteam">
            <NewTeam />
          </Route>
          <Route path="/">
            <Home loggedIn={loggedIn} />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
