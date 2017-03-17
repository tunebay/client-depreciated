import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import Editor from 'react-avatar-editor';
import Icon from 'react-fontawesome';
import * as actions from '../../../../../actions/hub/uploaded-artwork-actions';
import '../../../../../styles/components/hub/upload.scss';


class UploadArtwork extends Component {
  onImageDrop(image) {
    console.log('IMAGE', image);
    this.props.uploadImageToS3(image[0]);
  }

  changeImageScale(e) {
    // console.log('IN CHANGE SCALE', parseFloat(e.target.value));
    this.props.setScale(parseFloat(e.target.value));
  }

  renderImage() {
    if (this.props.uploadedArtwork.location === null) {
      return (
        <div className="artwork-upload">
          <div className="add-artwork">Add arwork</div>
        </div>
      );
    }
    console.log(this.props.uploadedArtwork.locaiton);

    return (
      <Editor
        className="artwork-dragger"
        ref={(node) => { this.editor = node; }}
        image={this.props.uploadedArtwork.location}
        width={260}
        height={260}
        border={0}
        scale={this.props.uploadedArtwork.scale}
        onPositionChange={e => this.props.updatePosition(e)}
        position={this.props.uploadedArtwork.position}
      />
    );
  }

  renderImageEditor() {
    // console.log('EDITOR', this.editor);
    // const scaledImage = this.editor.getImageScaledToCanvas();
    // this.props.setScaledImage(scaledImage);
    if (!this.props.uploadedArtwork.location) return <div />;
    if (this.props.uploadPage !== 1) return <div />;
    return (
      <div className="artwork-editor">
        <div className="upload-slider-con">
          <Icon name="minus" className="fa-icon" />
          <input
            className="scale-slider"
            type="range"
            max={2}
            min={1}
            step={0.01}
            value={this.props.uploadedArtwork.scale}
            onChange={this.changeImageScale.bind(this)}
          />
          <Icon name="plus" className="fa-icon" />
        </div>
        <button
          type="button"
          className="choose-img-btn"
          onClick={() => this.dropzone.open()}
        >Replace image</button>
      </div>
    );
  }

  render() {
    return (
      <div className="artwork-section">
        <Dropzone
          ref={(node) => { this.dropzone = node; }}
          style={{ width: 260, height: 260 }}
          multiple={false}
          accept="image/*"
          disableClick={this.props.uploadedArtwork.disableClick}
          onDrop={this.onImageDrop.bind(this)}
        >
          {this.renderImage()}
        </Dropzone>
        {this.renderImageEditor()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ARTWORK:', state.uploadedArtwork);
  return {
    uploadedArtwork: state.uploadedArtwork
  };
};

export default connect(mapStateToProps, actions)(UploadArtwork);
