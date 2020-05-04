import React, { Component } from 'react';
import Bounce from 'bounce.js';

import './PerspectiveCard.scss';

class PerspectiveCard extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.imageRef = React.createRef();
    this.videoRef = React.createRef();

    this.initializeBounce();

    this.state = {
      rotX: 0,
      rotY: 0,
      shineX: 0.5,
      shineY: 0.5,
      pause: true
    };
  }

  initializeBounce() {
    const splatToLeft = new Bounce();

    splatToLeft
      .translate({
        from: { x: 0, y: 0 },
        to: { x: 0, y: 0},
        easing: 'bounce',
        duration: 600,
        bounces: 4,
        stiffness: 4,
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 0.1, y: 1.5 },
        easing: 'sway',
        duration: 800,
        bounces: 4,
        stiffness: 2,
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 3, y: 1 },
        easing: 'sway',
        duration: 300,
        bounces: 4,
        stiffness: 3,
      });

      splatToLeft.define('splat-to-left');
  }

  componentDidMount() {
    this.cardRef.current.addEventListener('mousemove', this.handleMouseMove);
    this.cardRef.current.addEventListener('mouseleave', this.handleMouseLeave);
      // return () => {
      //   this.cardRef.current.removeEventListener('mousemove', this.handleMouseMove);
      //   this.cardRef.current.removeEventListener('mouseleave', this.handleMouseLeave);
      // }
  }
  componentDidUpdate() {
    // return () => {
    //   this.cardRef.current.removeEventListener('mousemove', this.handleMouseMove);
    //   this.cardRef.current.removeEventListener('mouseleave', this.handleMouseLeave);
    // }
  }

  handleMouseMove = (evt) => {
    const { clientX, clientY } = evt;
    const { top, left, width, height } = this.cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    console.log(this.videoRef)
    this.videoRef.current.play();

    this.setState({
      rotX: x * 2 - 1,
      rotY: y * 2 - 1,
      shineX: 100 - (x * 90),
      shineY: 100 - (y * 90),
      pause: false
    });
  }

  handleMouseLeave= (evt) => {
    this.videoRef.current.pause();
    this.setState({ rotX: 0, rotY: 0, shineX: 0.5, shineY: 0.5, pause: true });
  }

  renderDescription() {
    return (
      <div className="btl-CardDescription">
        {this.props.description}
      </div>
    )
  }

  render() {
    this.imageStyle = {
      transform: `rotate3d(${this.state.rotX}, ${this.state.rotY}, 0, ${this.props.deg}deg)`,
    };
    
    this.shineStyle = {
      background: `radial-gradient(at ${this.state.shineX}% ${this.state.shineY}%, rgba(255, 255, 255, 0.1), transparent)`,
      boxShadow: this.state.pause ? null : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    return (
      <div
        ref={this.cardRef}
        className="btl-Card">
        <div
          style={this.imageStyle}
          ref={this.imageRef}
        >
          <video
            ref={this.videoRef}
            className="btl-CardImage"
            src={this.props.imageUrl}
            loop muted playsInline
          >
            <source src={this.props.imageUrl} type="video/mp4"></source>
          </video>
          <div className="btl-CardContent">
            <h1 className="btl-CardTitle">{ this.props.title }</h1>
            { !this.state.pause && this.renderDescription() }
          </div>
          <div className="btl-CardShine" style={this.shineStyle}/>
        </div>
      </div>
    );
  }
}

export default PerspectiveCard;
