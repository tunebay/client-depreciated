import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/uploaded-artwork-actions';
import ArtworkModal from './artwork-modal';

class UploadArtworkZone extends Component {
  handleDrop(file) {
    this.props.showArtworkModal(file[0]);
  }

  render() {
    return (
      <Dropzone
        className="upload-artwork-zone"
        onDrop={this.handleDrop.bind(this)}
      >
        <img
          src="../../../../../assets/images/camera-icon.svg" alt="camera"
          className="camera-icon"
        />
        <div className="add-artwork">Add artwork</div>
        <ArtworkModal
          isVisable={this.props.artworkModalVisable}
          requestCloseFn={this.props.hideArtworkModal}
          preview={this.props.preview}
        />
      </Dropzone>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    preview: state.uploadedArtwork.preview,
    artworkModalVisable: state.uploadedArtwork.artworkModalVisable
  };
};

export default connect(mapStateToProps, actions)(UploadArtworkZone);
