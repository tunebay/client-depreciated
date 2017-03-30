import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import { NavLink } from 'react-router-dom';

import '../../styles/components/header/header.scss';

class Header extends Component {
  componentWillMount() {
    console.log('rendering header...');
  }

  isActiveFunc(match, location) {
    console.log(match, location);
    return match;
  }

  render() {
    const { displayName } = this.props.currentUser;
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

        <div id="header-right">
          <div className="user">
            <Icon name="user-circle-o" size="2x" className="fa-user" />
            <div className="display-name">{displayName}</div>
            <Icon name="caret-down" className="fa-caret" />
          </div>
          <div className="icon-div dropdown">
            <Icon className="fa-bell" name="bell" />
          </div>
          <div className="icon-div dropdown">
            <Icon className="fa-comment" name="comment" />
          </div>
          <NavLink
            className="nav-link upload-link"
            isActive={this.isActiveFunc.bind(this)}
            activeStyle={{ backgroundColor: 'pink' }}
            activeClassName="active"
            to="/hub"
          >
          Upload</NavLink>
        </div>
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
