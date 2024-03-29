import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaylistNav from './playlist-nav';
import PlaylistTrackList from './playlist-tracklist';
import * as actions from '../../../../actions/profile-actions';
import './styles/playlist-detail-page.scss';

class PlaylistDeatilPage extends Component {
  constructor(props) {
    super(props);
    const { playlists, match } = this.props;
    this.props.setCurrentPlaylist(playlists, match);
    // this.props.findPlaylistByURL(this.props.match.url);
  }

  // componentWillReceiveProps(props) {
  //   // console.log('recive props', props);
  //   // console.log(props.playlist);
  //   // if (props.playlist === null) return <Redirect to {...this.props} />;
  // }
  renderGenres() {
    return this.props.playlist.genres.map((genre) => {
      return (
        <div key={genre.id} className="genre-box">
          {genre.name}
        </div>
      );
    });
  }

  render() {
    const { playlist } = this.props;
    if (!playlist) return <div>No playlist by that name</div>;

    return (
      <div className="playlist-detail-page">
        <div className="left-col">
          <div className="artwork-con">
            <img className="artwork" src={playlist.artwork} alt="artwork" />
          </div>
          <button className="buy-btn">
            {playlist.price > 0 ? `Buy £${playlist.price}` : 'Download Free'}
          </button>
          <div className="supporting-this">
            <div className="title">
              People supporting this <span className="bullet">&#x25CF;</span>
            </div>
          </div>
        </div>
        <div className="right-col">
          <div className="play-btn-title-con">
            <button className="btn-span-wrapper">
              <span className="play-btn">
                <img
                  src={'../../../../../assets/images/triangle.svg'}
                  alt="play"
                  className="play"
                />
              </span>
            </button>
            <div className="title-genres-wrapper">
              <div className="playlist-title">
                {playlist.title}
              </div>
              <div className="genres-wrapper">
                {this.renderGenres()}
              </div>
            </div>
          </div>
          {/* <PlaylistNav numberOfTracks={playlist.numberOfTracks} /> */}
          <PlaylistTrackList
            tracks={playlist.tracks}
            playlistType={playlist.playlistType}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.profile.currentPlaylist,
  };
};

export default connect(mapStateToProps, actions)(PlaylistDeatilPage);
