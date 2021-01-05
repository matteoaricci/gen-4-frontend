import React, { Component } from 'react';
import {useHistory} from 'react-router-dom'
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleOnChange = e => {
    const type = e.target.className.split(' ')[1];
    let val = e.target.value;
    this.setState({
      [type]: val,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "Access-Control-Allow-Credentials": true
      },
      credentials: "include",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(resp => resp.json())
      .then(user => {
        if (user.logged_in) {
          this.props.setLoggedIn(user.logged_in)
          localStorage.setItem("logged_in", true)
        }
      });
  };

  render() {
    return (
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Register</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={e => this.handleOnSubmit(e)}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  className="username"
                  type="text"
                  value={this.state.username}
                  onChange={e => this.handleOnChange(e)}
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Password</FormLabel>
                <Input
                  className="password"
                  value={this.state.password}
                  onChange={e => this.handleOnChange(e)}
                  type="password"
                  placeholder="*******"
                />
              </FormControl>
              <Button width="full" mt={4} type="submit">
                Create User
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    );
  }
}

export default Register;
