import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Content from '../content';
import '../../../styles/components/upload/upload-index.scss';

class Upload extends Component {
  handleDrop(files) {
    console.log(files);
  }

  handleButtonClick() {
    this.dropzone.open();
  }

  render() {
    return (
      <Content>
        <div className="n-upload-container">
          <Dropzone
            ref={(node) => { this.dropzone = node; }}
            onDrop={this.handleDrop.bind(this)}
            className="n-dropzone"
            disableClick
          >
            <div className="n-inner-drop">
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
                <span className="n-note">Note:</span> Select multiple files if you are uploading an EP or album.
              </div>
            </div>
          </Dropzone>
          <p className="n-upload-terms"><small><span className="n-important">Important:</span> By uploading, you confirm that your audio complies with our <span className="n-terms-link">Terms of Use</span> and that you are not infringing anyone else’s rights. If in doubt, read our <span className="n-terms-link">Copyright Information Page</span> and <span className="n-terms-link">FAQ’s</span> before uploading.</small></p>
        </div>
      </Content>
    );
  }
}

export default Upload;
