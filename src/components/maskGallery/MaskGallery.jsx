import React, { Component } from 'react';
import ZoomImageCard from '../zoomImageCard/ZoomImageCard';
import ProductCard from '../productCard/productCard';
import {loadStripe} from '@stripe/stripe-js';
import Mask1 from '../../assets/Mask1.jpeg';
import Mask2 from '../../assets/Mask2.jpeg';
import Mask3 from '../../assets/Mask3.jpeg';

import './MaskGallery.scss';
import Products, { MaskId } from '../../shared/products';

class MaskGallery extends Component {
  constructor() {
    super();

    this.state = {
      selectedProduct: null
    };
  }

  getAllProducts() {
    return (
      <React.Fragment>
        <ZoomImageCard id="1" image={Mask1} onClick={() => this.setState({ selectedProduct: 1 })} />
        <ZoomImageCard id="2" image={Mask2} onClick={() => this.setState({ selectedProduct: 2 })} />
        <ZoomImageCard id="3" image={Mask3} onClick={() => this.setState({ selectedProduct: 3 })} />
      </React.Fragment>
    )
  }

  getAllProductsV2() {
    return (
      <React.Fragment>
        <ProductCard
          id="1"
          baseColor="#95D5B2"
          headGradientStart="#95D5B2"
          headGradientEnd="#40916C"
          headTitle="Regular"
          headDescription="Soft fabric that covers entire face, non-woven fabric, light & breathable. 3-Ply, with a melt-blown polypropylene filtration layer."
          bodyTitle="Regular"
          bodyCaption="Ant-viral mask"
          isNew={true}
          onClick={() => this.setState({ selectedProduct: 1 })}
          defaultColor="584b8fbb-66f2-4b6b-b438-699fdf47499a"
          colorOptions={[
            {
              id: "584b8fbb-66f2-4b6b-b438-699fdf47499a",
              color: "#EEE",
              title: "White"
            },
            {
              id: "a3a3d1f6-9f27-4537-ab77-25a7c5da7f43",
              color: "#000",
              title: "Black"
            }
          ]}
          defaultQuantity="565dcd7a-00dc-4d9e-a2de-819ae44fc016"
          quantityOptions={[
            {
              id: "565dcd7a-00dc-4d9e-a2de-819ae44fc016",
              label: "Single mask"
            },
            {
              id: "cebd3e1a-aaa3-40ac-880c-88a03959a7b2",
              label: "Pack of 3"
            }
          ]}
          colorToQuantityToImage={{
            // Sustainability print
            '584b8fbb-66f2-4b6b-b438-699fdf47499a': {
              // Pack of 1
              '565dcd7a-00dc-4d9e-a2de-819ae44fc016': Products[MaskId.Regular.SustainabilityPrint].image,
              // Pack of 3
              'cebd3e1a-aaa3-40ac-880c-88a03959a7b2': Products[MaskId.Regular.SustainabilityPrint].image
            },
            // 3 ply black
            'a3a3d1f6-9f27-4537-ab77-25a7c5da7f43': {
              // Pack of 1
              '565dcd7a-00dc-4d9e-a2de-819ae44fc016': Products[MaskId.Regular.ThreePlyBlack].image,
              // Pack of 3
              'cebd3e1a-aaa3-40ac-880c-88a03959a7b2': Products[MaskId.Regular.ThreePlyBlack].image
            }
          }}
          colorToQuantityToCost={{
            // Sustainability print
            '584b8fbb-66f2-4b6b-b438-699fdf47499a': {
              // Pack of 1
              '565dcd7a-00dc-4d9e-a2de-819ae44fc016': Products[MaskId.Regular.SustainabilityPrint].cost,
              // Pack of 3
              'cebd3e1a-aaa3-40ac-880c-88a03959a7b2': Products[MaskId.Regular.SustainabilityPrint].packCost
            },
            // 3 ply black
            'a3a3d1f6-9f27-4537-ab77-25a7c5da7f43': {
              // Pack of 1
              '565dcd7a-00dc-4d9e-a2de-819ae44fc016': Products[MaskId.Regular.ThreePlyBlack].cost,
              // Pack of 3
              'cebd3e1a-aaa3-40ac-880c-88a03959a7b2': Products[MaskId.Regular.ThreePlyBlack].packCost
            }
          }}
          colorToQuantityToPriceId={{
            // Sustainability print
            '584b8fbb-66f2-4b6b-b438-699fdf47499a': {
              // Pack of 1
              '565dcd7a-00dc-4d9e-a2de-819ae44fc016': Products[MaskId.Regular.SustainabilityPrint].stripeId,
              // Pack of 3
              'cebd3e1a-aaa3-40ac-880c-88a03959a7b2': Products[MaskId.Regular.SustainabilityPrint].packStripeId
            },
            // 3 ply black
            'a3a3d1f6-9f27-4537-ab77-25a7c5da7f43': {
              // Pack of 1
              '565dcd7a-00dc-4d9e-a2de-819ae44fc016': Products[MaskId.Regular.ThreePlyBlack].stripeId,
              // Pack of 3
              'cebd3e1a-aaa3-40ac-880c-88a03959a7b2': Products[MaskId.Regular.ThreePlyBlack].packStripeId
            }
          }}
        />

        <ProductCard
          id="2"
          baseColor="#95D5B2"
          headGradientStart="#95D5B2"
          headGradientEnd="#2D6A4F"
          headTitle="Enviro"
          headDescription="Soft fabric that covers entire face, non-woven fabric, light & breathable. 3-Ply, with a melt-blown polypropylene filtration layer."
          bodyTitle="Enviro"
          bodyCaption="Ant-viral mask"
          isNew={true}
          onClick={() => this.setState({ selectedProduct: 2 })}
          defaultColor="584b8fbb-66f2-4b6b-b438-699fdf47499a"
          colorOptions={[
            {
              id: "584b8fbb-66f2-4b6b-b438-699fdf47499a",
              color: "#EEE",
              title: "White"
            },
            {
              id: "a3a3d1f6-9f27-4537-ab77-25a7c5da7f43",
              color: "#000",
              title: "Black"
            }
          ]}
          defaultQuantity="565dcd7a-00dc-4d9e-a2de-819ae44fc016"
          quantityOptions={[
            {
              id: "565dcd7a-00dc-4d9e-a2de-819ae44fc016",
              label: "Single mask"
            },
            {
              id: "cebd3e1a-aaa3-40ac-880c-88a03959a7b2",
              label: "Pack of 3"
            }
          ]}
        />

        <ProductCard
          id="3"
          baseColor="#95D5B2"
          headGradientStart="#95D5B2"
          headGradientEnd="#081C15"
          headTitle="N95 Hybrid"
          headDescription="Soft fabric that covers entire face, non-woven fabric, light & breathable. 3-Ply, with a melt-blown polypropylene filtration layer."
          bodyTitle="N95 Hybrid"
          bodyCaption="Ant-viral mask"
          isNew={true}
          onClick={() => this.setState({ selectedProduct: 3 })}
          defaultColor="584b8fbb-66f2-4b6b-b438-699fdf47499a"
          colorOptions={[
            {
              id: "584b8fbb-66f2-4b6b-b438-699fdf47499a",
              color: "#EEE",
              title: "White"
            },
            {
              id: "a3a3d1f6-9f27-4537-ab77-25a7c5da7f43",
              color: "#000",
              title: "Black"
            }
          ]}
          defaultQuantity="565dcd7a-00dc-4d9e-a2de-819ae44fc016"
          quantityOptions={[
            {
              id: "565dcd7a-00dc-4d9e-a2de-819ae44fc016",
              label: "Single mask"
            },
            {
              id: "cebd3e1a-aaa3-40ac-880c-88a03959a7b2",
              label: "Pack of 3"
            }
          ]}
        />
      </React.Fragment>
    )
  }

