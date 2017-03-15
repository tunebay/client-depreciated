import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioUploadZone from './audio-upload-zone';
import AudioUploadForm from './form';

class HubUpload extends Component {
  render() {
    console.log(this.props.uploadForm);
    return (
      <div>
        <AudioUploadZone />
        <AudioUploadForm onSubmit={() => console.log('Form submitted')} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log();
  return {
    uploadForm: state.form.audioUpload
  };
};

export default connect(mapStateToProps)(HubUpload);
