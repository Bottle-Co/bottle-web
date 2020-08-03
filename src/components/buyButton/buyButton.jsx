import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CountUp from 'react-countup';

import './buyButton.scss';

export default class BuyButton extends Component {

  constructor(props) {
    super(props);

    this.state = {
      priceId: this.props.priceId
    };
  }

  getBuyOnClick = () => {
    var stripe = loadStripe('pk_test_51GreEtD8YQ9Kv8aMl8TubaNyh4BIb60hXhXzuDylgzvlhEub4bv76ZxufGdFbPLwkOYthGCdgxRM3pKwaYDSKsDT00eFSXjkX1');
      stripe.then(s => s.redirectToCheckout({
        lineItems: [{ price: this.state.priceId , quantity: 1}],
        mode: 'payment',
        shippingAddressCollection: { allowedCountries: ['IN'] },
        billingAddressCollection: 'required',

        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://bottle-co.github.io/bottle-web/#/success',
        cancelUrl: 'https://bottle-co.github.io/bottle-web/#/',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      }));
  }

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
          <button className="btl-buy" onClick={this.getBuyOnClick}>
            👌 <b>Buy</b>
          </button>
      </div>
    )
  }
}
