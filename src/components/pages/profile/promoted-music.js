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
          price={0.99}
          artist={'Liam Bailey'}
        />
        <PromotedPlaylist
          artwork={'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/54/0a/77/540a770f-c8e6-2367-c35b-b0e3967947d1/source/1200x630bb.jpg'}
          title={'Every Where Is Somewhere'}
          price={6}
          artist={'K. Flay'}
        />
      </div>
    );
  }
}

export default PromotedMusic;
