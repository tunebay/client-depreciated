import React from 'react';
import Modal from 'react-modal';
// import AvatarEditor from 'react-avatar-editor';
import '../../../../styles/components/upload/upload-artwork-modal.scss';

const ArtworkModal = ({ isVisable, requestCloseFn, preview }) => {
  return (
    <Modal
      isOpen={isVisable}
      className="artwork-modal"
      overlayClassName="overlay"
      contentLabel="loginModal"
      shouldCloseOnOverlayClick
      onRequestClose={requestCloseFn}
    >
      <div className="canvas-mask">
        <img className="artwork-preview" src={preview} alt="artwork-preview" />
      </div>
    </Modal>
  );
};

export default ArtworkModal;
