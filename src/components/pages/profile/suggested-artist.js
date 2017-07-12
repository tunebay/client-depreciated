import React from 'react';

const SuggestedArtist = ({ username, displayName }) => {
  return (
    <div className="suggested-artist">
      <div className="img" />
      <div className="details">
        <div className="name-and-username">
          <span className="display-name">{displayName}</span> @{username}
        </div>
        <button className="follow-btn">FOLLOW</button>
      </div>
    </div>
  );
};

export default SuggestedArtist;
