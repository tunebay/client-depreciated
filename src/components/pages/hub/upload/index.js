import React, { Component } from 'react';
import AudioUploadZone from './audio-upload-zone';
import UploadFormContainer from './upload-form-container';
import AudioUploadForm from './audio-upload-form';
import TracklistContainer from './tracklist-container';
import '../../../../styles/components/hub/upload.scss';

class HubUpload extends Component {
  render() {
    return (
      <div className="hub-upload">
        <AudioUploadZone />
        <UploadFormContainer>
          <div className="playlist-details">
            <div className="artwork-section">
              <div className="artwork-upload" />
            </div>
            <AudioUploadForm />
          </div>
          <TracklistContainer />
          <div className="upload-form-footer">
            <div className="form-footer-content">
              <div>* Indicates required fields</div>
              <button>Next</button>
            </div>
          </div>
        </UploadFormContainer>
        <p className="important-terms">
        Important: By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
      </div>
    );
  }
}

export default HubUpload;
