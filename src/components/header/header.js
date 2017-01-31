import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../styles/components/header/header.scss';

import HeaderLeft from './header-left';
import HeaderSearch from './header-search';
import HeaderControl from './header-control';
import HeaderPlayer from './header-player';

class Header extends Component {
  render() {
    return (
      <div className="header-con">
        <nav className="header">
          <div className="header-section">
            <HeaderLeft />
          </div>
          <div className="header-section">
            <HeaderSearch />
          </div>
          <div className="header-section">
            <HeaderPlayer />
          </div>
          <div className="header-section">
            <HeaderControl isAuthenticated={this.props.isAuthenticated} />
          </div>
        </nav>
        <div className="progress-con">
          <progress className="progress-bar" value="23" max="100" />
        </div>
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
