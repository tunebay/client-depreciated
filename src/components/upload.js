import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../actions/hub/upload-actions';

class Upload extends Component {
  onDrop(files, rejectedFiles) {
    this.props.uploadAudioToS3(files, this.props.userId);
    console.log('Rejected:', rejectedFiles);
  }

  onOpenClick() {
    this.dropzone.open();
  }

  renderAudio() {
    if (this.props.uploadComplete) {
      return <div>Upload complete!</div>;
    }
    return <div>{this.props.progress}</div>;
  }

  render() {
    return (
      <div>
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          onDrop={this.onDrop.bind(this)}
          disableClick
          accept={'audio/*'}
          maxSize={1000000000} // 1gb
        >
          <div>Drag and drop audio files here <br />or <button onClick={this.onOpenClick.bind(this)}>Choose files</button></div>
        </Dropzone>
        {this.renderAudio()}
      </div>
    );
  }
}

const mapStateToProps = ({ upload, currentUser }) => {
  if (!currentUser) { return {}; }
  return {
    progress: upload.percentCompleted,
    uploadComplete: upload.uploadComplete,
    userId: currentUser.id
  };
};

export default connect(mapStateToProps, actions)(Upload);
