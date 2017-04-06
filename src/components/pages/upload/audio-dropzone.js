import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import className from 'classnames';

class AudioDropzone extends Component {
  handleDrop(files) {
    console.log(files);
  }

  handleButtonClick() {
    this.ndropzone.open();
  }

  render() {
    return (
      <Dropzone
        ref={(node) => { this.ndropzone = node; }}
        onDrop={this.handleDrop.bind(this)}
        className="n-dropzone"
        disableClick
        accept={'audio/*'}
        maxSize={1000000000} // 1gb
      >
        {({ isDragActive, isDragReject }) => {
          const innerDropClass = className({
            'n-inner-drop': true,
            'n-inner-drop-active': isDragActive,
            'n-inner-drop-reject': isDragReject
          });

          return (
            <div className={innerDropClass}>
              <div className="n-inner-drop-main">
                <h1 className="n-title">
                  Drag and drop audio files here
                </h1>
                <div className="n-or-section">
                  <div className="n-hr" />
                  <div className="n-or">or</div>
                  <div className="n-hr" />
                </div>
                <button
                  className="n-choose-files-btn"
                  onClick={this.handleButtonClick.bind(this)}
                >
                  Choose files
                </button>
              </div>
              <div className="n-upload-note">
                <span className="n-note">Tip:</span> you can select multiple files if you are uploading an EP or album.
              </div>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export default AudioDropzone;
