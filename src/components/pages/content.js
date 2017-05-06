import React from 'react';
import '../../styles/app.scss';

const Content = props => (
  <div className="content">
    {props.children}
  </div>
);

export default Content;
