import React, { Component } from 'react';
import classNames from 'classnames';
import formatSeconds from '../../../../util/format-seconds';
import '../../../../styles/components/hub/upload/single-selection-track.scss';

class SingleSelectionTrack extends Component {
  render() {
    const { track } = this.props;
    const liClass = classNames({
      'single-selection-track': true,
      'odd-track': track.playlistPosition % 2 !== 0,
      'even-track': track.playlistPosition % 2 === 0
    });

    return (
      <li className={liClass}>
        <div id="position">{track.playlistPosition}</div>
        <div id="name"><div>{track.name}</div></div>
        <div id="time">{formatSeconds(track.duration)}</div>
        <div id="single"><input type="checkbox" /></div>
        <div id="price"><input type="text" /></div>
      </li>
    );
  }
}

export default SingleSelectionTrack;
