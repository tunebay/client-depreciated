import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-progressbar.js';

class UploadedSingle extends Component {
  render() {
    const track = this.props.playlist[0];
    // console.log(track.progress);
    const options = {
      strokeWidth: 0.5,
      color: '#0089EE',
      trailColor: '#e4e4e4'
    };

    const containerStyle = {
      width: '100%'
    };

    return (
      <Line
        progress={track.progress / 100}
        options={options}
        initialAnimate={false}
        containerStyle={containerStyle}
        containerClassName={'.progressbar'}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps)(UploadedSingle);
