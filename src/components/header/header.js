import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import LoginModal from '../auth/login/login-modal';
import * as actions from '../../actions/auth-actions';

import '../../styles/components/header/header.scss';

class Header extends Component {
  renderRight() {
    if (this.props.unauth) {
      return (
        <div id="header-right">
          <div className="icon-div dropdown">
            <img
              src="../../../assets/images/bell.svg"
              alt="search"
              className="bell-icon"
            />
          </div>
          <button
            onClick={this.props.showLoginModal}
            className="login-link"
          >Log In</button>
          <LoginModal
            isVisable={this.props.loginModalVisable}
            requestCloseFn={this.props.hideLoginModal}
          />
          <NavLink
            className="signup-link"
            to="/signup"
          >Sign Up</NavLink>
        </div>
      );
    }
    const { displayName, username } = this.props.currentUser; // must happen after unauth
    return (
      <div id="header-right">
        <div className="icon-div">
          <img
            src="../../../assets/images/bell.svg"
            alt="search"
            className="bell-icon"
          />
        </div>
        <div className="icon-div dropdown">
          <img
            src="../../../assets/images/chat.svg"
            alt="search"
            className="bell-icon"
          />
        </div>
        <Link to={`/${username}`} className="user-dropdown">
          <Icon name="user-circle-o" size="2x" className="fa-user" />
          <div className="display-name">{displayName}</div>
          <Icon name="caret-down" className="fa-caret" />
        </Link>
        <NavLink
          className="upload-link"
          to="/upload"
        >UPLOAD</NavLink>
      </div>
    );
  }

  render() {
    return (
      <nav id="top-nav">
        <div id="header-left">
          <div className="logo-section">
            <img
              className="logo"
              src="../../../assets/images/logo.svg"
              alt="logo"
            />
            <img
              className="logo-text"
              src="../../../assets/images/tunebay-white.svg"
              alt="logo-text"
            />
          </div>

          <ul className="left-menu">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/malimichael">Discover</NavLink></li>
          </ul>
        </div>

        <div id="header-search">
          <div className="search-icon-con">
            <img
              src="../../../assets/images/search.svg"
              alt="search"
              className="search-icon"
            />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
        </div>

        {this.renderRight()}
      </nav>
    );
  }
}

Header.PropTypes = {
  unauth: PropTypes.boolean
};

Header.defaultProps = {
  unauth: false
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.currentUser,
    loginModalVisable: state.auth.loginModalVisable
  };
};

export default connect(mapStateToProps, actions)(Header);
