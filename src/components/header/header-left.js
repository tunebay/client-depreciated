import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../styles/components/header/header-left.scss';

class HeaderLeft extends Component {
  render() {
    return (
      <div className="header-left">
        <div className="logo left-section">
          <img
            src="../../../assets/images/header-logo.png"
            alt="header-logo"
            className="tunebay-logo"
          />
        </div>

        <div className="left-section home">
          <Link to="/" className="header-link">Home</Link>
        </div>
        <div className="discover left-section">
          <Link to="/discover" className="header-link">Discover</Link>
        </div>
      </div>
    );
  }
}

export default HeaderLeft;
