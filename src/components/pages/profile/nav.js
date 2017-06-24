import React, { Component } from 'react';
import className from 'classnames';
import './styles/nav.scss';

class NavBar extends Component {
  render() {
    const navClass = className({
      'profile-nav': true,
      'fixed-nav': this.props.fixed
    });

    return (
      <div className={navClass}>
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
