import React from 'react';
import 'react-select/dist/react-select.css';

const canPayMoreField = ({ input }) => {
  console.log('CHECKBOX', input);

  return (
    <div className="can-pay-more-field">
      <input
        className="can-pay-more-checkbox"
        {...input}
        value={input.value}
        checked={input.value}
        type="checkbox"
      />
      <label htmlFor="can-pay-more" className="field-label">Let people pay more</label>
    </div>
  );
};

export default canPayMoreField;
