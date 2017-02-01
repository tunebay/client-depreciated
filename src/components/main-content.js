import React from 'react';

const MainContent = (props) => {
  return (
    <div style={styles}>
      {props.children}
    </div>
  );
};

const styles = {
  // paddingTop: 50,
  // backgroundColor: '#f1f1f1',
  display: 'flex'
};

export default MainContent;
