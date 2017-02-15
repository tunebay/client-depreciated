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

(function(){

  const parallax = document.querySelectorAll('#jumbo-con');
  const speed = 0.5;

  window.onscroll = () => {
    [].slice.call(parallax).forEach((el, i) => {
      const windowYOffset = window.pageYOffset;
      const elBackgrounPos = '50% ' + (windowYOffset * speed) + 'px';

      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();

export default Jumbotron;
