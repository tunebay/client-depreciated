import React from 'react';

import '../../../styles/components/hub/hub.scss';

const HubContainer = (props) => {
  return (
    <div className="hub-container">
      {props.children}
    </div>
  );
};

export default HubContainer;
