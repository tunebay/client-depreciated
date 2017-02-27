import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTitleField, renderDescriptionField } from './upload-form-fields';
import PlaylistTypeField from './playlist-type-field';
import GenreField from './genre-field';
import TagsField from './tags-field';
import '../../../../styles/components/hub/upload.scss';

class BasicInfoPage extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="audio-upload-form" onSubmit={handleSubmit}>
        <Field name="title" type="text" component={renderTitleField} label="Title" />
        <div className="side-by-side-dropdowns">
          <Field name="playlistType" component={PlaylistTypeField} label="Playlist type" />
          <Field name="genre" component={GenreField} label="Genre" />
        </div>
        <div className="side-by-side-dropdowns">
          <Field name="genre2" type="text" component={GenreField} label="Additional genre" />
          <Field name="genre3" type="text" component={GenreField} label="Additional genre" />
        </div>
        <Field name="tags" type="text" component={TagsField} label="Tags" />
        <Field name="description" type="text" component={renderDescriptionField} label="Description" />
      </form>
    );
  }
}

const ComposedForm = reduxForm({
  form: 'audioUpload',
  fields: [
    'title',
    'playlistType',
    'genre',
    'genre2',
    'genre3',
    'tags',
    'description'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(BasicInfoPage);

// const mapStateToProps = (state) => {
//   if (state.form.audioUpload && state.form.audioUpload.values) {
//     console.log(state.form.audioUpload.values);
//   }
//   return {
//
//   };
// };

export default connect()(ComposedForm);
