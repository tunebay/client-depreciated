import React from 'react';
// import '../../../../styles/components/hub/upload-form-fields.scss';

const PriceField = (props) => {
  return (
    <div className="price-field">
      <label className="upload-label" htmlFor={props.label}>Price<span>*</span></label>
      <div className="upload-price-input-zone">
        <div className="currency-symbol">£</div>
        <input
          {...props.input}
          type="number"
          step="0.01"
          // min="0.00"
          value={props.input.value}
        />
        <button className="pricing-guide">Pricing guide</button>
      </div>
    </div>
  );
};

export default PriceField;
