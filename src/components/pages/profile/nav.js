import React, { Component } from 'react';
import './styles/nav.scss';

class NavBar extends Component {
  render() {
    return (
      <div id="profile-nav">
        <div id="nav-content">
          <div className="profile-nav-link-active">All</div>
          <div className="profile-nav-link">Music</div>
          <div className="profile-nav-link">Videos</div>
          {/* <div className="profile-nav-link">Collection (12)</div> */}
        </div>
      </div>
    );
  }
}

export default NavBar;
