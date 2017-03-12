import React, { Component } from 'react';
import Icon from 'react-fontawesome';

import '../../../styles/components/hub/hub-side-nav.scss';

class HubSideNav extends Component {
  render() {
    return (
      <div className="hub-side-nav">
        <div className="hub-nav-title"><h1>Hub</h1></div>
        <ul className="side-nav-ul">
          <li className="hub-nav-link-active">
            <Icon name="cloud-upload" className="hub-nav-icon-active" />
            Upload</li>
          <li className="hub-nav-link">
            <Icon name="music" className="hub-nav-icon" />
            Music</li>
          <li className="hub-nav-link">
            <Icon name="video-camera" className="hub-nav-icon" />
            Videos</li>
          <li className="hub-nav-link">
            <Icon name="bar-chart" className="hub-nav-icon" />
            Statistics</li>
          <li className="hub-nav-link">
            <Icon name="pie-chart" className="hub-nav-icon" />
            Sales</li>
          <li className="hub-nav-link">
            <Icon name="bullhorn" className="hub-nav-icon" />
            Promotions</li>
          <li className="hub-nav-link">
            <Icon name="check-circle-o" className="hub-nav-icon" />
            Premium</li>
        </ul>
      </div>
    );
  }
}

export default HubSideNav;
