import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTitleField } from './upload-form-fields';

class AvailabilityPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="private" type="text" component={renderTitleField} label="Private?" />
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    );
  }
}

const ComposedForm = reduxForm({
  form: 'audioUpload',
  fields: [
    'private'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(AvailabilityPage);

export default connect()(ComposedForm);
