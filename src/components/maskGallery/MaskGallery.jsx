import React, { Component } from 'react';
import ZoomImageCard from '../zoomImageCard/ZoomImageCard';
import Mask1 from '../../assets/Mask1.jpeg';
import Mask2 from '../../assets/Mask2.jpeg';
import Mask3 from '../../assets/Mask3.jpeg';

import './MaskGallery.scss';

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
            <button class="ui blue button">Buy</button>
          </div>
        </div>
        <button class="circular ui icon button btl-product-cancel" onClick={() => this.setState({ selectedProduct: null })}>
          <i class="icon cancel"></i>
        </button>
      </div>
    );
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
        {!this.state.selectedProduct && this.getAllProducts()}
        {this.state.selectedProduct && this.getProductFocusView()}
      </div>
    );
  }
}

export default MaskGallery;
