import React from 'react';
import Jumbotron from './jumbotron';
import HotRightNow from './hot-right-now';

const Welcome = () => {
  document.title = 'Tunebay | For the love of music';

  return (
    <div className="welcome-con">
      <Jumbotron />
      <HotRightNow />
    </div>
  );
};

export default Welcome;
