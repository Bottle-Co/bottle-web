import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Video.scss';

class Video extends Component {
  render() {
    return (
      <video className="btl-video rellax" width="100%" height="100%" loop muted autoPlay playsInline>
        <source src={this.props.source} type="video/mp4" />
      </video>
    )
  }
}

Video.propTypes = {
  source: PropTypes.string,
}

export default Video;
