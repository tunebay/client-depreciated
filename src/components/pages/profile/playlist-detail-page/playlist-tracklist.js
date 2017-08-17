import React, { Component } from 'react';
import className from 'classnames';
import formatSeconds from '../../../../util/format-seconds';
import './styles/playlist-tracklist.scss';

class PlaylistTrackList extends Component {
  getTrStyles(index) {
    return className({
      tr: true,
      'tr-odd': index % 2,
    });
  }

  onTrackClick(track) {
    console.log(track);
  }

  render() {
    const { tracks, playlistType } = this.props;

    return (
      <table className="playlist-tracklist">
        <thead className="thead">
          <tr className="tr">
            <th className="th header-position">
              <span className="position-arrow">&#9660;</span>
            </th>
            <th className="th">NAME</th>
            <th className="th">TIME</th>
            <th className="th">PRICE</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tracks.map((track, index) => {
            return (
              <tr
                onClick={() => this.onTrackClick(track)}
                key={track.id}
                className={this.getTrStyles(index)}
              >
                <td className="td position">
                  {track.playlistPosition}
                </td>
                <td className="td name">
                  {track.name}
                </td>
                <td className="td duration">
                  {formatSeconds(track.duration)}
                </td>
                <td className="td price">
                  {track.isASingle ? 'single' : `${playlistType} only`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default PlaylistTrackList;
