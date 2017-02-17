import React, { Component, PropTypes } from 'react';
import BasicInfoPage from './basic-info-page';
import PricingPage from './pricing-page';
import AvailabilityPage from './availability-page';
import ReleasePage from './release-page';

class AudioUploadForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit(vales) {
    console.log('SUBBMITED!:', vales);
  }

  renderFormPage() {
    console.log(this.state.page);
    switch (this.state.page) {
      case 1:
        return <BasicInfoPage onSubmit={this.nextPage} />;
      case 2:
        return <PricingPage previousPage={this.previousPage} onSubmit={this.nextPage} />;
      case 3:
        return <AvailabilityPage previousPage={this.previousPage} onSubmit={this.nextPage} />;
      case 4:
        return <ReleasePage previousPage={this.previousPage} onSubmit={this.handleSubmit.bind(this)} />;
      default:
        return <BasicInfoPage onSubmit={this.nextPage} />;
    }
  }

  render() {
    return (
      <div className="audio-upload-form-zone">
        {this.renderFormPage()}
      </div>
    );
  }
}

AudioUploadForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AudioUploadForm;
