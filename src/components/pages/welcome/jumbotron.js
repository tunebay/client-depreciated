import React from 'react';
import { Link } from 'react-router-dom';
// import Shoutout from './shoutout';
// import FormContainer from './form-container';
import '../../../styles/components/welcome/jumbotron.scss';

const Jumbotron = () => {
  return (
    <div id="jumbo-con">
      <div className="logo-con">
        <img src="../../../../assets/images/logo.svg" alt="logo" className="logo" />
        <img src="../../../../assets/images/tunebay-light.svg" alt="logo" className="tunebay" />
      </div>
      <div className="overlay">

        <div className="shout-out">
          <h1 className="title">For the love of music!</h1>
          <p className="tag">Connect with a directly support the artists and music you love.</p>
          <div className="action-buttons">
            <Link className="discover-btn" to="/discover">Discover</Link>
            <Link className="sell-your-own-btn" to="/">Sell your own</Link>
          </div>
        </div>
        <div className="call-to-action">

        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
