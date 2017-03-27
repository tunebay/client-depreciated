import React from 'react';
import PricePill from '../../../common/price-pill';
import TrackList from './track-list';
import SingleTrack from './single-track';
import '../../../../styles/components/profile/music/index.scss';

const PlaylistDisplay = ({ playlist }) => {
  return (
    <li className="playlist-display">
      <div className="artwork-detail-con">
        <div className="artwork" />
        <div className="detail">
          <div className="playlist-title-pill">
            {playlist.title}<PricePill price={playlist.price} />
          </div>
        </div>
      </div>
      {renderTrackOrTrackList(playlist.tracks)}
      <div className="playlist-footer" />
    </li>
  );
};

const renderTrackOrTrackList = (tracks) => {
  return tracks.length === 1 ?
    <SingleTrack track={tracks[0]} /> :
    <TrackList tracks={tracks} />;
};

export default PlaylistDisplay;
