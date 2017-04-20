import React from 'react';
import className from 'classnames';

const PriceField = ({ input, meta: { touched, error } }) => {
  const inputClass = className({
    'price-input': true,
    'input-error': touched && error
  });

  return (
    <div className="price-field">
      <label className="field-label" htmlFor="price">Price<span className="required">*</span></label>
      <div className="upload-price-input-zone">
        <div className="currency-con">£</div>
        <input
          className={inputClass}
          {...input}
          type="number"
          step="0.01"
          // min="0.00"
          value={input.value}
        />
        <div className="pricing-guide">Pricing guide</div>
      </div>
      {touched && error && <div className="field-error">{error}</div>}
    </div>
  );
};

export default PriceField;
