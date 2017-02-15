import React from 'react';

import '../../styles/app.scss';

const PageContainer = (props) => {
  return (
    <div className="page-container">
      {props.children}
    </div>
  );
};

export default PageContainer;
