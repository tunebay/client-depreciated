import React, { Component } from 'react';
import './styles/trending-artists.scss';

class TrendingArtists extends Component {
  render() {
    return (
      <div className="side-content-item trending-artists">
        <div className="item-title">Suggested for you <span className="bullet">&#9679;</span></div>
        <div className="suggested-artist top">
          <div className="img" />
        </div>
        <div className="suggested-artist middle">
          <div className="img" />
        </div>
        <div className="suggested-artist bottom">
          <div className="img" />
        </div>
        {/* <div className="invite-friends-con">
          <img className="trophy" src="../../../../assets/images/trophy.svg" alt="trophy" />
          <div className="invite-text">Invite friends to earn pristeige</div>
        </div> */}
      </div>
    );
  }
}

export default TrendingArtists;
