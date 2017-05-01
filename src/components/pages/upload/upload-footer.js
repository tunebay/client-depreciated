import React from 'react';
import className from 'classnames';
import { Circle } from 'react-progressbar.js';
import ReactTooltip from 'react-tooltip';
import '../../../styles/components/upload/upload-footer.scss';

const UploadFooter = ({ formType, handlePrevious, singleProgress, isUploading, isReleasing, page }) => {
  console.log('SINGLE', singleProgress);
  const footerClass = className({
    'upload-footer': true,
    'multi-footer': formType === 'MULTI'
  });

  const renderButtonContent = () => {
    if (isReleasing) {
      return <img src="../../../../assets/images/ring-loading.svg" alt="loading" className="ring-loading" />;
    }
    if (page === 'BASIC_INFO_PAGE') {
      return 'Next';
    }
    return formType === 'MULTI' ? 'Next' : 'Release';
  };

  const renderTooltip = () => {
    if (isUploading) {
      return (
        <ReactTooltip id="nextBtn" type="dark" effect="solid">
          <span className="tootip">Please wait for your upload to complete before continuing</span>
        </ReactTooltip>
      );
    }
  };

  const renderSingleProgress = () => {
    if (formType === 'SINGLE') {
      if (singleProgress === 100) {
        return (
          <div className="progress-con">
            <div className="check-container">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            </div>
            <div className="progress-text">
              {`${singleProgress || 0}%`}
            </div>
          </div>
        );
      }
      const options = {
        strokeWidth: 11,
        color: '#0089EE',
        trailColor: '#e4e4e4'
      };

      const containerStyle = {
        height: 25,
        width: 25
      };
      return (
        <div className="progress-con">
          <Circle
            progress={singleProgress / 100}
            options={options}
            initialAnimate={false}
            containerStyle={containerStyle}
            containerClassName={'progressbar'}
          />
          <div className="progress-text">
            {`${singleProgress || 0}%`}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={footerClass}>
      <div className="required-fields"><span className="required">*</span> Required feilds</div>
      <div className="action-btns">
        {renderSingleProgress()}
        <button onClick={handlePrevious} type="button" className="back-btn">
          {page === 'BASIC_INFO_PAGE' ? 'Cancel' : 'Previous'}
        </button>
        <div data-tip data-for="nextBtn">
          <button
            type="submit"
            disabled={isUploading || isReleasing}
            className="next-btn"
          >
            {renderButtonContent()}
          </button>
        </div>
        {renderTooltip()}
      </div>
    </div>
  );
};


export default UploadFooter;
