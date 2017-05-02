import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import className from 'classnames';
import * as actions from '../../../actions/upload-actions';
import { showErrorBanner } from '../../../actions/banner-actions';
import '../../../styles/components/upload/dropzone.scss';

class AudioDropzone extends Component {
  handleDrop(files, rejected) {
    if (rejected.length > 0) {
      this.props.showErrorBanner(
        'Well this is awkward… One or more of your files is not in a supported format or is over 2GB.'
      );
    } else {
      this.props.processAudio(files);
    }
    console.log('rejected', rejected);
    console.log('Accepted', files);
  }

  handleButtonClick() {
    this.ndropzone.open();
  }

  render() {
    const { isVisable } = this.props;
    const dropzoneClass = className({
      'n-dropzone': true,
      'n-dropzone-fade': !isVisable
    });

    return (
      <Dropzone
        ref={(node) => { this.ndropzone = node; }}
        onDrop={this.handleDrop.bind(this)}
        className={dropzoneClass}
        disableClick
        accept={'audio/*'}
        maxSize={1000000000} // 1gb
      >
        {({ isDragActive, isDragReject, rejectedFiles }) => {
          console.log(rejectedFiles);
          const innerDropClass = className({
            'n-inner-drop': true,
            'n-inner-drop-active': isDragActive,
            'n-inner-drop-reject': isDragReject
          });

          return (
            <div className={innerDropClass}>
              <div className="n-inner-drop-main">
                <h1 className="n-title">
                  Drag and drop audio files here
                </h1>
                <div className="n-or-section">
                  <div className="n-hr" />
                  <div className="n-or">or</div>
                  <div className="n-hr" />
                </div>
                <button
                  className="n-choose-files-btn"
                  onClick={this.handleButtonClick.bind(this)}
                >
                  Choose files
                </button>
              </div>
              <div className="n-upload-note">
                <span className="n-note">Tip:</span> you can select multiple files to start uploading an EP or album.
              </div>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}

export default connect(null, { ...actions, showErrorBanner })(AudioDropzone);
