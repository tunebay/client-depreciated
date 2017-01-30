import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/components/header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <div className="header-section">
          <div className="header-left">Left</div>
        </div>
        <div className="header-section">
          <div className="header-search">Search</div>
        </div>
        <div className="header-section">
          <div className="header-player">Player</div>
        </div>
        <div className="header-section">
          <div className="header-control">Control</div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);
