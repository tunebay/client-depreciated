import React, { Component } from 'react';

import Header from '../../header/header';
import HubContainer from './hub-container';
import HubSideNav from './hub-side-nav';
import HubContent from './hub-content';
import HubUpload from './upload/';

import '../../../styles/components/hub/hub.scss';

class Hub extends Component {
  render() {
    return (
      <div className="hub-page">
        <Header />
        <HubContainer>
          <HubSideNav />
          <div className="hub-header"><h3 className="hub-title">Upload</h3></div>
          <HubContent>
            <div className="hub-content-wrapper">
              <HubUpload />
            </div>
          </HubContent>
        </HubContainer>
      </div>
    );
  }
}

export default Hub;
