import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
// import ReactS3Uploader from 'react-s3-uploader';

class Upload extends Component {
  onDrop(files) {
    const file = files[0];
    console.log(files);
    console.log('going for signature...');
    axios.get('http://localhost:3000/upload/s3/sign', {
      params: {
        filename: file.name,
        filetype: file.type
      }
    })
    .then((res) => {
      const signedURL = res.data.signedURL;

      console.log('Got signature', signedURL);

      const config = {
        headers: { 'Content-Type': file.type },
        onUploadProgress: (progress) => {
          const percentCompleted = Math.round((progress.loaded * 100) / progress.total);
          console.log(percentCompleted);
        }
      };

      return axios.put(signedURL, file, config);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log('error in catch:', err);
    });
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    );
  }
}

export default Upload;
