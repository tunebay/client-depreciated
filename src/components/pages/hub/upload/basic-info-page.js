import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTitleField } from './upload-form-fields';

class BasicInfoPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="audio-upload-form" onSubmit={handleSubmit}>
        <Field name="title" type="text" component={renderTitleField} label="Title" />
        <Field name="playlistType" type="text" component={renderTitleField} label="Playlist Type" />
        <Field name="genre" type="text" component={renderTitleField} label="Genre(s)" />
        <Field name="permalink" type="text" component={renderTitleField} label="Permalink" />
        <Field name="tags" type="text" component={renderTitleField} label="tags" />
        <Field name="description" type="text" component={renderTitleField} label="Description" />
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
    'permalink',
    'genre',
    'tags',
    'description'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(BasicInfoPage);

export default connect()(ComposedForm);
