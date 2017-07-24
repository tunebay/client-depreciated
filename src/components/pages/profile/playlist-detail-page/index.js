import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/profile-actions';
import './styles/playlist-detail-page.scss';

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
      <div className="playlist-detail-page">
        <div className="left-col">
          <div className="artwork-con">
            <img
              className="artwork"
              src={playlist.artwork}
              alt="artwork"
            />
          </div>
          <button className="buy-btn">Buy £7.99</button>
        </div>
        <div className="right-col">

        </div>
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
