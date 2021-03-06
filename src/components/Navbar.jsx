import React from 'react';
import { Box, Heading, Flex, Text, Button, Link } from '@chakra-ui/react';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navbar = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="grey"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link style={{ textDecoration: 'none' }} href="/">
          <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            Team Maker
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        {props.loggedIn ? (
          <Link style={{ textDecoration: 'none' }} href="/newteam">
            <Button bg="transparent" border="1px">
              Make New Team
            </Button>
          </Link>
        ) : null}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        {props.loggedIn ? (
          <Link style={{ textDecoration: 'none' }} href="/logout">
            <Button bg="transparent" border="1px">
              Logout
            </Button>
          </Link>
        ) : (
          <Link style={{ textDecoration: 'none' }} href="/login">
            <Button bg="transparent" border="1px">
              Login
            </Button>
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
