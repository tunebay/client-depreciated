import React from 'react';

import '../../../../styles/components/hub/upload-form-fields.scss';

export const renderTitleField = ({ input, label, type }) => (
  <div className="title-field">
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={'Name your playlist'} type={type} />
    </div>
  </div>
);

export const renderPlaylistTypeField = ({ input, label, type }) => (
  <div className="playlist-type-field">
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

export const renderGenreField = ({ input, label, type }) => (
  <div className="genre-field">
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

export const renderPermalinkField = ({ input, label, type }) => (
  <div className="permalink-field">
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

export const renderTagsField = ({ input, label, type }) => (
  <div className="tags-field">
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

export const renderDescriptionField = ({ input, label, type }) => (
  <div className="description-field">
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);
