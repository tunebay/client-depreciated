import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Line as Progress } from 'rc-progress';
import { Line } from 'react-progressbar.js';

import '../../../styles/components/upload/uploaded-single.scss';

class UploadedSingle extends Component {
  render() {
    const track = this.props.playlist[0];
    console.log(track.progress);
    var options = {
               strokeWidth: 0.8
           };

           // For demo purposes so the container has some dimensions.
           // Otherwise progress bar won't be shown
           var containerStyle = {
               width: '100%',
           };

           return (
               <Line
                   progress={track.progress / 100 }
                   options={options}
                   initialAnimate={true}
                   containerStyle={containerStyle}
                   containerClassName={'.progressbar'} />
           );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.uploadedPlaylist
  };
};

export default connect(mapStateToProps)(UploadedSingle);
