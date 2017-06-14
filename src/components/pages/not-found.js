import React from 'react';
import Content from './content';


const NotFound = ({ match }) => {
  document.title = ' 404 | Tunebay';
  return (
    <Content>
      <h3>404 page not found</h3>
      <p>{'We can\'t seem to find the page you\'re looking for.'}</p>
      <p>{'If you were looking for an artist try searching for them instead.'}</p>
      <input type="text" placeholder={match.params.username} />
    </Content>
  );
};

export default NotFound;
