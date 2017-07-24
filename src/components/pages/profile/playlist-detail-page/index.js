import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions/profile-actions';

class PlaylistDeatilPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.playlist);
    // this.props.findPlaylist(this.props.match.params.playlist);
  }

  render() {
    // const { playlist } = this.props;
    // console.log('Detail page props', this.props);
    return (
      <div className="tab-display">Playlist page</div>
    );
  }
}

export default connect(null, actions)(PlaylistDeatilPage);
