import React, { Component } from 'react';
import AudioUploadZone from './audio-upload-zone';
import UploadFormContainer from './upload-form-container';
import AudioUploadForm from './audio-upload-form';
import TracklistContainer from './tracklist-container';
import { connect } from 'react-redux';
import '../../../../styles/components/hub/upload.scss';

class HubUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  handleNextButtonClick() {
    this.setState({
      page: this.state.page + 1
    });
  }

  handlePreviousButtonClick() {
    this.setState({
      page: this.state.page - 1
    });
  }

  renderPreviousButton() {
    if (this.state.page > 1) {
      return <button onClick={this.handlePreviousButtonClick.bind(this)}>Previous</button>;
    }
  }

  render() {
    return (
      <div className="hub-upload">
        <AudioUploadZone />
        <UploadFormContainer>
          <div className="playlist-details">
            <div className="artwork-section">
              <div className="artwork-upload" />
            </div>
            <AudioUploadForm page={this.state.page} />
          </div>
          <TracklistContainer />
          <div className="upload-form-footer">
            <div className="form-footer-content">
              <div>* Indicates required fields</div>
              <div className="next-prev-buttons">
                {this.renderPreviousButton()}
                <button onClick={this.handleNextButtonClick.bind(this)}>Next</button>
              </div>
            </div>
          </div>
        </UploadFormContainer>
        <p className="important-terms">
          <b>Important:</b> By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.form.audioUpload && state.form.audioUpload.values) {
    console.log(state.form.audioUpload.values);
  }
  return {

  };
};

export default connect(mapStateToProps)(HubUpload);
