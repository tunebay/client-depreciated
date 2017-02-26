import React, { Component } from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import { Circle as Progress } from 'rc-progress';
import * as actions from '../../../../actions/hub/upload-actions';
import '../../../../styles/components/hub/uploaded-track.scss';

const DragHandle = SortableHandle(() => <span>::</span>);

class UploadedTrack extends Component {
  handleInputChange(e) {
    const { playlistIndex, tracks } = this.props;
    this.props.updateTrackName(tracks, playlistIndex, e.target.value);
  }

  render() {
    const { playlistIndex, tracks } = this.props;
    const playlistPosition = playlistIndex + 1;
    return (
      <li className="uploaded-track">
        <div className="uploaded-track-content">
          <Progress
            strokeWidth="10"
            trailWidth="10"
            strokeColor={'#1596F5'}
            percent={tracks[playlistIndex].progress}
            style={{ height: 25 }}
          />
          {playlistPosition}
          <DragHandle />
          <input
            type="text"
            onChange={this.handleInputChange.bind(this)}
            defaultValue={this.props.value}
          />
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.upload.tracks
  };
};

export default connect(mapStateToProps, actions)(SortableElement(UploadedTrack));


// props.progress
// props.name
// props.playlistPosition
