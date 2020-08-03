import React, { Component } from 'react';
import CountUp from 'react-countup';
import { connect } from 'react-redux';
import { addItem } from '../ShoppingCart/ShoppingCart.actions';

import './AddToCartButton.scss';

const mapStateToProps = () => ({})

class AddToCartButton extends Component {
  componentDidMount() {
    document.querySelectorAll('.add-to-cart-button').forEach(button => button.addEventListener('click', e => {
      if(!button.classList.contains('loading')) {
          button.classList.add('loading');
          setTimeout(() => button.classList.remove('loading'), 3700);
      }
      e.preventDefault();
    }));
  }

  onClick = () => {
    this.props.addItem(this.props.product);
  }

  render() {
    return (
      <div className="add-to-cart-button-container">
        <CountUp
            className="add-to-cart-button-price"
            prefix="₹"
            end={this.props.product.cost}
            decimals={2}
            duration={0.5}
          />
          <button class="add-to-cart-button" onClick={this.onClick}>
            <span>Add to cart</span>
            <div class="cart">
                <svg viewBox="0 0 36 26">
                    <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                    <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                </svg>
            </div>
          </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { addItem }
)(AddToCartButton);
