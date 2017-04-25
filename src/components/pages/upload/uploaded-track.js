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

  render() {
    const { track } = this.props;
    console.log('PROGRESS', track.progress);

    const options = {
      strokeWidth: 11,
      color: '#0089EE',
      trailColor: '#e4e4e4'
    };

    const containerStyle = {
      height: 30,
      width: 30
    };
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
        <Circle
          progress={track.progress / 100}
          options={options}
          initialAnimate={false}
          containerStyle={containerStyle}
          containerClassName={'progressbar'}
        />
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
