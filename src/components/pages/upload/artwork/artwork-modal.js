import React, { Component } from 'react';
import Modal from 'react-modal';
import AvatarEditor from 'react-avatar-editor';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/uploaded-artwork-actions';
import '../../../../styles/components/upload/upload-artwork-modal.scss';

class ArtworkModal extends Component {
  updateImageScale(e) {
    this.props.setScale(parseFloat(e.target.value));
  }

  handleCropAndSave() {
    const artwork = this.editor.getImage();
    this.props.saveArtwork(artwork);
  }

  render() {
    const { isVisable, requestCloseFn, preview, scale } = this.props;
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
          style={{ width: 480, height: 480, marginBottom: 20 }}
          height={480}
          border={0}
          scale={scale}
          rotate={0}
        />
        <input
          type="range"
          className="artwork-scale"
          max={2}
          min={1}
          step={0.01}
          value={scale}
          onChange={this.updateImageScale.bind(this)}
        />
        <div className="artwork-modal-bottom">
          <div className="image-quality" />
          <div className="artwork-modal-btns">
            <button className="cancel-btn" onClick={requestCloseFn}>Cancel</button>
            <button className="save-btn" onClick={this.handleCropAndSave.bind(this)}>Save</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(null, actions)(ArtworkModal);
