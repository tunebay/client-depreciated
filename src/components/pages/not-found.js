import React from 'react';
import Header from '../header';
import MainContent from '../main-content';

const NotFound = () => {
  document.title = 'Page not found | Tunebay';

  return (
    <div className="not-found-con">
      <Header />
      <MainContent>
        <div>
          <h3>404 page not found</h3>
          <p>{'We can\'t seem to find the page you\'re looking for.'}</p>
        </div>
      </MainContent>
    </div>
  );
};

export default NotFound;
