import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../../styles/components/hub/upload-form-fields.scss';

class PermalinkField extends Component {
  render() {
    const baseUrl = `tunebay.com/${this.props.username}/${this.props.permalink}`;
    return (
      <div className="permalink-field">
        <label htmlFor={this.props.label}>Playlist URL</label>
        <div className="permalink-field-zone">
          <div>{baseUrl}</div>
          <input
            className="permalink-input"
            {...this.props.input}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let defaultPermalink = '';
  const values = state.form.audioUpload.values;
  if (values) {
    if (values.title) {
      defaultPermalink = values.title.replace(' ', '-').toLowerCase();
    }
  }
  console.log('loggin permalink:', defaultPermalink);
  return {
    username: state.currentUser.username,
    permalink: defaultPermalink
  };
};

export default connect(mapStateToProps)(PermalinkField);
