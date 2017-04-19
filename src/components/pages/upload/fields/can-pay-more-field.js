import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const canPayMoreField = ({ input }) => {
  console.log('CHECKBOX', input);
  const options = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ];

  return (
    <div className="can-pay-more-field">
      <label htmlFor="pay-more-text" className="field-label">
        Allow people to pay more?<span className="required">*</span>
      </label>
      <Select
        className="can-pay-more-input"
        {...input}
        // disabled={this.props.formType === 'SINGLE'}
        searchable={false}
        value={input.value}
        options={options}
        clearable={false}
      />
    </div>
  );
};

export default canPayMoreField;
