import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/uploaded-artwork-actions';
import ArtworkModal from './artwork-modal';
import '../../../../styles/components/upload/upload-artwork-zone.scss';

class UploadArtworkZone extends Component {
  handleDrop(file, rejected) {
    console.log('rejected artwork', rejected);
    console.log('accepted', file);
    this.props.showArtworkModal(file[0]);
  }

  renderArtwork() {
    if (!this.props.dataURL) {
      return (
        <div className="upload-artwork">
          <img
            src="../../../../../assets/images/camera-icon.svg"
            alt="camera"
            className="camera-icon"
          />
          <div className="add-artwork">Add artwork</div>
        </div>
      );
    }
    return (
      <div className="artwork-blob-con">
        <img className="artwork-blob" src={this.props.dataURL} alt="artwork" />
        <div className="artwork-overlay">
          <div className="change-artwork">Change artwork</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Dropzone
        className="upload-artwork-zone"
        preventDropOnDocument
        multiple={false}
        accept={'image/*'}
        maxSize={2097152} // 2mb
        onDrop={this.handleDrop.bind(this)}
      >
        {this.renderArtwork()}
        <ArtworkModal
          isVisable={this.props.artworkModalVisable}
          requestCloseFn={this.props.hideArtworkModal}
          preview={this.props.preview}
          scale={this.props.scale}
        />
      </Dropzone>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    preview: state.uploadedArtwork.preview,
    artworkModalVisable: state.uploadedArtwork.artworkModalVisable,
    dataURL: state.uploadedArtwork.dataURL,
    scale: state.uploadedArtwork.scale
  };
};

export default connect(mapStateToProps, actions)(UploadArtworkZone);
