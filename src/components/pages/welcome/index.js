import React from 'react';
import Jumbotron from './jumbotron';
import HotRightNow from './hot-right-now';
// import Layout from '../../../layout';

const Welcome = () => {
  document.title = 'Tunebay | For the love of music';
  return (
    <div style={{ backgroundColor: '#fff', height: 1000 }}>
      <Jumbotron />
      <HotRightNow />
    </div>
  );
};

export default Welcome;
