import React, { Component } from 'react';
import Modal from 'react-modal';
import AvatarEditor from 'react-avatar-editor';
import '../../../../styles/components/upload/upload-artwork-modal.scss';

class ArtworkModal extends Component {
  getImage() {
    const artwork = this.editor.getImage();
    console.log(artwork);
  }

  render() {
    const { isVisable, requestCloseFn, preview } = this.props;
    return (
      <Modal
        isOpen={isVisable}
        className="artwork-modal"
        overlayClassName="overlay"
        contentLabel="artworkModal"
        shouldCloseOnOverlayClick
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
          scale={1.2}
          rotate={0}
        />
        <button onClick={this.getImage.bind(this)}>
          Get image
        </button>
      </Modal>
    );
  }
}

export default ArtworkModal;
