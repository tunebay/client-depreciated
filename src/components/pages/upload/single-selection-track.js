import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import formatSeconds from '../../../util/format-seconds';
import * as actions from '../../../actions/uploaded-track-actions';

class SingleSelectionTrack extends Component {
  handleCheckingBox(e) {
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
          <div className="price-input">
            <div className={currencyBoxClass}>£</div>
            <input
              type="number"
              step="0.01"
              min="0.25"
              max="999.99"
              required
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
