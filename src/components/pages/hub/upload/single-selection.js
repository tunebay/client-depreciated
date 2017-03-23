import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleSelectionTrack from './single-selection-track';
import '../../../../styles/components/hub/upload/single-selection-track.scss';

class SingleSelection extends Component {
  render() {
    const { playlist } = this.props;
    console.log(playlist);
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
