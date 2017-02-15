import React from 'react';
import Shoutout from './shoutout';
import FormContainer from './form-container';
import '../../../styles/components/welcome/jumbotron.scss';

const Jumbotron = () => {
  return (
    <div id="jumbo-con">
      <img src="../../../assets/images/header-logo.png" id="jumbo-logo" alt="logo" />
      <div id="jumbo-main">
        <Shoutout />
        <FormContainer />
      </div>
    </div>
  );
};

export default Jumbotron;