  getProductFocusView() {
    let image;

    switch(this.state.selectedProduct) {
      case 1:
        image = Mask1;
        break;

      case 2:
        image = Mask2;
        break;

      case 3:
        image = Mask3;
        break;

      default:
        image = null;
        break;
    }

    return (
      <div className="btl-product-focus-container">
        <div className="btl-product-content-container">
          <ZoomImageCard image={image} />
          <div className="btl-product-content">
            <div className="btl-product-content-inner">
              {this.getFocusHeader()}
              {this.getFocusBullets()}
            </div>
            <button class="ui blue button" id={`checkout-button-${this.getStripePriceId()}`} onClick={this.getBuyOnClick()}>Buy</button>
          </div>
        </div>
        <button class="circular ui icon button btl-product-cancel" onClick={() => this.setState({ selectedProduct: null })}>
          <i class="icon cancel"></i>
        </button>
      </div>
    );
  }

  getStripePriceId() {
    switch (this.state.selectedProduct) {
      case 1:
        return 'price_1H1HOtD8YQ9Kv8aM5mXxskDP';

      case 2:
        return 'price_1H1HOID8YQ9Kv8aM2Y7EZyCa';

      case 3:
        return 'price_1GuGY0D8YQ9Kv8aMTyrgxSW7';

      default:
        return null;
    }
  }

