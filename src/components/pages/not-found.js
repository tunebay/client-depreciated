import React from 'react';

const NotFound = ({ match }) => {
  document.title = 'Page not found | Tunebay';
  return (
    <div>
      <h3>404 page not found</h3>
      <p>{'We can\'t seem to find the page you\'re looking for.'}</p>
      <p>{'If you were looking for an artist try searching for them instead.'}</p>
      <input type="text" placeholder={match.params.username} />
    </div>
  );
};

export default NotFound;
