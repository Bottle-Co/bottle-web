import React, { Component } from 'react';
import './PerspectiveCard.scss';

class PerspectiveCard extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.imageRef = React.createRef();
    this.videoRef = React.createRef();

    this.state = {
      rotX: 0,
      rotY: 0,
      shineX: 0.5,
      shineY: 0.5,
      pause: true
    };

    this.initialize();
  }

  initialize() {
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

  render() {
    this.imageStyle = {
      transform: `rotate3d(${this.state.rotX}, ${this.state.rotY}, 0, ${this.props.deg}deg)`,
    };
    
    this.shineStyle = {
      background: `radial-gradient(at ${this.state.shineX}% ${this.state.shineY}%, rgba(255, 255, 255, 0.5), transparent)`,
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
          <div className="btl-CardShine" style={this.shineStyle}/>
        </div>
        {/* <h1 className="btl_CardTitle">{ "Save forests" }</h1> */}
      </div>
    );
  }
}

export default PerspectiveCard;
