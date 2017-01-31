import React, { Component } from 'react';
import { Link } from 'react-router';

import '../../styles/components/header/header-control.scss';

class HeaderControl extends Component {
  render() {
    return (
      <div className="header-control">
        <div className="hub">
          <Link to="/hub" className="hub-link">Hub</Link>
        </div>
        <div className="dropdowns">
          <div className="dropdown-icon">
            <img
              src="../../../assets/images/bell-icon.png"
              alt="bell-icon"
              className="bell-icon"
            />
          </div>
          <div className="dropdown-icon">
            <img
              src="../../../assets/images/chat-icon.png"
              alt="chat-icon"
              className="chat-icon"
            />
          </div>
          <div className="dropdown-icon"><div className="avatar" /></div>
        </div>
      </div>
    );
  }
}

export default HeaderControl;
