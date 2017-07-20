import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/menu-nav.scss';

class MenuNav extends Component {
  render() {
    const { playlistCount, username } = this.props;
    return (
      <ul id="menu-nav">
        <Link to={`/${username}`} className="menu-nav-item active">Music &nbsp;({playlistCount})</Link>
        <Link to={`/${username}/videos`} className="menu-nav-item">Videos</Link>
        <Link to={`/${username}/collection`} className="menu-nav-item">Collection</Link>
      </ul>
    );
  }
}

export default MenuNav;
