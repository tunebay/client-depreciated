import React, { Component } from 'react';
import Layout from '../../../layout';
import HubContainer from './hub-container';
import HubSideNav from './hub-side-nav';
import HubContent from './hub-content';
import HubUpload from './upload/';
import '../../../styles/components/hub/hub.scss';

class Hub extends Component {
  render() {
    return (
      <Layout showHeader page={'Hub'}>
        <HubContainer>
          <HubSideNav />
          {/* <div className="hub-header"><h3 className="hub-title">Upload</h3></div> */}
          <HubContent>
            <div className="hub-content-wrapper">
              <HubUpload />
            </div>
          </HubContent>
        </HubContainer>
      </Layout>
    );
  }
}

export default Hub;
