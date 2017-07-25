import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaylistNav from './playlist-nav';
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
          <button className="buy-btn">
            {playlist.price > 0 ? `Buy £${playlist.price}` : 'Download Free'}
          </button>
        </div>
        <div className="right-col">
          <div className="play-btn-title-con">
            <button
              className="btn-span-wrapper"
            >
              <span className="play-btn">
                <img
                  src={'../../../../../assets/images/triangle.svg'}
                  alt="play"
                  className="play"
                />
              </span>
            </button>
            <div className="playlist-title">{playlist.title}</div>
            <img
              src="../../../../../assets/images/horizontal-dots.svg"
              alt="playlist-dots"
              className="playlist-dots"
            />
          </div>
          <PlaylistNav numberOfTracks={playlist.numberOfTracks} />
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
