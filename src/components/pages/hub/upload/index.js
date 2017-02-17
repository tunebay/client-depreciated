import React, { Component } from 'react';
import AudioUploadZone from './audio-upload-zone';
import AudioUploadForm from './audio-upload-form';
import '../../../../styles/components/hub/upload.scss';

class HubUpload extends Component {
  render() {
    return (
      <div className="hub-upload">
        {/* <AudioUploadZone /> */}
        <AudioUploadForm />
        <p className="important-terms">
        Important: By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
      </div>
    );
  }
}

export default HubUpload;
