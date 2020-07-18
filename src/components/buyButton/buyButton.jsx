import React, { Component } from 'react';
import './buyButton.scss';

export default class BuyButton extends Component {
  render() {
    return (
      <div className="btl-buy-container">
          <div className="btl-buy-price">₹ 159</div>
          <button className="btl-buy">
            👌 <b>Buy</b>
          </button>
      </div>
    )
  }
}
