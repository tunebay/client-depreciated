import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// import '../../../../styles/components/hub/upload-form-fields.scss';

class PlaylistTypeField extends Component {
  render() {
    const { input, label, meta: { touched, error } } = this.props;

    const options = [
      { value: 'single', label: 'Single' },
      { value: 'EP', label: 'EP' },
      { value: 'album', label: 'Album' }
    ];

    return (
      <div className="playlist-type-field">
        <label
          htmlFor="upload-dropdown"
          className="field-label"
        >Playlist type<span className="required">*</span>
        </label>
        <div>
          <Select
            className="upload-dropdown"
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