import React, { Component } from 'react';

import Header from '../header/header';
import MainContent from '../main-content';
import Upload from '../upload';

import '../../styles/components/hub/hub.scss';

class Hub extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent>
          <div className="hub-container">
            <div className="sidenav" />
            <div className="hub-details">
              <Upload />
            </div>
          </div>
        </MainContent>
      </div>
    );
  }
}

export default Hub;
