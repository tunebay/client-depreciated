import React, { Component } from 'react';
import Select from 'react-select';
import '../../../../styles/components/hub/upload-form-fields.scss';

class PlaylistTypeField extends Component {
  render() {
    const options = [
      { value: 'album', label: 'Album' },
      { value: 'ep', label: 'EP' },
      { value: 'lp', label: 'LP' },
      { value: 'single', label: 'Single' }
    ];

    return (
      <div className="playlist-type-field">
        <label
          className="upload-label"
          htmlFor={this.props.label}
        >{this.props.label}
        </label>
        <div>
          <Select
            className="upload-dropdown"
            {...this.props.input}
            searchable={false}
            placeholder="Choose"
            value={this.props.input.value.value || ''}
            options={options}
            clearable={false}
          />
        </div>
      </div>
    );
  }
}

export default PlaylistTypeField;
