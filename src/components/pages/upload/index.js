import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'sweetalert2/dist/sweetalert2.css';
import alert from 'sweetalert2';
import AudioDropzone from './audio-dropzone';
import BasicInfoPage from './basic-info-page';
import PricePage from './price-page';
import SingleSelectionPage from './single-selection-page';
import Content from '../content';
import * as actions from '../../../actions/upload-actions';
import '../../../styles/components/upload/upload-index.scss';

const UPLOAD_PAGE = 'UPLOAD_PAGE';
const BASIC_INFO_PAGE = 'BASIC_INFO_PAGE';
const PRICE_PAGE = 'PRICE_PAGE';
const SINGLE_SELECTION_PAGE = 'SINGLE_SELECTION_PAGE';

class UploadAudioFlow extends Component {
  componentWillMount() {
    document.title = 'Tunebay | Upload';
  }

  handleFormSubmit() {
    console.log('in here');
    const { audioUploadForm, playlist, artwork } = this.props;
    this.props.releasePlaylist(audioUploadForm.values, playlist, artwork);
  }

  handleCancel() {
    alert({
      title: 'Are you sure?',
      text: 'Your upload will be stopped and all changes discarded.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    })
    .then(() => {
      this.props.terminateUpload();
    })
    .catch(() => {
      // do nothing //
    });
  }

  handleBasicInfoSubmit() {
    // window.scrollTo(0, 0);
    this.props.setPage(PRICE_PAGE);
  }

  handlePricePagePrevious() {
    // window.scrollTo(0, 0);
    this.props.setPage(BASIC_INFO_PAGE);
  }

  handlePriceSubmit() {
    this.props.setPage(SINGLE_SELECTION_PAGE);
  }

  handleSingleSelectionPrevious() {
    this.props.setPage(PRICE_PAGE);
  }

  render() {
    const { formPage, audioUploadForm, playlist, formType } = this.props;
    return (
      <Content>
        <div className="n-upload-container">

          {formPage === UPLOAD_PAGE && <AudioDropzone />}

          {formPage === BASIC_INFO_PAGE &&
            <BasicInfoPage
              formType={formType}
              playlist={playlist}
              onSubmit={this.handleBasicInfoSubmit.bind(this)}
              handleCancel={this.handleCancel.bind(this)}
            />
          }

          {formPage === PRICE_PAGE &&
            <PricePage
              playlist={playlist}
              formType={formType}
              onSubmit={this.handlePriceSubmit.bind(this)}
              handlePrevious={this.handlePricePagePrevious.bind(this)}
              formValues={audioUploadForm.values}
            />
          }

          {formPage === SINGLE_SELECTION_PAGE &&
            <SingleSelectionPage
              playlist={playlist}
              onSubmit={this.handleFormSubmit.bind(this)}
              handlePrevious={this.handleSingleSelectionPrevious.bind(this)}
              formValues={audioUploadForm.values}
            />
          }

          <p className="n-upload-terms"><small><span className="n-important">Important:</span> By uploading, you confirm that your audio complies with our <span className="n-terms-link">Terms of Use</span> and that you are not infringing anyone else’s rights. If in doubt, read our <span className="n-terms-link">Copyright Information Page</span> and <span className="n-terms-link">FAQ’s</span> before uploading.</small></p>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadZoneVisable: state.audioUpload.uploadZoneVisable,
    formType: state.audioUpload.formType,
    formPage: state.audioUpload.formPage,
    audioUploadForm: state.form.audioUploadForm,
    playlist: state.uploadedPlaylist,
    artwork: state.uploadedArtwork.image
  };
};

export default connect(mapStateToProps, actions)(UploadAudioFlow);
