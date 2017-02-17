import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTitleField } from './upload-form-fields';

class ReleasePage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" type="text" component={renderTitleField} label="name" />
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
    'name'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ReleasePage);

export default connect()(ComposedForm);
