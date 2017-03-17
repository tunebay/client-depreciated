import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import UploadedPlaylist from '../uploaded-playlist';
import UploadArtwork from './upload-artwork';
import TitleField from './fields/title-field';
import DescriptionField from './fields/description-field';
import GenreField from './fields/genre-field';
import PlaylistTypeField from './fields/playlist-type-field';
import ReleaseDateField from './fields/release-date-field';
import '../../../../../styles/components/hub/upload/upload-form.scss';

const BasicInfoPage = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="audio-upload-form" onSubmit={handleSubmit}>
      <div className="upload-playlist-detail">
        <UploadArtwork uploadPage={1} />
        <div className="upload-form-fields">
          <Field name="title" type="text" component={TitleField} label="Title" />
          <div className="side-by-side-fields">
            <Field name="playlistType" component={PlaylistTypeField} label="Playlist type" />
            <Field name="releaseDate" component={ReleaseDateField} label="Release date" />
          </div>
          <Field name="genres" component={GenreField} label="Genre(s)" />
          <Field name="description" component={DescriptionField} label="Description" />
        </div>
      </div>
      <div className="uploaded-playlist-con">
        <UploadedPlaylist />
      </div>
      <div className="upload-form-footer">
        <div className="required-field-note">*Indicates required field</div>
        <div className="upload-form-action-btns">
          <button type="submit" className="next-btn">Next</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'audioUpload',                 // <------ same form name
  fields: [
    'title',
    'playlistType',
    'releaseDate',
    'genres',
    'description'
  ],
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  initialValues: { price: parseFloat(0.00).toFixed(2), canPayMore: true },
  validate
})(BasicInfoPage);
