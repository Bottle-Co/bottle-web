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
            background: `linear-gradient(135deg, ${this.props.headGradientStart || "#54f38a"} 8%, ${this.props.headGradientEnd || "#0ba23e"} 83%)`
          }}
        >
          <img src={this.props.image} width={250} height={250} />
        </div>
        <div className="btl-shopcard-body">

        </div>
        <BuyButton />
      </div>
    );
  }
}

export default ShopCard;
