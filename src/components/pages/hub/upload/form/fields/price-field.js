import React from 'react';
// import '../../../../styles/components/hub/upload-form-fields.scss';

const PriceField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="price-field">
      <label className="upload-label" htmlFor={label}>Price<span>*</span></label>
      <div className="upload-price-input-zone">
        <div className="currency-symbol">£</div>
        <input
          {...input}
          type="number"
          step="0.01"
          // min="0.00"
          value={input.value}
        />
        <button className="pricing-guide">Pricing guide</button>
        {touched && error && <div className="field-error">{error}</div>}
      </div>
    </div>
  );
};

export default PriceField;
