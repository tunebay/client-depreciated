import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import className from 'classnames';

// import '../../../../styles/components/hub/upload-form-fields.scss';

class PlaylistTypeField extends Component {
  render() {
    const { input, label, meta: { touched, error } } = this.props;

    const options = [
      { value: 'single', label: 'Single' },
      { value: 'EP', label: 'EP' },
      { value: 'album', label: 'Album' }
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
            disabled={this.props.formType === 'SINGLE'}
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
