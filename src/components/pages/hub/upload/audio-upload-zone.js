import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';
import '../../../../styles/components/hub/upload.scss';

class AudioUploadZone extends Component {
  onDrop(files, rejectedFiles) {
    console.log('Rejected:', rejectedFiles);
    console.log('Accepted:', files);
    const track = files[0];
    this.props.addTrack(track);
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
    );
  }
}

export default connect(null, actions)(AudioUploadZone);
