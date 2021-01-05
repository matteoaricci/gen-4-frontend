import React, { useState, useEffect } from 'react';
import HomeLoggedIn from '../components/HomeLoggedIn';

const Home = props => {
  return (
    <div>
      {props.loggedIn ? <HomeLoggedIn /> : <h1 style={{fontSize: '4rem', textAlign: 'center', marginTop: '15%', color: 'dark grey'}}>Please Login to Access Page</h1>}
    </div>
  );
};

export default Home;
