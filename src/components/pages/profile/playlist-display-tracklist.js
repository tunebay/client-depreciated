import React, { Component } from 'react';

class PlaylistDisplayTracklist extends Component {
  render() {
    return (
      <ul id="playlist-display-tracklist">
        {this.props.tracks.map((track) => {
          return (
            <li id="playlist-track-item">
              {`${track.playlistPosition}. ${track.name}`}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PlaylistDisplayTracklist;
