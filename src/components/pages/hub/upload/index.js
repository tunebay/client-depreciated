import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioUploadZone from './audio-upload-zone';
import AudioUploadForm from './form';
import '../../../../styles/components/hub/upload/upload-form.scss';

class HubUpload extends Component {
  render() {
    console.log(this.props.uploadForm);
    return (
      <div>
        <AudioUploadZone />
        <AudioUploadForm onSubmit={() => console.log('Form submitted')} />
        <p className="important-terms">
          Important: By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
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
