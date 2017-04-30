import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../../styles/components/upload/released-modal.scss';
import PricePill from '../../common/price-pill';
import renderGenres from '../../../util/render-genres';

class ReleasedModal extends Component {
  componentWillMount() {
    console.log('mounting....');
  }

  handlePermaLinkFocus() {
    console.log('focused', this.permalinkField);
    this.permalinkField.select();
  }

  renderArtwork() {
    if (this.props.artwork) {
      return <img src={this.props.artwork} alt="artwork" className="artwork" />;
    }
    return <div className="artwork" />;
  }

  render() {
    const { requestCloseFn, playlistDetails, isVisable } = this.props;
    // console.log('Playlist sent to modal', playlistDetails);
    return (
      <Modal
        isOpen={isVisable}
        className="released-modal"
        overlayClassName="released-overlay"
        contentLabel="releasedModal"
        shouldCloseOnOverlayClick={false}
        onRequestClose={requestCloseFn}
        parentSelector={() => document.body}
      >
        <div className="modal-container">
          {this.renderArtwork()}
          <div className="details">
            <div className="basic-info-section">
              <div className="title-price">
                <div className="playlist-title">{playlistDetails.values.title}</div>
                <PricePill price={playlistDetails.values.price} />
              </div>
              <div className="genres">{renderGenres(playlistDetails.values.genres)}</div>
            </div>
            <div className="permalink-section">
              <p className="release-message"><span className="congrats">Congratulations on your new release!</span> Now it’s time to tell the whole world and your mother. </p>
              <textarea
                ref={(n) => { this.permalinkField = n; }}
                value={playlistDetails.values.permalink}
                className="permalink-field"
                readOnly
                onFocus={this.handlePermaLinkFocus.bind(this)}
              />
            </div>
            <div className="btn-section">
              <button
                onClick={requestCloseFn}
                className="done-btn"
              >Done</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ReleasedModal;
