import React from 'react';

const SuggestedArtist = ({ avatar, username, displayName }) => {
  return (
    <div className="suggested-artist">
      <div className="avatar-con">
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
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
