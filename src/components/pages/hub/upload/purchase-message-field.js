import React from 'react';

const PurchaseMessageField = ({ input, label, type, playlistType }) => (
  <div className="purchase-message-field">
    <label className="upload-label" htmlFor={label}>{label}</label>
    <p className="purchase-message-text">{`Leave a short message or thank you for people when they download your ${playlistType}.`}</p>
    <div>
      <textarea
        {...input}
        type={type}
        rows="4"
        cols="50"
        placeholder="Leave a short message"
      />
    </div>
  </div>
);

export default PurchaseMessageField;
