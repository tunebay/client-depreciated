import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import className from 'classnames';

class PlaylistTypeField extends Component {
  render() {
    const { formType, input, label, meta: { touched, error } } = this.props;

    const options = [
      { value: 'single', label: 'Single' },
      { value: 'EP', label: 'EP', disabled: formType === 'SINGLE' },
      { value: 'album', label: 'Album', disabled: formType === 'SINGLE' },
      { value: 'playlist', label: 'Playlist' }
    ];

    const inputClass = className({
      'upload-dropdown': true,
      'input-error': touched && error
    });

    return (
      <div className="playlist-type-field">
        <label
          htmlFor="upload-dropdown"
          className="field-label"
        >Playlist type<span className="required">*</span>
        </label>
        <div>
          <Select
            className={inputClass}
            {...input}
            searchable={false}
            placeholder="Choose"
            value={input.value.value || ''}
            options={options}
            clearable={false}
          />
          {touched && error && <div className="field-error">{error}</div>}
        </div>
      </div>
    );
  }
}

export default PlaylistTypeField;
