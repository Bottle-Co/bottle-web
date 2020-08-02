import React, { Component } from 'react';
import './buyButton.scss';
import CountUp from 'react-countup';

export default class BuyButton extends Component {
  render() {
    return (
      <div className="btl-buy-container">
          <CountUp
            className="btl-buy-price"
            prefix="₹"
            end={this.props.cost}
            decimals={2}
            duration={0.5}
          />
          <button className="btl-buy">
            👌 <b>Buy</b>
          </button>
      </div>
    )
  }
}
