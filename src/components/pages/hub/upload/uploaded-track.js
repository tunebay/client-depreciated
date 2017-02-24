import React, { Component } from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/upload-actions';
import '../../../../styles/components/hub/uploaded-track.scss';

const DragHandle = SortableHandle(() => <span>::</span>);

class UploadedTrack extends Component {
  render() {
    return (
      <li className="uploaded-track">
        <div className="uploaded-track-content">
          {this.props.playlistPosition}
          <DragHandle />
          <input
            type="text"
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
