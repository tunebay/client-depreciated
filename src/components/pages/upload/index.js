import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioDropzone from './audio-dropzone';
import BasicInfoPage from './basic-info-page';
import Content from '../content';
import '../../../styles/components/upload/upload-index.scss';

const UPLOAD_PAGE = 'UPLOAD_PAGE';
const BASIC_INFO_PAGE = 'BASIC_INFO_PAGE';
const PRICE_PAGE = 'PRICE_PAGE';
const SINGLE_SELECTION_PAGE = 'SINGLE_SELECTION_PAGE';

class UploadAudioFlow extends Component {
  componentWillMount() {
    document.title = 'Tunebay | Upload';
  }

  render() {
    const { formPage } = this.props;
    return (
      <Content>
        <div className="n-upload-container">

          {formPage === UPLOAD_PAGE && <AudioDropzone />}
          {formPage === BASIC_INFO_PAGE && <BasicInfoPage formType={this.props.formType} />}

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
    formPage: state.audioUpload.formPage
  };
};

export default connect(mapStateToProps)(UploadAudioFlow);
