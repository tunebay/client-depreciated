import React, { Component } from 'react';
import UserPlaylists from './user-playlists';
import './styles/playlists-section.scss';

class PlaylistsSection extends Component {
  render() {
    const { playlists } = this.props;
    return (
      <div id="playlists-section">
        <UserPlaylists playlists={playlists} />
      </div>
    );
  }
}

export default PlaylistsSection;
