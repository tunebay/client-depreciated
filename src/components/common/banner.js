import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/banner-actions';
import '../../styles/components/common/banner.scss';

class Banner extends Component {
  handleClose() {
    this.props.closeBanner();
  }

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
            <img
              src="../../../assets/images/error-icon.svg" alt="exclamation-mark"
              className="banner-icon"
            />
            <div className="banner-message">{this.props.message}</div>
          </div>
          <button
            onClick={this.handleClose.bind(this)}
            className="close-btn"
          >Close</button>
        </div>
      </Modal>
    );
  }
}

Banner.PropTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['Top', 'Bottom']).isRequired,
  type: PropTypes.oneOf(['Info', 'Error', 'Bug']).isRequired,
  isVisable: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
};

export default connect(null, actions)(Banner);
