import React, { Component } from 'react';
import UserPlaylists from './user-playlists';
import './styles/playlists-section.scss';

class PlaylistsSection extends Component {
  render() {
    const { playlists } = this.props;
    console.log(playlists.length === 0);
    return (
      <div id="playlists-section">
        {playlists.length !== 0 ?
          <UserPlaylists playlists={playlists} /> :
          <div className="no-playlists">Nothing to hear here, this user hasnt uploaded any music yet.</div>
        }
      </div>
    );
  }
}

export default PlaylistsSection;
