import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';

import HeaderLeft from './header-left';

import '../../styles/components/header/header.scss';

class Header extends Component {
  componentWillMount() {
    console.log('rendering header...');
  }

  render() {
    return (
      <nav id="top-nav">
        <HeaderLeft />

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
