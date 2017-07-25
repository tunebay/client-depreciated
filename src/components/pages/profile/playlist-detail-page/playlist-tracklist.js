import React, { Component } from 'react';
import './playlist-tracklist';
import './styles/playlist-tracklist.scss';

class PlaylistTrackList extends Component {
  render() {
    const { tracks } = this.props;

    return (
      <table className="playlist-tracklist">
        <thead className="thead">
          <tr className="tr">
            <th className="th" />
            <th className="th">NAME</th>
            <th className="th">TIME</th>
            <th className="th">PRICE</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tracks.map((track) => {
            return (
              <tr className="tr">
                <td className="td position">{track.playlistPosition}</td>
                <td className="td">{track.name}</td>
                <td className="td">{track.duration}</td>
                <td className="td">{track.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PlaylistTrackList;
