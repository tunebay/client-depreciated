import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/upload-actions';
import '../../../../styles/components/hub/upload.scss';

class AudioUploadZone extends Component {
  onDrop(files, rejectedFiles) {
    console.log('Rejected:', rejectedFiles);
    this.props.uploadAudioToS3(files);
  }

  onOpenClick() {
    this.dropzone.open();
  }

  render() {
    return (
      <div className="audio-upload-zone">
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
        // {this.renderAudioForm()}
    );
  }
}

const mapStateToProps = ({ upload, currentUser }) => {
  if (!currentUser) { return {}; }
  return {
    progress: upload.percentCompleted,
    uploadComplete: upload.uploadComplete,
    uploadStarted: upload.uploadStarted,
    userId: currentUser.id
  };
};

export default connect(mapStateToProps, actions)(AudioUploadZone);
