import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import Dropzone from 'react-dropzone';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UploadedTrack from './uploaded-track';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';
import '../../../../styles/components/hub/upload/uploaded-track.scss';

const SortablePlaylist = SortableContainer(({ playlist }) => {
  console.log(playlist);
  return (
    <ul className="uploaded-track-con">
      <ReactCSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={3000}
        transitionLeaveTimeout={3000}
      >
        {playlist.map((track, index) =>
          <UploadedTrack track={track} key={track.trackId} index={index} />
        )}
      </ReactCSSTransitionGroup>
    </ul>
  );
});

class UploadedPlaylist extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    const { playlist } = this.props;
    this.props.updateTrackPosition(playlist, oldIndex, newIndex);
  }

  onDrop(files, rejectedFiles) {
    const { playlist, currentUser } = this.props;
    console.log('Rejected', rejectedFiles);
    this.props.addAnotherTrack(files[0], currentUser.id, playlist);
  }

  render() {
    const { playlist } = this.props;
    return (
      <div>
        <SortablePlaylist
          playlist={playlist}
          onSortEnd={this.onSortEnd.bind(this)}
          useDragHandle
          axis="y"
          lockAxis="y"
          lockToContainerEdge
        />
        <Dropzone
          onDrop={this.onDrop.bind(this)}
          className="add-another-track"
          accept={'audio/*'}
          multiple={false}
          maxSize={1000000000}
        >
          <div className="add-another-track-text">Add another track</div>
        </Dropzone>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(UploadedPlaylist);
