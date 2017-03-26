import React from 'react';
import Icon from 'react-fontawesome';
import { Link } from 'react-router';

const HeaderLeft = () => {
  return (
    <div id="header-left">
      <div className="logo-section">
        <div id="hamburger">
          <Icon name="bars" size="2x" id="fa-bars" />
        </div>

        <img
          className="logo"
          src="../../../assets/images/logo.png"
          alt="logo"
        />
        <img
          className="logo-text"
          src="../../../assets/images/tunebay-text.png"
          alt="logo-text"
        />
      </div>

      <ul className="left-menu">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/discover">Discover</Link></li>
      </ul>
    </div>
  );
};

export default HeaderLeft;
