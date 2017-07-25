import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/menu-nav.scss';

class MenuNav extends Component {
  render() {
    const { playlistCount, username } = this.props;
    return (
      <ul id="menu-nav">
        <NavLink to={`/${username}`} exact className="menu-nav-item">Music &nbsp;({playlistCount})</NavLink>
        <NavLink to={`/${username}/videos`} className="menu-nav-item">Videos</NavLink>
        <NavLink to={`/${username}/collection`} className="menu-nav-item">Collection</NavLink>
      </ul>
    );
  }
}

export default MenuNav;
