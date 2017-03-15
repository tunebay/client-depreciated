import React, { Component } from 'react';
import BasicInfoPage from './basic-info-page';
import PricePage from './price-page';
import SingleSelectionPage from './single-selection-page';

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

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <BasicInfoPage onSubmit={this.nextPage} />}
        {page === 2 && <PricePage previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <SingleSelectionPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    );
  }
}

export default AudioUploadForm;
