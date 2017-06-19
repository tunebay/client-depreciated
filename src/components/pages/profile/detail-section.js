import React, { Component } from 'react';
import './styles/detail-section.scss';

class DetailSection extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id="detail-section">
        <div id="artwork-con">
          <img
            id="artwork"
            alt="artwork"
            src={user.playlists[0].artwork || 'https://tunebay-upload.s3-eu-west-2.amazonaws.com/users/artwork/eb8c974a-3b35-48b0-bd59-d102ec4d7a38'}
          />
        </div>
      </div>
    );
  }
}

export default DetailSection;
