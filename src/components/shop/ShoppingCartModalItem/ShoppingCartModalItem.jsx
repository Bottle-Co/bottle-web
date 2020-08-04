import React, { Component } from 'react';
import CountUp from 'react-countup';
import { connect } from 'react-redux';
import { removeItem } from '../ShoppingCart/ShoppingCart.actions';

import './ShoppingCartModalItem.scss';

const mapStateToProps = () => ({});
class ShoppingCartModalItem extends Component {
  getCount() {
    return (
      <div className="item-count">
        <span>{this.props.count}</span>
      </div>
    );
  }

  render() {
    console.log(this.props.item)
    return (
      <div className="shopping-cart-modal-item">
        {this.props.count > 1 && this.getCount()}
        <div className="shopping-cart-modal-item-head">
          <div className="shopping-cart-modal-item-title">
            {this.props.item.name}
          </div>
          <a
            className="shopping-cart-modal-item-delete"
            onClick={() => this.props.removeItem(this.props.item)}>
              Delete
          </a>
        </div>
        <div className="shopping-cart-modal-item-body">
          <img
            alt={this.props.item.name}
            className="shopping-cart-modal-item-image"
            src={this.props.item.image}
          />
          <CountUp
            className="shopping-cart-modal-item-price"
            prefix="₹"
            end={this.props.item.cost}
            decimals={2}
            duration={0.5}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { removeItem }
)(ShoppingCartModalItem);
