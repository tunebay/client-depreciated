import React from 'react';

const canPayMoreField = ({ input }) => {
  console.log('CHECKBOX', input);
  return (
    <div className="can-pay-more-field">
      <div className="price-checkbox">
        <input
          {...input}
          type="checkbox"
          name="canPayMore"
          checked={input.value}
          value={input.value}
        />
        <label htmlFor="can-pay-more-field" />
      </div>
      <div className="pay-more-text">Allow people to pay more</div>
    </div>
  );
};

export default canPayMoreField;
