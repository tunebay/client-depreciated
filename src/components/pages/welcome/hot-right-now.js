import React, { Component } from 'react';
import '../../../styles/components/welcome/hot-right-now.scss';

class HotRightNow extends Component {
  render() {
    return (
      <div id="hot-right-now-con">
        <h3 className="section-header">Hot Right Now:</h3>
        <ul className="playlists">
          {this.props.hotPlaylists.map((playlist) => {
            return (
              <li key={playlist.artwork}>
                <img
                  className="artwork"
                  src={playlist.artwork}
                  alt={playlist.name}
                />
                <div className="playlist-name">{playlist.name}</div>
                <div className="playlist-artist">{playlist.artist}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HotRightNow;
