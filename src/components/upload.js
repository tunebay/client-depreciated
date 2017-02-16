import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions/hub/upload-actions';
import AudioUploadForm from './pages/hub/audio-upload-form';

import '../styles/components/hub/upload.scss';


class Upload extends Component {
  onDrop(files, rejectedFiles) {
    this.props.uploadAudioToS3(files, this.props.userId);
    console.log('Rejected:', rejectedFiles);
  }

  onOpenClick() {
    this.dropzone.open();
  }

  renderAudioForm() {
    if (this.props.uploadStarted) {
      return <AudioUploadForm uploadProgress={this.props.progress} />;
    }
  }

  render() {
    return (
      <div className="upload-wrapper">
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
        {this.renderAudioForm()}
        <p className="important-terms">
          Important: By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
      </div>
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

export default connect(mapStateToProps, actions)(Upload);
