import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import '../styles/components/header.scss';

class Header extends Component {
  renderHeaderRight() {
    console.log('Header auth check...', this.props.isAuthenticated);
    if (this.props.isAuthenticated) {
      return (
        <li className="header-right">
          <Link className="logout-btn" to="/logout">Log Out</Link>
        </li>
      );
    } else {
      return (
        <li className="header-right">
          <Link className="login-btn" to="/login">Log In</Link>
          <Link className="signup-btn" to="/signup">Sign Up</Link>
        </li>
      );
    }
  }

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
              <input type="text" />
            </div>
          </li>
          {this.renderHeaderRight()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth);
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);
