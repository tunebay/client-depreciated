import React, { Component } from 'react';

class Profile extends Component {
  render() {
    console.log(this.props.params);
    return (
      <div>
        <h1>{this.props.params.username}</h1>
      </div>
    );
  }
}

export default Profile;
