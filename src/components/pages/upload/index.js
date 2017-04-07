import React, { Component } from 'react';
import { connect } from 'react-redux';
import AudioDropzone from './audio-dropzone';
import Content from '../content';
import '../../../styles/components/upload/upload-index.scss';

class Upload extends Component {
  componentWillMount() {
    document.title = 'Tunebay | Upload';
  }

  render() {
    return (
      <Content>
        <div className="n-upload-container">
          <AudioDropzone isVisable={this.props.uploadZoneVisable} />

          <p className="n-upload-terms"><small><span className="n-important">Important:</span> By uploading, you confirm that your audio complies with our <span className="n-terms-link">Terms of Use</span> and that you are not infringing anyone else’s rights. If in doubt, read our <span className="n-terms-link">Copyright Information Page</span> and <span className="n-terms-link">FAQ’s</span> before uploading.</small></p>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadZoneVisable: state.audioUpload.uploadZoneVisable
  };
};

export default connect(mapStateToProps)(Upload);
