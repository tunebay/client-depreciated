import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import { Circle as Progress } from 'rc-progress';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import * as actions from '../../../actions/hub/uploaded-track-actions';
// import '../../../../styles/components/hub/upload/uploaded-track.scss';

const DragHandle = SortableHandle(() => {
  return <span><Icon name="bars" size="lg" className="drag-handle" /></span>;
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
        <Icon name="trash-o" className="remove-track-icon" onClick={this.handleBinClick.bind(this)} />
      </li>
    );
  }
}

export default connect(null, actions)(SortableElement(UploadedTrack));
