import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTitleField } from './upload-form-fields';

class BasicInfoPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="title" type="text" component={renderTitleField} label="Title" />
        <Field name="playlistType" type="text" component={renderTitleField} label="Title" />
        <Field name="releaseDate" type="text" component={renderTitleField} label="Title" />
        <Field name="permalink" type="text" component={renderTitleField} label="Title" />
        <Field name="genre1" type="text" component={renderTitleField} label="Title" />
        <Field name="genre2" type="text" component={renderTitleField} label="Title" />
        <Field name="genre3" type="text" component={renderTitleField} label="Title" />
        <Field name="tags" type="text" component={renderTitleField} label="Title" />
        <Field name="description" type="text" component={renderTitleField} label="Title" />
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
    'title',
    'playlistType',
    'releaseDate',
    'permalink',
    'genre1',
    'genre2',
    'genre3',
    'tags',
    'description'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(BasicInfoPage);

export default connect()(ComposedForm);
