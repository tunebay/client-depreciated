import React from 'react';
import Layout from '../../layout';

const NotFound = () => {
  document.title = 'Page not found | Tunebay';
  return (
    <Layout showHeader page={'NotFound'}>
      <div>
        <h3>404 page not found</h3>
        <p>{'We can\'t seem to find the page you\'re looking for.'}</p>
      </div>
    </Layout>
  );
};

export default NotFound;
