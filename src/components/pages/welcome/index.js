import React from 'react';
import Jumbotron from './jumbotron';
// import HotRightNow from './hot-right-now';
// import Layout from '../../../layout';

const Welcome = () => {
  document.title = 'Tunebay | For the love of music';
  return (
    <div>
      <Jumbotron />
    </div>
  );
};

export default Welcome;
