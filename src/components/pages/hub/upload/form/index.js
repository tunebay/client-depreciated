import React, { Component } from 'react';
import { connect } from 'react-redux';
import BasicInfoPage from './basic-info-page';
import PricePage from './price-page';
import SingleSelectionPage from './single-selection-page';
import '../../../../../styles/components/hub/upload/upload-form.scss';

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
    const { onSubmit, uploadInProgress } = this.props;
    const { page } = this.state;
    return (
      <div className="upload-form-container fade-in">
        {page === 1 && <BasicInfoPage uploadInProgress={uploadInProgress} onSubmit={this.nextPage} />}
        {page === 2 && <PricePage uploadInProgress={uploadInProgress} previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 3 && <SingleSelectionPage previousPage={this.previousPage} onSubmit={onSubmit} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadInProgress: state.audioUpload.uploadInProgress
  };
};

export default connect(mapStateToProps)(AudioUploadForm);
