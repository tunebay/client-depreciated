import React from 'react';

const PurchaseMessageField = ({ input, playlistType }) => (
  <div className="purchase-message-field">
    <label className="field-label" htmlFor="purchase-message">Purchase message</label>
    <p className="purchase-message-text">{`Leave a short message or thank you for people when they download your ${playlistType}.`}</p>
    <textarea
      {...input}
      rows="4"
      cols="50"
    />
  </div>
);

export default PurchaseMessageField;
