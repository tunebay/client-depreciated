import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class UploadArtworkZone extends Component {
  render() {
    return (
      <Dropzone
        className="upload-artwork-zone"
      >
        <img
          src="../../../../../assets/images/camera-icon.svg" alt="camera"
          className="camera-icon"
        />
        <div className="add-artwork">Add artwork</div>
      </Dropzone>
    );
  }
}

export default UploadArtworkZone;
