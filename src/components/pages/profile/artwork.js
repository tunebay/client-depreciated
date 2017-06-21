import React, { Component } from 'react';
import './styles/artwork.scss';

class Artwork extends Component {
  render() {
    const { artwork } = this.props;
    if (!artwork) return <div className="artwork-placeholder" />;

    return (
      <div className="artwork">
        <img className="artwork-image" src={artwork} alt="artwork" />
      </div>
    );
  }
}

export default Artwork;
