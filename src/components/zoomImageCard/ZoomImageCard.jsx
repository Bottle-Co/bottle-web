import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import './ZoomImageCard.scss';

// const ZoomImageCard = (props) => (
//   <button onClick={() => {
//     var stripe = loadStripe('pk_test_51GreEtD8YQ9Kv8aMl8TubaNyh4BIb60hXhXzuDylgzvlhEub4bv76ZxufGdFbPLwkOYthGCdgxRM3pKwaYDSKsDT00eFSXjkX1');
//     stripe.then(s => s.redirectToCheckout({
//       lineItems: [{price: 'price_1GuGY0D8YQ9Kv8aMTyrgxSW7', quantity: 1}],
//       mode: 'payment',
//       // Do not rely on the redirect to the successUrl for fulfilling
//       // purchases, customers may not always reach the success_url after
//       // a successful payment.
//       // Instead use one of the strategies described in
//       // https://stripe.com/docs/payments/checkout/fulfillment
//       successUrl: 'https://your-website.com/success',
//       cancelUrl: 'https://your-website.com/canceled',
//     })
//     .then(function (result) {
//       if (result.error) {
//         // If `redirectToCheckout` fails due to a browser or network
//         // error, display the localized error message to your customer.
//         var displayError = document.getElementById('error-message');
//         displayError.textContent = result.error.message;
//       }
//     }))
//   }}className="btl-zoom-image-card" id="checkout-button-price_1GuGY0D8YQ9Kv8aMTyrgxSW7" role="link">
//     <img src={props.image} />
//   </button>
// );

const ZoomImageCard = (props) => (
  <button className="btl-zoom-image-card" onClick={props.onClick}>
    <img src={props.image} />
  </button>
)

export default ZoomImageCard;
