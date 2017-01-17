import React, { Component } from 'react';

import '../styles/components/header.scss';

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <ul className="header-secitons">
          <li className="header-left">
            <ul>
              <li>Logo</li>
              <li>Discover</li>
            </ul>
          </li>
          <li className="header-middle">
            <div className="header-search">
              Search Bar
            </div>
          </li>
          <li className="header-right">
            <div>
              Search Bar
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
