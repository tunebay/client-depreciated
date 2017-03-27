import React from 'react';
import className from 'classnames';
import PricePill from '../../../common/price-pill';
import formatSeconds from '../../../../util/format-seconds';
import '../../../../styles/components/profile/music/track.scss';

const Track = ({ track }) => {
  const { position, name, duration } = track;
  const trackClass = className({
    'track-container': true,
    'odd-track': track.position % 2 !== 0,
    'even-track': track.position % 2 === 0
  });

  return (
    <li className={trackClass} key={position}>
      <div className="track-position">{position}</div>
      <div className="track-name">{name}</div>
      <div className="track-duration">{formatSeconds(duration)}</div>
      {renderPriceOrPlaylistOnly(track)}
    </li>
  );
};

const renderPriceOrPlaylistOnly = (track) => {
  return track.single ?
    <div className="track-price"><PricePill button price={track.trackPrice} /></div> :
    <div className="track-price">{`${track.playlistType} only`}</div>;
};

export default Track;
