import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';

class WaveForm extends Component {
  handlePosChange(e) {
    console.log('POS CHANGE', e);
  }

  render() {
    console.log(this.props);
    const options = {
      waveColor: '#A5B5C1', // #C9D2D9
      progressColor: '#0089EE',
      barWidth: 2.3,
      barRadius: true,
      height: 80,
      // hideScrollBar: true,
      normalize: false,
      fillParent: true,
      // barHeight: 2,
      minPxPerSec: 50,
      autoCenter: true,
      cursorColor: '#fff',
      // volume: 0
    };

    // const backgroundStyles = {
    //   backgroundImage: `url(${this.props.background})`,
    // };

    return (
      <div>
        <div className="waveform-con" >
          <Wavesurfer
            audioFile={this.props.audioFile}
            pos={this.props.position}
            onPosChange={this.handlePosChange.bind(this)}
            playing={false}
            options={options}
            volume={0}
          />
        </div>
        <div id="waveform-overlay" />
      </div>
    );
  }
}

export default WaveForm;
