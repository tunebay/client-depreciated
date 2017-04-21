import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import className from 'classnames';

class GenreField extends Component {
  render() {
    const { input, label, meta: { touched, error } } = this.props;
    const genresSelected = input.value.length;
    const inputClass = className({
      'genre-field-select': true,
      'input-error': touched && error
    });
    const options = [
      // DO NOT CHANGE
      // values represent ids in database
      { value: 1, label: 'Alternative rock' },
      { value: 2, label: 'Bashment' },
      { value: 3, label: 'Blues' },
      { value: 4, label: 'Classical' },
      { value: 5, label: 'Country' },
      { value: 6, label: 'Dance & EDM' },
      { value: 7, label: 'Dancehall' },
      { value: 8, label: 'Deep House' },
      { value: 9, label: 'Disco' },
      { value: 10, label: 'Drum & Bass' },
      { value: 11, label: 'Dupstep' },
      { value: 12, label: 'Electronic' },
      { value: 13, label: 'Folk' },
      { value: 14, label: 'Funk' },
      { value: 15, label: 'Garage' },
      { value: 16, label: 'Gospel' },
      { value: 17, label: 'Grime' },
      { value: 18, label: 'Hip-Hop' },
      { value: 19, label: 'House' },
      { value: 20, label: 'Indie' },
      { value: 21, label: 'Instrumental' },
      { value: 22, label: 'Jazz' },
      { value: 23, label: 'Latin' },
      { value: 24, label: 'Metal' },
      { value: 25, label: 'Other' },
      { value: 26, label: 'Pop' },
      { value: 27, label: 'R&B' },
      { value: 28, label: 'Rap' },
      { value: 29, label: 'Reggae' },
      { value: 30, label: 'Reggaeton' },
      { value: 31, label: 'Rock' },
      { value: 32, label: 'Singer/Songwriter' },
      { value: 33, label: 'Ska' },
      { value: 34, label: 'Soul' },
      { value: 35, label: 'Soundtrack' },
      { value: 36, label: 'Techno' },
      { value: 37, label: 'Trance' },
      { value: 38, label: 'Trap' },
      { value: 39, label: 'Triphop' },
      { value: 40, label: 'World' },
    ];

    return (
      <div className="genre-field">
        <label className="field-label" htmlFor={this.props.label}>Genre(s)<span className="required">*</span></label>
        <div>
          <Select
            className={inputClass}
            {...input}
            placeholder="Select upto 3 genres"
            value={input.value}
            options={
              genresSelected >= 3 ?
                input.values :
                options
            }
            clearable={false}
            multi
            onBlur={() => input.onBlur(input.value)}
          />
          {touched && error && <div className="field-error">{error}</div>}
        </div>
      </div>
    );
  }
}

export default GenreField;
