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
      <div className={navClass} />
    );
  }
}

export default NavBar;
