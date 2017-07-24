import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/artwork.scss';

class Artwork extends Component {
  render() {
    const { artwork, title, numberOfTracks, linkTo } = this.props;
    if (!artwork) {
      return (
        <Link to={{ pathname: linkTo, state: numberOfTracks }} className="artwork-placeholder">
          <svg className="artwork-placeholder" width="260px" height="260px" viewBox="0 0 260 260" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin none">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard" transform="translate(-54.000000, -65.000000)">
                <g id="Group-5" transform="translate(54.000000, 65.000000)">
                  <rect id="Rectangle-18" fill="#34BFED" x="0" y="0" width="260" height="260" rx="8" />
                  <text id="placeholder-text" fontFamily="AvenirNext-Bold, Avenir Next" fontSize="30" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">
                    <tspan x="130" y="139">{title}</tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      );
    }

    return (
      <Link to={linkTo} className="artwork">
        <div className="number-of-tracks">
          <div className="track-count">{numberOfTracks}</div>
          <div className="track-or-tracks">
            {numberOfTracks > 1 ? 'tracks' : 'track'}
          </div>
        </div>
        <img className="artwork-image" src={artwork} alt="artwork" />
      </Link>
    );
  }
}

export default Artwork;
