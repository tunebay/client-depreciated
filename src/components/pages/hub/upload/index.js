import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import AudioUploadZone from './audio-upload-zone';
import UploadFormContainer from './upload-form-container';
import AudioUploadForm from './audio-upload-form';
import UploadArtwork from './upload-artwork';
import TracklistContainer from './tracklist-container';
import '../../../../styles/components/hub/upload.scss';

class HubUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  handleSubmitButtonClick() {
    console.log(this.props.formValues);
    // this.postPlaylistInformation()
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

  renderSubmitButon() {
    if (this.state.page === 3) {
      return <button onClick={this.handleSubmitButtonClick.bind(this)}>Submit</button>;
    }
    return <button onClick={this.handleNextButtonClick.bind(this)}>Next</button>;
  }

  render() {
    const uploadedStarted = this.props.upload.uploadStarted;
    console.log(uploadedStarted);
    const formClass = classNames({
      hide: !uploadedStarted
    });
    const uploadClass = classNames({
      hide: uploadedStarted
    });
    return (
      <div className="hub-upload">
        <div className={uploadClass}>
          <AudioUploadZone />
        </div>
        <div className={formClass}>
          <UploadFormContainer>
            <div className="playlist-details">
              <UploadArtwork />
              <AudioUploadForm page={this.state.page} />
            </div>
            <TracklistContainer />
            <div className="upload-form-footer">
              <div className="form-footer-content">
                <div>* Indicates required fields</div>
                <div className="next-prev-buttons">
                  {this.renderPreviousButton()}
                  {this.renderSubmitButon()}
                </div>
              </div>
            </div>
          </UploadFormContainer>
        </div>
        <p className="important-terms">
          <b>Important:</b> By uploading, you confirm that your audio complies with our Terms of use and you don’t infringe anyone else’s rights. If in doubt, check our Copyright information pages and FAQs before uploading.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.form.audioUpload && state.form.audioUpload.values) {
    return {
      formValues: state.form.audioUpload.values,
      upload: state.upload
    };
  }
  return {
    upload: state.upload
  };
};

export default connect(mapStateToProps)(HubUpload);
