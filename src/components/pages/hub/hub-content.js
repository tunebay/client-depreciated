import React, { Component } from 'react';

class HubContent extends Component {
  render() {
    return (
      <div className="hub-content">
        {this.props.children}
      </div>
    );
  }
}

export default HubContent;
