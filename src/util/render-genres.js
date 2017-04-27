import React from 'react';

const renderGenres = (genresArray) => {
  const labels = genresArray.map(genre => genre.label);
  return (
    <div className="uploaded-genres">
      {labels.join(' | ')}
    </div>
  );
};

export default renderGenres;
