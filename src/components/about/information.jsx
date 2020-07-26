import React, { Component } from 'react';
import './information.scss';

class Information extends Component {
  render() {
    return (
      <div className="infromation-wrapper">
        {
          this.props.image &&
          this.props.image.position === "left" &&
          <img
            className="infomration-image"
            alt={this.props.image.alt}
            style={this.props.image.style}
            src={this.props.image.source}
            width={this.props.image.width}
            height={this.props.image.height}
          />
        }
        <div className="information">
          <h3 className="title">{this.props.title}</h3>
          <p className="description">{this.props.description}</p>
        </div>
        {
          this.props.image &&
          this.props.image.position === "right" &&
          <img
            className="infomration-image"
            alt={this.props.image.alt}
            style={this.props.image.style}
            src={this.props.image.source}
            width={this.props.image.width}
            height={this.props.image.height}
          />
        }
      </div>
    );
  }
}

export default Information;
