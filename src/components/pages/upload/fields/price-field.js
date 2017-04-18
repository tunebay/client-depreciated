import React from 'react';

const PriceField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="price-field">
      <label className="upload-label" htmlFor={label}>Price<span>*</span></label>
      <div className="upload-price-input-zone">
        <div className="currency-con"><Icon name="gbp" className="currency" /></div>
        <input
          {...input}
          type="number"
          step="0.01"
          // min="0.00"
          value={input.value}
        />
        <button className="pricing-guide">Pricing guide</button>
      </div>
      {touched && error &&
        <div className="field-error">
          <Icon name="exclamation-circle" /> {error}
        </div>}
    </div>
  );
};

export default PriceField;
