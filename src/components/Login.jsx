import React, { Component } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';

class login extends Component {
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

  handleOnSubmit = () => {
    let username = this.state.username;
    let password = this.state.password;
    fetch('http://3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(resp => resp.json())
      .then(user => console.log(user));
  };

  render() {
    return (
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={this.handleOnSubmit}>
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
                Sign In
              </Button>
            </form>
          </Box>
          <Link style={{ textDecoration: 'none' }} href="/register">
            <Button>Need to make an account?</Button>
          </Link>
        </Box>
      </Flex>
    );
  }
}

export default login;
