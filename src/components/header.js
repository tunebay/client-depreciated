import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import '../styles/components/header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <ul className="header-secitons">
          <li className="header-left">
            <ul>
              <li>
                <Link to="/" className="nav-home">
                  <img src="../../assets/images/logo.png" alt="Home" />
                  Home
                </Link>
              </li>
              <li>Discover</li>
            </ul>
          </li>
          <li className="header-middle">
            <div className="header-search">
              Search Bar
            </div>
          </li>
          <li className="header-right">
            <div>
              Search Bar
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);
