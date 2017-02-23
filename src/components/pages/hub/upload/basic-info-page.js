import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  renderTitleField,
  renderPermalinkField,
  renderTagsField,
  renderDescriptionField
} from './upload-form-fields';
import PlaylistTypeField from './playlist-type-field';
import GenreField from './genre-field';
import PermalinkField from './permalink-field';
import TagsField from './tags-field';

class BasicInfoPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="audio-upload-form" onSubmit={handleSubmit}>
        <Field name="title" type="text" component={renderTitleField} label="Title" />
        <div className="side-by-side-dropdowns">
          <Field name="playlistType" component={PlaylistTypeField} label="Playlist type" />
          <Field name="genre" component={GenreField} label="Genre(s)" />
        </div>
        <Field name="permalink" type="text" component={PermalinkField} label="Permalink" />
        <Field name="tags" type="text" component={TagsField} label="Tags" />
        <Field name="description" type="text" component={renderDescriptionField} label="Description" />
        {/* <div>
          <button type="submit">Next</button>
        </div> */}
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

const mapStateToProps = (state) => {
  if (state.form.audioUpload && state.form.audioUpload.values) {
    console.log(state.form.audioUpload.values);
  }
  return {

  }
};

export default connect(mapStateToProps)(ComposedForm);
