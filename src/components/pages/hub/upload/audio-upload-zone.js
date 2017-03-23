import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import className from 'classnames';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';
import '../../../../styles/components/hub/upload/upload.scss';

class AudioUploadZone extends Component {
  onDrop(files, rejectedFiles) {
    const { addTracksToPlaylist, currentUser } = this.props;
    console.log('Rejected:', rejectedFiles);
    addTracksToPlaylist(files, currentUser.id);
  }

  onOpenClick() {
    this.dropzone.open();
  }

  render() {
    const dropClass = className({
      'audio-upload-zone': true,
      'slide-up': this.props.uploadStarted
    });

    return (
      <div className={dropClass}>
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          onDrop={this.onDrop.bind(this)}
          disableClick
          accept={'audio/*'}
          maxSize={1000000000} // 1gb
          className="dropzone"
        >
          <div className="inner-drop">
            <img className="upload-icon" src="../../assets/images/upload-icon.png" alt="upload-icon" />
            <h1>Drag and drop audio files here</h1><br /><span>or</span><br />
            <button className="choose-file-btn"onClick={this.onOpenClick.bind(this)}>Choose files</button>
          </div>
        </Dropzone>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps, actions)(AudioUploadZone);
