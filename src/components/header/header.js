import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import LoginModal from '../auth/login/login-modal';
import * as actions from '../../actions/auth-actions';
import { NavLink, Link } from 'react-router-dom';

import '../../styles/components/header/header.scss';

class Header extends Component {
  renderRight() {
    const { displayName, username } = this.props.currentUser;
    console.log(this.props.unauth);
    if (this.props.unauth) {
      return (
        <div id="header-right">
          <div className="icon-div dropdown">
            <Icon className="fa-bell" name="bell" />
          </div>
          <button
            onClick={this.props.showLoginModal}
            className="nav-link login-link"
            to="/hub"
          >Log In</button>
          <LoginModal
            isVisable={this.props.loginModalVisable}
            requestCloseFn={this.props.hideLoginModal}
          />
          <NavLink
            className="nav-link signup-link"
            to="/signup"
          >Sign Up</NavLink>
        </div>
      );
    }
    return (
      <div id="header-right">
        <Link to={`/${username}`} className="user-dropdown">
          <Icon name="user-circle-o" size="2x" className="fa-user" />
          <div className="display-name">{displayName}</div>
          <Icon name="caret-down" className="fa-caret" />
        </Link>
        <div className="icon-div dropdown">
          <Icon className="fa-bell" name="bell" />
        </div>
        <div className="icon-div dropdown">
          <Icon className="fa-comment" name="comment" />
        </div>
        <NavLink
          className="nav-link upload-button"
          to="/upload"
        >Upload</NavLink>
      </div>
    );
  }

  render() {
    return (
      <nav id="top-nav">
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
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/malimichael">Discover</NavLink></li>
          </ul>
        </div>

        <div id="header-search">
          <div className="icon-div">
            <Icon name="search" className="fa-search" />
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
