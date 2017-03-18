import React, { Component } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import '../../../../styles/components/hub/upload/single-selection-track.scss';

class SingleSelectionTrack extends Component {
  render() {
    const { track } = this.props;
    const liClass = classNames({
      'single-selection-track': true,
      'odd-track': track.playlistPosition % 2 !== 0,
      'even-track': track.playlistPosition % 2 === 0
    });
    console.log('LI CLASS:', liClass);
    const formattedTime = moment('2015-01-01').startOf('day')
    .seconds(track.duration)
    .format('H:mm:ss');
    return (
      <li className={liClass}>
        <div id="position">{track.playlistPosition}</div>
        <div id="name"><div>{track.name}</div></div>
        <div id="time">{formattedTime}</div>
        <div id="single"><input type="checkbox" /></div>
        <div id="price"><input type="text" /></div>
      </li>
    );
  }
}

export default SingleSelectionTrack;