  getBuyOnClick() {
    let price = this.getStripePriceId();

    return () => {
      var stripe = loadStripe('pk_test_51GreEtD8YQ9Kv8aMl8TubaNyh4BIb60hXhXzuDylgzvlhEub4bv76ZxufGdFbPLwkOYthGCdgxRM3pKwaYDSKsDT00eFSXjkX1');
      stripe.then(s => s.redirectToCheckout({
        lineItems: [{ price , quantity: 1}],
        mode: 'payment',
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: 'https://your-website.com/success',
        cancelUrl: 'https://your-website.com/canceled',
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
  }

  getFocusHeader() {
    switch(this.state.selectedProduct) {
      case 1:
        return <h2>N95 Mask</h2>;

      case 2:
        return <h2>Anti-Viral Mask</h2>;

      case 3:
        return <h2>Washable Mask</h2>;

      default:
        return null;
    }
  }

  getFocusBullets() {
    switch(this.state.selectedProduct) {
      case 1:
        return (
          <ul>
            <li>Above 95% of filteration efficiency</li>
            <li>3 layers of protection</li>
            <li>High quality facial mouth cover</li>
            <li>Odourless, non-irritant & non-allergic</li>
            <li>Ease of breathing</li>
            <li>Easily washable (upto 20 washes)</li>
            <li>ISO 9001:2015 certified</li>
          </ul>
        );

      case 2:
        return (
          <ul>
            <li>Above 95% of filteration efficiency</li>
            <li>3 layers of protection</li>
            <li>High quality facial mouth cover</li>
            <li>Odourless, non-irritant & non-allergic</li>
            <li>Ease of breathing</li>
            <li>Easily washable (upto 20 washes)</li>
          </ul>
        );

      case 3:
        return (
          <ul>
            <li>Above 95% of filteration efficiency</li>
            <li>3 layers of protection</li>
            <li>High quality facial mouth cover</li>
            <li>Odourless, non-irritant & non-allergic</li>
            <li>Ease of breathing</li>
            <li>Easily washable (upto 20 washes)</li>
            <li>ISO 9001:2015 certified</li>
          </ul>
        );
      default:
        return null;
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="btl-mask-gallery">
        {!this.state.selectedProduct && this.getAllProductsV2()}
        {/* {this.state.selectedProduct && this.getProductFocusView()} */}
      </div>
    );
  }
}

export default MaskGallery;
