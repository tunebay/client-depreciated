import React from 'react';
import PlaylistDisplay from './playlist-display';
import '../../../../styles/components/profile/music/index.scss';

const MusicTab = ({ playlists, loading }) => {
  if (loading) return <div />;

  return (
    <ul className="music-tab-list">
      {playlists.map((playlist, index) =>
        <PlaylistDisplay playlist={playlist} key={playlist.playlistId} index={index} />
      )}
    </ul>
  );
};

export default MusicTab;
