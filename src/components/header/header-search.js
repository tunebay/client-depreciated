import React, { Component } from 'react';

import '../../styles/components/header/header-search.scss';

class HeaderSearch extends Component {
  render() {
    return (
      <div className="header-search">
        <div className="icon-container">
          <img
            src="../../../assets/images/search-icon.png"
            alt="search-icon"
            className="search-icon"
          />
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default HeaderSearch;
