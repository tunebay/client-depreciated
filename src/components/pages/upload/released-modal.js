import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../../styles/components/upload/released-modal.scss';
import PricePill from '../../common/price-pill';
import renderGenres from '../../../util/render-genres';

const playlist = {
  title: 'Alchemy',
  price: '7.99',
  genres: [{ label: 'Soul', value: 32 }],
  permalink: 'https://tunebay.com/malimichael/alchemy'
};

class ReleasedModal extends Component {
  handlePermaLinkFocus() {
    console.log('focused', this.permalinkField);
    this.permalinkField.select();
  }

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
            <div className="basic-info-section">
              <div className="title-price">
                <div className="playlist-title">{playlist.title}</div>
                <PricePill price={playlist.price} />
              </div>
              <div className="genres">{renderGenres(playlist.genres)}</div>
            </div>
            <div className="permalink-section">
              <p className="release-message"><span className="congrats">Congratulations on your new release!</span> Now it’s time to tell the whole world and your mother. </p>
              <textarea
                ref={(n) => { this.permalinkField = n; }}
                value={playlist.permalink}
                className="permalink-field"
                readOnly
                onFocus={this.handlePermaLinkFocus.bind(this)}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ReleasedModal;
