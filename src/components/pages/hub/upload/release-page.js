import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReleaseDateField from './release-date-field';
import PricePill from '../../../common/price-pill';
import '../../../../styles/components/hub/upload.scss';

class ReleasePage extends Component {
  renderGenres() {
    const { genre, genre2, genre3 } = this.props.formValues;
    let genreString = genre.label;
    if (genre2 && !genre3) {
      genreString = `${genre.label} / ${genre2.label}`;
    }
    if (genre3 && !genre2) {
      genreString = `${genre.label} / ${genre3.label}`;
    }
    if (genre3 && genre2) {
      genreString = `${genre.label} / ${genre2.label} / ${genre3.label}`;
    }
    return (
      <div className="uploaded-genres">
        {genreString}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const { title, price } = this.props.formValues;
    return (
      <form className="audio-upload-form" onSubmit={handleSubmit}>
        <div className="upload-title-price-con">
          <h1 className="upload-playlist-title">{title}</h1>
          <PricePill price={price} />
        </div>
        {this.renderGenres()}
        <Field name="releaseDate" type="text" component={ReleaseDateField} label="Release date" />
      </form>
    );
  }
}

const ComposedForm = reduxForm({
  form: 'audioUpload',
  fields: [
    'releaseDate'
  ],
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(ReleasePage);

const mapStateToProps = (state) => {
  return {
    formValues: state.form.audioUpload.values
  };
};

export default connect(mapStateToProps)(ComposedForm);
