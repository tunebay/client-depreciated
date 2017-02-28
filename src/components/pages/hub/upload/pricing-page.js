import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PriceField from './price-field';
import CanPayMoreField from './can-pay-more-field';
import PurchaseMessageField from './purchase-message-field';
import '../../../../styles/components/hub/upload.scss';

class PricingPage extends Component {
  renderGenres() {
    const { genre, genre2, genre3 } = this.props.formValues;
    let genreString = genre.label;
    if (genre2 && !genre3) {
      genreString = `${genre.label} / ${genre2.label}`;
    }
    if (genre3 && !genre2) {
      genreString = `${genre.label} / ${genre3.label}`;
    }
    if (genre3 && genre2) {
      genreString = `${genre.label} / ${genre2.label} / ${genre3.label}`;
    }
    return (
      <div className="uploaded-genres">
        {genreString}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const { playlistType, title } = this.props.formValues;
    return (
      <form className="audio-upload-form" onSubmit={handleSubmit}>
        <h1 className="upload-playlist-title">{title}</h1>
        {this.renderGenres()}
        <Field name="price" type="number" component={PriceField} label="Price" />
        <p className="pricing-note"><span>Note: </span>{`Leave the price at zero if you intend for this ${playlistType.value} to be a free download. People can still decide to donate towards free downloads if you let them.`}</p>
        <Field name="canPayMore" type="checkbox" component={CanPayMoreField} />
        <Field name="purchaseMessage" type="text" component={PurchaseMessageField} label="Purchase message" playlistType={playlistType.value} />
      </form>
    );
  }
}

const ComposedForm = reduxForm({
  form: 'audioUpload',
  fields: [
    'price',
    'canPayMore',
    'purchaseMessage'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PricingPage);

const mapStateToProps = (state) => {
  return {
    formValues: state.form.audioUpload.values
  };
};

export default connect(mapStateToProps)(ComposedForm);
