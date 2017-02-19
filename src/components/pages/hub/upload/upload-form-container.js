import React from 'react';

import '../../../../styles/components/hub/upload.scss';

const UploadFormContainer = (props) => {
  return (
    <div className="upload-form-container">
      {props.children}
    </div>
  );
};

export default UploadFormContainer;
