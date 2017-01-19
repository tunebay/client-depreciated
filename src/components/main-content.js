import React from 'react';

export const MainContent = (props) => {
  return (
    <div style={styles}>
      {props.children}
    </div>
  );
};

const styles = {
  paddingTop: 45,
  display: 'flex'
};

export default MainContent;
