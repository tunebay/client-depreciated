import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'sweetalert2/dist/sweetalert2.css';
import alert from 'sweetalert2';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import AudioDropzone from './audio-dropzone';
import BasicInfoPage from './basic-info-page';
import PricePage from './price-page';
import SingleSelectionPage from './single-selection-page';
import ReleasedModal from './released-modal';
import Banner from '../../common/banner';
import Content from '../content';
import * as actions from '../../../actions/upload-actions';
import KonamiCode from '../../../util/konami-code';
import '../../../styles/components/upload/upload-index.scss';

const UPLOAD_PAGE = 'UPLOAD_PAGE';
const BASIC_INFO_PAGE = 'BASIC_INFO_PAGE';
const PRICE_PAGE = 'PRICE_PAGE';
const SINGLE_SELECTION_PAGE = 'SINGLE_SELECTION_PAGE';

class UploadAudioFlow extends Component {
  constructor(props) {
    super(props);
    KonamiCode(() => {
      console.log('do stuff, code entered');
    });
    document.title = 'Tunebay | Upload';
  }

  setPermalink() {
    this.props.setPermalinkString(this.props.audioUploadForm.values.title);
  }

  handleFormSubmit() {
    console.log('in here');
    const { audioUploadForm, playlist, artwork, currentUser } = this.props;
    this.props.releasePlaylist(audioUploadForm.values, playlist, artwork, currentUser);
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
    this.props.setPage(PRICE_PAGE);
  }

  handlePricePagePrevious() {
    this.props.setPage(BASIC_INFO_PAGE);
  }

  handlePriceSubmit() {
    const { audioUploadForm, playlist, formType, artwork, currentUser } = this.props;
    if (formType === 'MULTI') {
      this.props.setPage(SINGLE_SELECTION_PAGE);
    } else {
      this.props.releasePlaylist(audioUploadForm.values, playlist, artwork, currentUser);
    }
  }

  handleSingleSelectionPrevious() {
    this.props.setPage(PRICE_PAGE);
  }

  renderReleasedModal() {
    const { releasedModalVisable, audioUploadForm, dataURL } = this.props;
    if (releasedModalVisable) {
      return (
        <ReleasedModal
          playlistDetails={audioUploadForm}
          isVisable={releasedModalVisable}
          artwork={dataURL}
          requestCloseFn={this.props.terminateUpload}
        />
      );
    }
  }

  render() {
    const { formPage, audioUploadForm, playlist, formType, isReleasing, isUploading, banner } = this.props;
    console.log('FORM', audioUploadForm);
    return (
      <Content>
        <Banner
          isVisable={banner.isVisable}
          message={banner.message}
        />
        <div className="n-upload-container">
          <CSSTransitionGroup
            transitionName="anim"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionLeave
            transitionEnter
          >
            {formPage === UPLOAD_PAGE && <AudioDropzone />}

            {formPage === BASIC_INFO_PAGE &&
              <BasicInfoPage
                formType={formType}
                playlist={playlist}
                onSubmit={this.handleBasicInfoSubmit.bind(this)}
                handlePrevious={this.handleCancel.bind(this)}
                user={this.props.currentUser}
                setPermalink={this.setPermalink.bind(this)}
              />
            }

            {formPage === PRICE_PAGE &&
              <PricePage
                playlist={playlist}
                formType={formType}
                onSubmit={this.handlePriceSubmit.bind(this)}
                handlePrevious={this.handlePricePagePrevious.bind(this)}
                formValues={audioUploadForm.values}
                isReleasing={isReleasing}
                isUploading={isUploading}
              />
            }

            {formPage === SINGLE_SELECTION_PAGE &&
              <SingleSelectionPage
                playlist={playlist}
                onSubmit={this.handleFormSubmit.bind(this)}
                handlePrevious={this.handleSingleSelectionPrevious.bind(this)}
                formValues={audioUploadForm.values}
                isReleasing={isReleasing}
              />
            }
          </CSSTransitionGroup>

          <p className="n-upload-terms"><small><span className="n-important">Important:</span> By uploading, you confirm that your audio complies with our <span className="n-terms-link">Terms of Use</span> and that you are not infringing anyone else’s rights. If in doubt, read our <span className="n-terms-link">Copyright Information Page</span> and <span className="n-terms-link">FAQ’s</span> before uploading.</small></p>
        </div>

        {this.renderReleasedModal()}
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadZoneVisable: state.audioUpload.uploadZoneVisable,
    formType: state.audioUpload.formType,
    formPage: state.audioUpload.formPage,
    releasedModalVisable: state.audioUpload.releasedModalVisable,
    isReleasing: state.audioUpload.isReleasing,
    isUploading: state.audioUpload.isUploading,
    audioUploadForm: state.form.audioUploadForm,
    playlist: state.uploadedPlaylist,
    artwork: state.uploadedArtwork.image,
    dataURL: state.uploadedArtwork.dataURL,
    currentUser: state.currentUser,
    banner: state.banner
  };
};

export default connect(mapStateToProps, actions)(UploadAudioFlow);
