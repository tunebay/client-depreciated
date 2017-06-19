import React, { Component } from 'react';
import PlaylistDisplay from './playlist-display';

class UserPlaylists extends Component {
  render() {
    const { playlists } = this.props;
    return (
      <ul id="user-playlists">
        {playlists.map((playlist) => {
          return <PlaylistDisplay playlist={playlist} />;
        })}
      </ul>
    );
  }
}

export default UserPlaylists;
