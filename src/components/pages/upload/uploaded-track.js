import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Circle as Progress } from 'rc-progress';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import * as actions from '../../../actions/hub/uploaded-track-actions';
// import '../../../../styles/components/hub/upload/uploaded-track.scss';

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
    const answer = window.confirm('Do you really want to delete this track?');
    if (answer) { this.props.deleteTrack(trackId); }
  }

  render() {
    console.log('PROPS', this.props);
    const { track } = this.props;
    console.log(track);
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
        <Progress
          strokeWidth="12"
          trailWidth="12"
          strokeColor={'#1596F5'}
          strokeLinecap="round"
          percent={track.progress || 0}
          style={{ height: 30, width: 30 }}
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
