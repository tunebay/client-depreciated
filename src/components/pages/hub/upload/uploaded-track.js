import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import { Line as Progress } from 'rc-progress';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import * as actions from '../../../../actions/hub/uploaded-track-actions';
import '../../../../styles/components/hub/upload/uploaded-track.scss';

const DragHandle = SortableHandle(() => {
  return <span><Icon name="bars" size="lg" className="drag-handle" /></span>;
});

class UploadedTrack extends Component {
  handleInputChange(e) {
    const { track } = this.props;
    this.props.updateTrackName(e.target.value, track.trackId);
  }

  render() {
    const { track } = this.props;
    console.log(track);
    return (
      <li className="uploaded-track" key={`track-${track.trackId}`}>
        <Progress
          strokeWidth="2"
          trailWidth="2"
          strokeColor={'#1596F5'}
          strokeLinecap="square"
          percent={track.progress}
          style={{ height: 2, width: '100%' }}
        />
        <div className="uploaded-track-content">
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
          <Icon name="trash-o" className="remove-track-icon" />
        </div>
      </li>
    );
  }
}

export default connect(null, actions)(SortableElement(UploadedTrack));
