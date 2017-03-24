import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';

import '../../styles/components/header/header.scss';

import HeaderSearch from './header-search';

class Header extends Component {
  componentWillMount() {
    console.log('rendering header...');
  }

  render() {
    return (
      <div className="header-con">
        <nav className="header">
          <div className="header-left-section">
            <img
              src="../../../assets/images/header-logo.png"
              alt="header-logo"
              className="tunebay-logo"
            />
            <Link to="/" className="header-link">Home</Link>
            <Link to="/malimichael" className="header-link">Discover</Link>
          </div>
          <div className="header-search-section">
            <HeaderSearch />
          </div>
          <div className="header-control-section">
            <div className="avatar-section">
              <div className="header-avatar" />
              <Icon name="angle-down" className="control-icon" />
            </div>
            <Link to="/upload" className="header-link upload">Upload</Link>
            <div className="control-icons">
              <Icon name="bell" size="lg" className="control-icon" />
              <Icon name="commenting" size="lg" className="control-icon" />
              <div className="pipe" />
              <Icon name="question-circle" size="lg" className="control-icon" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);
