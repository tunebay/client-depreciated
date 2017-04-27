import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../../styles/components/upload/released-modal.scss';

const playlist = {
  title: 'Alchemy',
  price: '7.99',
  genres: [{ label: 'Soul', value: 32 }]
};

class ReleasedModal extends Component {
  render() {
    const { requestCloseFn, playlistDetails, isVisable } = this.props;
    // console.log('Playlist sent to modal', playlistDetails);
    return (
      <Modal
        isOpen={true}
        className="released-modal"
        overlayClassName="released-overlay"
        contentLabel="releasedModal"
        shouldCloseOnOverlayClick={false}
        onRequestClose={requestCloseFn}
        parentSelector={() => document.body}
      >
        <div className="modal-container">
          <div className="artwork" />
          <div className="details">
            {playlist.title}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ReleasedModal;
