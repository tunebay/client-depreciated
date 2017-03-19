import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from 'react-fontawesome';
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
        <div id="price">
          <div id="currency-box"><Icon id="currency" name="gbp" /></div>
          <input type="number" step="0.01" />
        </div>
      </li>
    );
  }
}

export default SingleSelectionTrack;
