import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Editor from 'react-avatar-editor';
import '../../../../styles/components/hub/upload.scss';


class UploadArtwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      disableClick: false,
      scale: 1.2
    };
  }

  onImageDrop(image) {
    this.setState({ image, disableClick: true });
  }

  changeImageScale(e) {
    console.log('IN CHANGE SCALE', parseFloat(e.target.value));
    this.setState({ scale: parseFloat(e.target.value) });
  }

  renderImage() {
    if (this.state.image === null) {
      return (
        <div className="artwork-upload">
          <div className="add-artwork">Add arwork</div>
        </div>
      );
    }

    return (
      <Editor
        className="artwork-dragger"
        ref={(node) => { this.editor = node; }}
        image={this.state.image[0].preview}
        width={250}
        height={250}
        border={0}
        scale={this.state.scale}
      />
    );
  }

  renderImageEditor() {
    if (this.state.image === null) return <div />;
    return (
      <div className="artwork-editor">
        <input
          className="scale-slider"
          type="range"
          max={2}
          min={1}
          step={0.01}
          value={this.state.scale}
          onChange={this.changeImageScale.bind(this)}
        />
        <button
          onClick={() => this.dropzone.open()}
        >Choose image</button>
      </div>
    );
  }

  render() {
    return (
      <div className="artwork-section">
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          style={{ width: 250, height: 250 }}
          multiple={false}
          accept="image/*"
          disableClick={this.state.disableClick}
          onDrop={this.onImageDrop.bind(this)}
        >
          {this.renderImage()}
        </Dropzone>
        {this.renderImageEditor()}
      </div>
    );
  }
}

export default UploadArtwork;
