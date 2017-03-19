import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleSelectionTrack from './single-selection-track';
import '../../../../styles/components/hub/upload/single-selection-track.scss';

const dummyPlaylist = [
  { name: 'Wings', duration: 18, playlistPosition: 1, trackId: 1 },
  { name: 'Not Going Home', duration: 183, playlistPosition: 2, trackId: 2 },
  { name: 'Shotgun', duration: 234, playlistPosition: 3, trackId: 3 },
  { name: 'Best Of Me', duration: 180, playlistPosition: 4, trackId: 4 }
];

class SingleSelection extends Component {
  render() {
    const { playlist } = this.props;
    return (
      <div>
        <ul className="single-selection-headers">
          <li id="name" className="single-selection-header">Name</li>
          <li id="time" className="single-selection-header">Time</li>
          <li id="single" className="single-selection-header">Single</li>
          <li id="price" className="single-selection-header">Price</li>
        </ul>
        <ul className="single-selection-con">
          {playlist.map((track, index) =>
            <SingleSelectionTrack track={track} key={track.trackId} index={index} />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps)(SingleSelection);
