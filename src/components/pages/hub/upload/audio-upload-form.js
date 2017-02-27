import React, { Component } from 'react';
import BasicInfoPage from './basic-info-page';
import PricingPage from './pricing-page';
import ReleasePage from './release-page';

class AudioUploadForm extends Component {
  renderFormPage() {
    switch (this.props.page) {
      case 1:
        return <BasicInfoPage onSubmit={this.nextPage} />;
      case 2:
        return <PricingPage previousPage={this.previousPage} onSubmit={this.nextPage} />;
      case 3:
        return <ReleasePage previousPage={this.previousPage} />;
      default:
        return <BasicInfoPage onSubmit={this.nextPage} />;
    }
  }

  render() {
    return (
      this.renderFormPage()
    );
  }
}

// AudioUploadForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

export default AudioUploadForm;
