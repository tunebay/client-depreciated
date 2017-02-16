import React, { Component } from 'react';

import Header from '../../header/header';
import HubContainer from './hub-container';
import HubSideNav from './hub-side-nav';
import HubContent from './hub-content';
import Upload from '../../upload';

import '../../../styles/components/hub/hub.scss';

class Hub extends Component {
  render() {
    return (
      <div className="hub-page">
        <Header />
        <HubContainer>
          <HubSideNav />
          <HubContent>
            <Upload />
            <div className="long-content" />
          </HubContent>
        </HubContainer>
      </div>
    );
  }
}

export default Hub;
