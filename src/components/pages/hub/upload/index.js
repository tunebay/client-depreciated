import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioUploadZone from './audio-upload-zone';
import AudioUploadForm from './form';
import * as actions from '../../../../actions/hub/uploaded-playlist-actions';
import '../../../../styles/components/hub/upload/upload-form.scss';

class HubUpload extends Component {
  handleFormSubmit() {
    const { uploadForm, uploadedPlaylist } = this.props;
    this.props.releasePlaylist(uploadForm.values, uploadedPlaylist);
  }

  render() {
    return (
      <div>
        <AudioUploadZone />
        <AudioUploadForm onSubmit={this.handleFormSubmit.bind(this)} />
        <p className="important-terms">
          Important: By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadForm: state.form.audioUpload,
    uploadedPlaylist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps, actions)(HubUpload);
