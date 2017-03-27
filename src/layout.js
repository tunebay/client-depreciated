import React, { Component } from 'react';
import Header from './components/header/header';
import Player from './components/player/player';

class Layout extends Component {
  renderHeader() {
    if (this.props.showHeader) {
      return <Header />;
    }
  }

  render() {
    let styles;
    if (this.props.showHeader) {
      styles = { marginTop: 50 };
    } else {
      styles = {};
    }
    return (
      <div style={styles}>
        {this.renderHeader()}
        {this.props.children}
        <Player />
      </div>
    );
  }
}

export default Layout;
