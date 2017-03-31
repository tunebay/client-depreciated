import React, { Component } from 'react';
import Content from '../content';
import HubContainer from './hub-container';
import HubSideNav from './hub-side-nav';
import HubContent from './hub-content';
import HubUpload from './upload/';
import '../../../styles/components/hub/hub.scss';

class Hub extends Component {
  render() {
    document.title = 'Tunebay | Hub';
    return (
      <Content>
        <HubContainer>
          <HubSideNav />
          {/* <div className="hub-header"><h3 className="hub-title">Upload</h3></div> */}
          <HubContent>
            <div className="hub-content-wrapper">
              <HubUpload />
            </div>
          </HubContent>
        </HubContainer>
      </Content>
    );
  }
}

export default Hub;
