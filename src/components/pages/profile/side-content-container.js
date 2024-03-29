import React, { Component } from 'react';
import TrendingArtists from './trending-artists';
import PromotedMusic from './promoted-music';

import './styles/side-content-container.scss';

class SideContentContainer extends Component {
  render() {
    return (
      <div className="side-content-container">
        <TrendingArtists />
        <PromotedMusic />
        <div className="side-content-footer">
          <ul className="footer-links">
            <li className="footer-item"><small>Tunebay © 2017</small></li>
            <li className="footer-link-item"><small>Terms</small></li>
            <li className="footer-link-item"><small>Privacy</small></li>
            <li className="footer-link-item"><small>Cookies</small></li>
            <li className="footer-link-item"><small>Careers</small></li>
          </ul>
        </div>
        <div className="side-content-spacer" />
      </div>
    );
  }
}

export default SideContentContainer;
