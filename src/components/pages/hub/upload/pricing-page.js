import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTitleField } from './upload-form-fields';

class PricingPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="price" type="text" component={renderTitleField} label="Title" />
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
    'price'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(PricingPage);

export default connect()(ComposedForm);
