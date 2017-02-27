import React, { Component } from 'react';
import Select from 'react-select';
import '../../../../styles/components/hub/upload-form-fields.scss';

class GenreField extends Component {
  render() {
    const { label, input } = this.props;
    const options = [
      { value: 'alternative rock', label: 'Alternative rock' },
      { value: 'ambient', label: 'Ambient' },
      { value: 'blues', label: 'Blues' },
      { value: 'classical', label: 'Classical' },
      { value: 'country', label: 'Country' },
      { value: 'dance & EDM', label: 'Dance & EDM' },
      { value: 'dancehall', label: 'Dancehall' },
      { value: 'deep house', label: 'Deep House' },
      { value: 'disco', label: 'Disco' },
      { value: 'drum & bass', label: 'Drum & Bass' },
      { value: 'dupstep', label: 'Dupstep' },
      { value: 'electronic', label: 'Electronic' },
      { value: 'folk', label: 'Folk' },
      { value: 'funk', label: 'Funk' },
      { value: 'garage', label: 'Garage' },
      { value: 'grime', label: 'Grime' },
      { value: 'hip-hop', label: 'Hip-Hop' },
      { value: 'house', label: 'House' },
      { value: 'indie', label: 'Indie' },
      { value: 'intrumental', label: 'Instrumental' },
      { value: 'jazz', label: 'Jazz' },
      { value: 'latin', label: 'Latin' },
      { value: 'metal', label: 'Metal' },
      { value: 'pop', label: 'Pop' },
      { value: 'r&b', label: 'R&B' },
      { value: 'rap', label: 'Rap' },
      { value: 'reggae', label: 'Reggae' },
      { value: 'reggaeton', label: 'Reggaeton' },
      { value: 'rock', label: 'Rock' },
      { value: 'soul', label: 'Soul' },
      { value: 'soundtrack', label: 'Soundtrack' },
      { value: 'techno', label: 'Techno' },
      { value: 'trance', label: 'Trance' },
      { value: 'trap', label: 'Trap' },
      { value: 'triphop', label: 'Triphop' },
      { value: 'world', label: 'World' },
    ];

    return (
      <div className="playlist-type-field">
        <label className="upload-label" htmlFor={this.props.label}>{this.props.label}</label>
        <div>
          <Select
            className="upload-dropdown"
            {...input}
            placeholder="Choose"
            value={this.props.input.value || ''}
            options={options}
            clearable={false}
            onBlur={() => input.onBlur(input.value)}
          />
        </div>
      </div>
    );
  }
}

export default GenreField;
