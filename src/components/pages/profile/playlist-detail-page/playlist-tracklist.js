import React, { Component } from 'react';
import formatSeconds from '../../../../util/format-seconds';
import './styles/playlist-tracklist.scss';

class PlaylistTrackList extends Component {
  render() {
    const { tracks, playlistType } = this.props;

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
              <tr key={track.id} className="tr">
                <td className="td position">{track.playlistPosition}</td>
                <td className="td name">{track.name}</td>
                <td className="td duration">{formatSeconds(track.duration)}</td>
                <td className="td price">{
                  track.isASingle ? 'single' : `${playlistType} only`
                }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PlaylistTrackList;
