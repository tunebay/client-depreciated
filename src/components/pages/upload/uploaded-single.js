import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line as Progress } from 'rc-progress';
import '../../../styles/components/upload/uploaded-single.scss';

class UploadedSingle extends Component {
  render() {
    const track = this.props.playlist[0];
    console.log(track.progress);
    return (
      <Progress
        className="progress"
        percent={track.progress}
        strokeWidth={0.5}
        strokeColor={'#0089EE'}
        trailColor={'#e4e4e4'}
        strokeLinecap="square"
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
