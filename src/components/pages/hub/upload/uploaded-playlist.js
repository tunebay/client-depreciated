import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortableContainer } from 'react-sortable-hoc';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UploadedTrack from './uploaded-track';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';
import '../../../../styles/components/hub/upload/uploaded-track.scss';

const SortablePlaylist = SortableContainer(({ playlist }) => {
  return (
    <ReactCSSTransitionGroup>
      <ul className="uploaded-track-con">
        {playlist.map((track, index) =>
          <UploadedTrack track={track} key={track.trackId} index={index} />
        )}
      </ul>
    </ReactCSSTransitionGroup>
  );
});

class UploadedPlaylist extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    const { playlist } = this.props;
    this.props.updateTrackPosition(playlist, oldIndex, newIndex);
  }

  handleAddAnotherClick() {
    
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
        <button
          type="button"
          className="add-another-track"
          onClick={this.handleAddAnotherClick.bind(this)}
        >Add another track</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps, actions)(UploadedPlaylist);
