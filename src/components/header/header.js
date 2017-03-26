import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';

import '../../styles/components/header/header.scss';

class Header extends Component {
  componentWillMount() {
    console.log('rendering header...');
  }

  render() {
    return (
      <nav id="top-nav">
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
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Header);
