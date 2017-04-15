import React, { Component } from 'react';
import Modal from 'react-modal';
import AvatarEditor from 'react-avatar-editor';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/uploaded-artwork-actions';
import '../../../../styles/components/upload/upload-artwork-modal.scss';

class ArtworkModal extends Component {
  getImage() {
    const artwork = this.editor.getImage();
    this.props.saveArtwork(artwork);
  }

  render() {
    const { isVisable, requestCloseFn, preview } = this.props;
    return (
      <Modal
        isOpen={isVisable}
        className="artwork-modal"
        overlayClassName="overlay"
        contentLabel="artworkModal"
        shouldCloseOnOverlayClick={false}
        onRequestClose={requestCloseFn}
      >
        <AvatarEditor
          ref={(node) => { this.editor = node; }}
          image={preview}
          width={480}
          style={{ width: 480, height: 480 }}
          height={480}
          border={0}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={1}
          rotate={0}
        />
        <button onClick={this.getImage.bind(this)}>
          Get image
        </button>
      </Modal>
    );
  }
}

export default connect(null, actions)(ArtworkModal);
