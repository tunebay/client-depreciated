import React, { Component } from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import Icon from 'react-fontawesome';
import { Line as Progress } from 'rc-progress';
import * as actions from '../../../../actions/hub/upload-actions';
import TrackNameInput from './track-name-input';
import '../../../../styles/components/hub/uploaded-track.scss';

const DragHandle = SortableHandle(() => {
  return <span><Icon name="bars" size="lg" className="drag-handle" /></span>;
});

class UploadedTrack extends Component {
  constructor(props) {
    super(props);
    const { playlistIndex, tracks } = this.props;
    this.state = {
      name: tracks[playlistIndex].name
    };
  }

  handleInputChange(e) {
    const { playlistIndex, tracks } = this.props;
    this.props.updateTrackName(tracks, playlistIndex, e.target.value);
    // this.setState({ name: e.target.value });
  }

  render() {
    const { playlistIndex, tracks } = this.props;
    const playlistPosition = playlistIndex + 1;
    return (
      <li className="uploaded-track" key={this.props.originalIndex}>
        <Progress
          strokeWidth="2"
          trailWidth="2"
          strokeColor={'#1596F5'}
          strokeLinecap="square"
          percent={tracks[playlistIndex].progress}
          style={{ height: 2, width: '100%' }}
        />
        <div className="uploaded-track-content">
          <div className="playlist-position">{playlistPosition}</div>
          <DragHandle />
          <TrackNameInput playlistIndex={playlistIndex} />
          <Icon name="times-circle" size="1x" className="remove-track-icon" />
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
