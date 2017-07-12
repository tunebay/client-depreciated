import React, { Component } from 'react';
import './styles/trending-artists.scss';
import SuggestedArtist from './suggested-artist';

class TrendingArtists extends Component {
  render() {
    return (
      <div className="side-content-item trending-artists">
        <div className="item-title">Suggested for you <span className="bullet">&#9679;</span></div>
        <SuggestedArtist
          displayName={'Sinead Harnett'}
          username={'sineadharnett'}
          avatar={'https://i1.sndcdn.com/avatars-000314922960-nej0ey-t500x500.jpg'}
        />
        <SuggestedArtist
          displayName={'Mali Michael'}
          username={'malimichael'}
          avatar={'https://i1.sndcdn.com/avatars-000173951649-piwm19-t500x500.jpg'}
        />
        <SuggestedArtist
          displayName={'The Keepsakes'}
          username={'thekeepsakes'}
          avatar={'https://i1.sndcdn.com/avatars-000045446923-xw7qhv-t500x500.jpg'}
        />
        {/* <div className="invite-friends-con">
          <img className="trophy" src="../../../../assets/images/trophy.svg" alt="trophy" />
          <div className="invite-text">Invite friends to earn pristeige</div>
        </div> */}
      </div>
    );
  }
}

export default TrendingArtists;
