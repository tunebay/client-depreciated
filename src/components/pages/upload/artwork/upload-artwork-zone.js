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
    if (this.props.artwork) {
      const canvas = this.props.artwork;
      const imgBlob = canvas.toDataURL('image/png');
      console.log('IMGGGG', imgBlob);
      return <img className="artwork" src={imgBlob} alt="artwork" />;
    }
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
    artworkModalVisable: state.uploadedArtwork.artworkModalVisable,
    artwork: state.uploadedArtwork.artwork
  };
};

export default connect(mapStateToProps, actions)(UploadArtworkZone);
