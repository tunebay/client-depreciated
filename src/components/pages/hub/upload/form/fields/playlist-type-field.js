import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// import '../../../../styles/components/hub/upload-form-fields.scss';

class PlaylistTypeField extends Component {
  render() {
    const { input, label, meta: { touched, error } } = this.props;

    const options = [
      { value: 'album', label: 'Album' },
      { value: 'EP', label: 'EP' },
      { value: 'LP', label: 'LP' },
      { value: 'single', label: 'Single' }
    ];

    return (
      <div className="playlist-type-field">
        <label
          className="upload-label"
          htmlFor={label}
        >Playlist type<span>*</span>
        </label>
        <div>
          <Select
            className="upload-dropdown"
            {...input}
            searchable={false}
            placeholder="Choose"
            value={input.value.value || ''}
            options={options}
            clearable={false}
          />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    );
  }
}

export default PlaylistTypeField;
