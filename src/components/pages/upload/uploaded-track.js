import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'sweetalert2/dist/sweetalert2.css';
import alert from 'sweetalert2';
import { Circle } from 'react-progressbar.js';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import * as actions from '../../../actions/uploaded-track-actions';

const DragHandle = SortableHandle(() => {
  return (
    <img
      src="../../../../assets/images/bars.svg"
      alt="drag"
      className="drag-handle"
    />
  );
});

class UploadedTrack extends Component {
  handleInputChange(e) {
    const { track } = this.props;
    this.props.updateTrackName(e.target.value, track.trackId);
  }

  handleBinClick() {
    const { trackId } = this.props.track;
    alert({
      title: 'Are you sure?',
      text: 'Do you really want to delete this track?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })
    .then(() => {
      this.props.deleteTrack(trackId);
    })
    .catch(() => {
      // do nothing //
    });
  }

  renderPorgress() {
    const { progress, trackId, tickAnimationPlayed } = this.props.track;
    if (tickAnimationPlayed) {
      return (
        <div className="check-container-static">
          <svg className="checkmark-static" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle-static" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check-static" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
        </div>
      );
    }
    if (progress === 100) {
      this.props.startAnimationTimer(trackId);
      return (
        <div className="check-container">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
        </div>
      );
    }
    const options = {
      strokeWidth: 11,
      color: '#0089EE',
      trailColor: '#e4e4e4'
    };

    const containerStyle = {
      height: 32,
      width: 32
    };
    return (
      <Circle
        progress={progress / 100}
        options={options}
        initialAnimate={false}
        containerStyle={containerStyle}
        containerClassName={'progressbar'}
      />
    );
  }

  render() {
    const { track } = this.props;
    console.log('PROGRESS', track.progress);
    return (
      <li className="uploaded-track" key={`track-${track.trackId}`}>
        <div className="playlist-position">{track.playlistPosition}</div>
        <DragHandle />
        <input
          className="track-name-input"
          type="text"
          onChange={this.handleInputChange.bind(this)}
          value={track.name}
          placeholder={track.filename}
          required
        />
        {this.renderPorgress()}
        <button
          className="delete-track-button"
          onClick={this.handleBinClick.bind(this)}
          type="button"
        >
          <img
            className="x-o"
            src="../../../../assets/images/x-o.svg"
            alt="delete track"
          />
        </button>
      </li>
    );
  }
}

export default connect(null, actions)(SortableElement(UploadedTrack));
