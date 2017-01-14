import React from 'react';

const NotFound = () => {
  document.title = 'Page not found | Tunebay';

  return (
    <div>
      <h3>404 page not found</h3>
      <p>{'We can\'t seem to find the page you\'re looking for.'}</p>
    </div>
  );
};

export default NotFound;
