import React from 'react';
import Shoutout from './shoutout';
import '../../../styles/components/welcome/jumbotron.scss';

const Jumbotron = () => {
  return (
    <div id="jumbo-con">
      <img src="../../../assets/images/header-logo.png" id="jumbo-logo" alt="logo" />
      <Shoutout />
    </div>
  );
};

export default Jumbotron;
