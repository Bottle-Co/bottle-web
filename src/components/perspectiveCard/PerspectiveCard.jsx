import React, { Component } from 'react';
import './PerspectiveCard.scss';

class PerspectiveCard extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.imageRef = React.createRef();

    this.state = {
      rotX: 0,
      rotY: 0,
      shineX: 0.5,
      shineY: 0.5
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

    this.setState({
      rotX: x * 2 - 1,
      rotY: y * 2 - 1,
      shineX: 100 - (x * 90),
      shineY: 100 - (y * 90)
    });
  }

  handleMouseLeave= () => {
    this.setState({ rotX: 0, rotY: 0, shineX: 0.5, shineY: 0.5 });
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
        className="card">
        <div
          style={this.imageStyle}
          ref={this.imageRef}
          className="card__container">
          <img
            className="card__image"
            src={this.props.imageUrl}
          />
          <div className="card__shine" style={this.shineStyle}/>
        </div>
        <h1 className="card__title">{ "Hello" }</h1>
      </div>
    );
  }
}

export default PerspectiveCard;
