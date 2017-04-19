import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioDropzone from './audio-dropzone';
import BasicInfoPage from './basic-info-page';
import PricePage from './price-page';
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

  handleCancel() {
    console.log('confirm cancel then reset form');
  }

  handleBasicInfoSubmit() {
    this.props.setPage(PRICE_PAGE);
  }

  render() {
    const { formPage, audioUploadForm } = this.props;
    console.log(audioUploadForm);
    return (
      <Content>
        <div className="n-upload-container">

          {formPage === UPLOAD_PAGE && <AudioDropzone />}

          {formPage === BASIC_INFO_PAGE &&
            <BasicInfoPage
              onSubmit={this.handleBasicInfoSubmit.bind(this)}
              handleCancel={this.handleCancel.bind(this)}
            />
          }

          {formPage === PRICE_PAGE &&
            <PricePage
              onSubmit={this.handleBasicInfoSubmit.bind(this)}
              handleCancel={this.handleCancel.bind(this)}
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
    audioUploadForm: state.form.audioUploadForm
  };
};

export default connect(mapStateToProps, actions)(UploadAudioFlow);
