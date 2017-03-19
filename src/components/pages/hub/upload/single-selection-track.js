import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from 'react-fontawesome';
import { connect } from 'react-redux';
import formatSeconds from '../../../../util/format-seconds';
import * as actions from '../../../../actions/hub/uploaded-track-actions';
import '../../../../styles/components/hub/upload/single-selection-track.scss';

class SingleSelectionTrack extends Component {
  handleCheckingBox(e) {
    console.log('INPUT CHANGE', e.target.value);
    const { trackId } = this.props.track;
    this.props.updateSingleStatus(e.target.checked, trackId);
  }

  handleInputChange(e) {
    const { trackId } = this.props.track;
    this.props.updateTrackPrice(e.target.value, trackId);
  }

  render() {
    const { track } = this.props;
    const liClass = classNames({
      'single-selection-track': true,
      'odd-track': track.playlistPosition % 2 !== 0,
      'even-track': track.playlistPosition % 2 === 0
    });

    const currencyBoxClass = classNames({
      'currency-box': true,
      'box-disabled': !track.isASingle,
      'box-active': track.isASingle
    });

    console.log('TRACK:', track);
    return (
      <li className={liClass}>
        <div id="position">{track.playlistPosition}</div>
        <div id="name"><div>{track.name}</div></div>
        <div id="time">{formatSeconds(track.duration)}</div>
        <div id="single">
          <input
            type="checkbox"
            checked={track.isASingle}
            onChange={this.handleCheckingBox.bind(this)}
          />
        </div>
        <div id="price">
          {/* <div className="playlist-only">Album only</div> */}
          <div className="price-input">
            <div className={currencyBoxClass}><Icon id="currency" name="gbp" /></div>
            <input
              type="number"
              step="0.01"
              value={track.price}
              onChange={this.handleInputChange.bind(this)}
              disabled={!track.isASingle}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default connect(null, actions)(SingleSelectionTrack);
