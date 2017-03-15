import React from 'react';
// import '../../../../styles/components/hub/upload-form-fields.scss';

const CanPayMoreField = (props) => {
  console.log('INPUT VALUE:', props.input.value);
  return (
    <div className="can-pay-more-field">
      <input
        {...props.input}
        type="checkbox"
        value={props.input.value}
      />
      <div className="can-pay-more-text">Allow people to pay more if they want</div>
    </div>
  );
};

export default CanPayMoreField;
