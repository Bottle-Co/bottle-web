import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './productCard.scss';
import Mask1 from '../../assets/Mask1.png'
import Logo from '../../assets/BottleLogoT.png';

//https://s5.postimg.cc/wy79025cz/nike_Logo_White.png
//https://s5.postimg.cc/j9r8yf9gn/sws1.png
class ProductCard extends Component {


  render() {
    return (
      <div className="btl-productcard-container" onClick={this.props.onClick}>
        <div className="btl-productcard-card">
          {/* HEAD */}
          <div
            className="btl-productcard-card-head"
            style={{
              background: this.props.baseColor || "#fa782e",
              background: `linear-gradient(135deg, ${this.props.headGradientStart || "#fa782e"} 8%, ${this.props.headGradientEnd || "#c82930"} 83%)`
            }}
          >
            <img src={Logo} alt="logo" className="btl-productcard-logo" />
            <img src={Mask1} alt="Shoe" className="btl-productcard-product" />

            <div className="btl-productcard-details">
              <h2>{this.props.headTitle}</h2> {this.props.headDescription}
            </div>

            <span className="btl-productcard-back-text">
              {this.props.backText}
            </span>
          </div>

          {/* BODY */}
          <div className="btl-productcard-card-body">
            <span className="btl-productcard-product-title">
              <b>{this.props.bodyTitle}</b>
                {this.props.isNew && (
                  <span className="btl-productcard-badge">
                    New
                  </span>
                )}
            </span>

            <span className="btl-productcard-product-caption">
              {this.props.bodyCaption}
            </span>

            <ul className="btl-productcard-product-properties">
              <li>Above 95% of filteration efficiency</li>
              <li>3 layers of protection</li>
              <li>High quality facial mouth cover</li>
              <li>Odourless, non-irritant & non-allergic</li>
              <li>Ease of breathing</li>
              <li>Easily washable (upto 20 washes)</li>
              <li>ISO 9001:2015 certified</li>
            </ul>

            <span className="btl-productcard-product-price">
              ₹<b>159</b>
            </span>

          </div>
        </div>
      </div> 
    );
  }
}

ProductCard.protoTypes = {
  onClick: PropTypes.func,
  baseColor: PropTypes.string,
  headgradientStart: PropTypes.string,
  headgradientEnd: PropTypes.string,
  backText: PropTypes.string,
  headTitle: PropTypes.string,
  headDescription: PropTypes.string,
  bodyTitle: PropTypes.string,
  bodyCaption: PropTypes.string,
  isNew: PropTypes.bool,
  price: PropTypes.number
}

export default ProductCard;
