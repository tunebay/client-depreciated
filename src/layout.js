import React, { Component } from 'react';
import Header from './components/header/header';


class Layout extends Component {
  renderHeader() {
    if (this.props.showHeader) {
      return <Header />;
    }
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
