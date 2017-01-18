import React from 'react';

import Header from '../header';

const HomeFeed = () => {
  document.title = 'Tunebay';
  return (
    <div className="home-feed-con">
      <Header />
      <div>Home feed</div>
    </div>
  );
};

export default HomeFeed;
