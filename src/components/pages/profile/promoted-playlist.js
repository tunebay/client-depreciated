import React from 'react';

const PromotedPlaylist = ({ artwork, title, artist, price }) => {
  return (
    <div className="promoted-playlist">
      <div className="artwork-con">
        <img className="artwork" src={artwork} alt="artwork" />
        <div className="playlist-details" />
      </div>
    </div>
  );
};

export default PromotedPlaylist;
