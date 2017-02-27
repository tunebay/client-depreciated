import React, { Component } from 'react';
import { Creatable } from 'react-select';
import '../../../../styles/components/hub/upload-form-fields.scss';

class TagsField extends Component {
  render() {
    return (
      <div className="tags-field">
        <label
          className="upload-label"
          htmlFor={this.props.label}
        >{this.props.label}</label>
        <div>
          <Creatable
            className="upload-dropdown"
            {...this.props.input}
            value={this.props.input.value || ''}
            clearable={false}
            placeholder="Add tags to describe your playlist (e.g moody)"
            multi
            promptTextCreator={val => `Add "${val}" tag`}
            noResultsText="Start typing to add a tag"
            arrowRenderer={() => {}}
          />
        </div>
      </div>
    );
  }
}

export default TagsField;
