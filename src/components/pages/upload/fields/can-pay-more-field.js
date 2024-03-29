import React from 'react';
import 'react-select/dist/react-select.css';

const canPayMoreField = ({ input }) => {
  return (
    <div className="can-pay-more-field">
      <input
        className="can-pay-more-checkbox"
        {...input}
        value={input.value}
        checked={input.value}
        type="checkbox"
      />
      <label htmlFor="can-pay-more" className="can-pay-more-label">Let people pay more</label>
    </div>
  );
};

export default canPayMoreField;
