import React, { Component } from 'react';
import PromotedPlaylist from './promoted-playlist';

import './styles/promoted-music.scss';

class PromotedMusic extends Component {
  render() {
    return (
      <div className="side-content-item promoted-music">
        <div className="item-title">Promoted music <span className="bullet">&#9679;</span></div>
        <PromotedPlaylist
          artwork={'https://i0.wp.com/stagedoor.fm/wp-content/uploads/2016/12/Liam-Bailey-Love-My-Neighbour.jpeg?fit=500%2C500'}
          title={'Love My Neighbour'}
          price={1.50}
          artist={'Liam Bailey'}
        />
      </div>
    );
  }
}

export default PromotedMusic;
