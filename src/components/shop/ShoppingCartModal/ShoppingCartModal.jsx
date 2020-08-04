import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import ShoppingCartModalItem from '../ShoppingCartModalItem/ShoppingCartModalItem';
import CountUp from 'react-countup';

import './ShoppingCartModal.scss';

const mapStateToProps = (state) => ({
  items: state.shoppingCartItems
});

class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      open: false
    };
  }

  getIdToItems = () => {
    const idToItems = {};

    this.props.items.forEach(item => {
      if (idToItems[item.id]) {
        idToItems[item.id].push(item);
      } else {
        idToItems[item.id] = [item];
      }
    });

    return idToItems;
  }

  getItems = () => {
    const idToItems = this.getIdToItems();
    const items = [];

    for(let key of Object.keys(idToItems)) {
      items.push(
        <ShoppingCartModalItem
          key={key}
          item={idToItems[key][0]}
          count={idToItems[key].length}
        />
      );
    }

    return items;
  }

  onCheckoutClick = () => {
    const idToItems = this.getIdToItems();
    const stripe = loadStripe('pk_test_51GreEtD8YQ9Kv8aMl8TubaNyh4BIb60hXhXzuDylgzvlhEub4bv76ZxufGdFbPLwkOYthGCdgxRM3pKwaYDSKsDT00eFSXjkX1');
    stripe.then(s => s.redirectToCheckout({
      lineItems: Object.keys(idToItems).map(key => ({
        price: idToItems[key][0].stripeId,
        quantity: idToItems[key].length
      })),
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
    let totalCost = 0;

    this.props.items.forEach(item => { totalCost += item.cost});

    return (
      <Modal
        size="mini"
        onClose={() => this.setState({ open: false})}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={this.props.trigger}
      >
        <Modal.Header>
          <div className="modal-header">
            {this.props.title}
            <CountUp
              className="modal-total-price"
              prefix="₹"
              end={totalCost}
              decimals={2}
              duration={0.5}
            />
          </div>
        </Modal.Header>
        <Modal.Content className="btl-item-container">
          {this.props.items.length === 0 && "Empty"}
          {this.getItems()}
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" disabled={this.props.items.length === 0} onClick={this.onCheckoutClick}>
            Checkout
          </Button>
          <Button color="black" onClick={() => this.setState({ open: false })}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  {}
)
(ShoppingCartModal);