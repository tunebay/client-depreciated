import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import '../../styles/components/header/header-search.scss';

class HeaderSearch extends Component {
  render() {
    return (
      <div className="header-search">
        <div className="icon-container">
          <Icon name="search" className="search-icon" />
        </div>
        <input className="search-bar" type="text" placeholder="Search" />
      </div>
    );
  }
}

export default HeaderSearch;
