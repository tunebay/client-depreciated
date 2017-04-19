import React from 'react';

const PriceField = ({ input, meta: { touched, error } }) => {
  return (
    <div className="price-field">
      <label className="field-label" htmlFor="price">Price<span className="required">*</span></label>
      <p className="field-info">Leave the price at zero if you intend for this playlist to be free. People can still pay more if you let them. View the Pricing Guide for more information.</p>
      <div className="upload-price-input-zone">
        <div className="currency-con">£</div>
        <input
          className="price-input"
          {...input}
          type="number"
          step="0.01"
          // min="0.00"
          value={input.value}
        />
      </div>
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default PriceField;
