import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  renderTitleField,
  renderPlaylistTypeField,
  renderGenreField,
  renderPermalinkField,
  renderTagsField,
  renderDescriptionField
} from './upload-form-fields';

class BasicInfoPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="audio-upload-form" onSubmit={handleSubmit}>
        <Field name="title" type="text" component={renderTitleField} label="Title" />
        <div className="side-by-side-dropdowns">
          <Field name="playlistType" type="text" component={renderPlaylistTypeField} label="Playlist Type" />
          <Field name="genre" type="text" component={renderGenreField} label="Genre(s)" />
        </div>
        <Field name="permalink" type="text" component={renderPermalinkField} label="Permalink" />
        <Field name="tags" type="text" component={renderTagsField} label="tags" />
        <Field name="description" type="text" component={renderDescriptionField} label="Description" />
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
