import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Content from '../content';
import '../../../styles/components/upload/upload-index.scss';

class Upload extends Component {
  handleButtonClick() {
    this.dropzone.open();
  }

  render() {
    return (
      <Content>
        <div className="n-upload-container">
          <Dropzone
            ref={(node) => { this.dropzone = node; }}
            className="n-dropzone"
            disableClick
          >
            <div className="n-inner-drop">
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
              {/* <div className="n-upload-note">
                Note: Drop or select multiple files if you are uploading an EP or album.
              </div> */}
            </div>
          </Dropzone>
        </div>
      </Content>
    );
  }
}

export default Upload;
