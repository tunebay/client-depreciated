import React from 'react';
import PricePill from '../../common/price-pill';

const PromotedPlaylist = ({ artwork, title, artist, price }) => {
  return (
    <div className="promoted-playlist">
      <div className="artwork-con">
        <img className="artwork" src={artwork} alt="artwork" />
      </div>
      <div className="playlist-details">
        <div className="title">{title}</div>
        <div className="artist">{artist}</div>
        <PricePill price={price} backgroundColor={'#556067'} />
        {/* <div className="price">{price}</div> */}
      </div>
    </div>
  );
};

export default PromotedPlaylist;
