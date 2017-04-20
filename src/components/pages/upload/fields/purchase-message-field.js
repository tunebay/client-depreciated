import React from 'react';

const PurchaseMessageField = ({ input }) => (
  <div className="purchase-message-field">
    <label className="field-label" htmlFor="purchase-message">Purchase message</label>
    <textarea
      className="purchase-message-input"
      {...input}
      rows="4"
      placeholder="Leave a short message or thank you for someone when they download your music."
      cols="50"
    />
  </div>
);

export default PurchaseMessageField;
