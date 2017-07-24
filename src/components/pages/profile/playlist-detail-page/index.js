import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/profile-actions';

class PlaylistDeatilPage extends Component {
  constructor(props) {
    super(props);
    const { playlists, match } = this.props;
    this.props.setCurrentPlaylist(playlists, match);
    // this.props.findPlaylistByURL(this.props.match.url);
  }

  componentWillReceiveProps(props) {
    console.log('recive props', props);
    console.log(props.playlist);
    // if (props.playlist === null) return <Redirect to {...this.props} />;
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) return <div>No playlist by that name</div>;

    return (
      <div>
        <div>{this.props.playlist.title}</div>
        <ul>
          {playlist.tracks.map((track) => {
            return <li>{track.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.profile.currentPlaylist
  };
};

export default connect(mapStateToProps, actions)(PlaylistDeatilPage);
