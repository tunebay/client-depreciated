import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import '../../styles/components/common/banner.scss';

class Banner extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isVisable}
        className="banner-modal"
        overlayClassName="banner-overlay"
        shouldCloseOnOverlayClick={false}
        onRequestClose={this.props.onRequestClose}
        parentSelector={() => document.body}
        contentLabel="bannerModal"
      >
        <div className="banner">
          <div className="banner-left">
            {/* <div className="banner-icon">{this.renderIcon()}</div> */}
            <div className="banner-message">{this.props.message}</div>
          </div>
          <button onClick={this.props.onRequestClose}>Close</button>
        </div>
      </Modal>
    );
  }
}

Banner.PropTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['Top', 'Bottom']).isRequired,
  type: PropTypes.oneOf(['Info', 'Error', 'Warning']).isRequired,
  isVisable: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default Banner;
