import React, { Component } from 'react';
import "./shopCard.scss";
import BuyButton from '../../buyButton/buyButton';

class ShopCard extends Component {
  render() {
    return (
      <div className="btl-shopcard">
        <div
          className="btl-shopcard-head"
          style={{
            background: `linear-gradient(135deg, ${this.props.headGradientStart || "#74C69D"} 8%, ${this.props.headGradientEnd || "#2D6A4F"} 83%)`
          }}
          onClick={this.props.onClick}
        >
          <img src={this.props.image} width={250} height={250} />
        </div>
        <div className="btl-shopcard-body">
          <span className="btl-shopcard-title">{this.props.title}</span>
          <p className="btl-shopcard-description">
            {this.props.description}
          </p>
          <BuyButton cost={this.props.cost}/>
        </div>
      </div>
    );
  }
}

export default ShopCard;
