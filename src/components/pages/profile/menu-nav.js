import React, { Component } from 'react';
import './styles/menu-nav.scss';

class MenuNav extends Component {
  render() {
    const { playlistCount } = this.props;
    return (
      <ul id="menu-nav">
        <li className="menu-nav-item active">Music &nbsp;({playlistCount})</li>
        <li className="menu-nav-item">Videos</li>
        <li className="menu-nav-item">Collection</li>
      </ul>
    );
  }
}

export default MenuNav;
