import React, { Component } from 'react';
import Bounce from 'bounce.js';
import PropTypes from 'prop-types';
import './productCard.scss';
import Mask1 from '../../assets/Mask1.png'
import Logo from '../../assets/BottleLogoT.png';
import StylePicker from '../stylePicker/stylePicker';
import BuyButton from '../buyButton/buyButton';
import QuantityPicker from '../quantityPicker/quantityPicker';
import $ from 'jquery';
import PreviewModal from '../PreviewModal/previewModal';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.initializeJellyBounce();

    this.state = {
      isFlipped: false,
      colorId: this.props.defaultColor,
      quantityId: this.props.defaultQuantity
    };
  }

  initializeJellyBounce() {
    const jelly = new Bounce();

    jelly
    .scale({
      from: { x: 1, y: 1 },
      to: { x: 0.1, y: 2.3 },
      easing: "sway",
      duration: 800,
      delay: 65,
      stiffness: 2
    })
    .scale({
      from: { x: 1, y: 1},
      to: { x: 5, y: 1 },
      easing: "sway",
      duration: 300,
      delay: 30,
    })

    jelly.define("selectedImageJellyAnimation");
  }

  onClick = () => {
    if (!this.state.isFlipped) {
      this.setState({ isFlipped: !this.state.isFlipped });
    }

    // TODO: Do props onClick
  }

  renderFrontCardHead = () => {
    return (
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
    );
  }

  renderFrontCardBody = () => {
    return (
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
    );
  }

  renderBackCardHead = () => {
    return (
      <div
        className="btl-productcard-card-head btl-productcard-card-head-back"
        style={{
          background: this.props.baseColor || "#fa782e",
          background: `linear-gradient(135deg, ${this.props.headGradientStart || "#fa782e"} 8%, ${this.props.headGradientEnd || "#c82930"} 83%)`
        }}
      >
        <i class="angle right icon" onClick={() => this.setState({ isFlipped: false })}></i>
        <PreviewModal
          title="Mask"
          image={this.props.colorToQuantityToImage[this.state.colorId][this.state.quantityId]}
          trigger={
            <img
              src={this.props.colorToQuantityToImage[this.state.colorId][this.state.quantityId]}
            />
          }
        />
      </div>
    );
  }

  renderBackCardBody = () => {
    return (
      <div className="btl-productcard-card-body btl-productcard-back">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div>
            <StylePicker
              styles={this.props.colorOptions}
              onChange={(newColorId) => this.setState({ colorId: newColorId })}
            />
            <QuantityPicker
              options={this.props.quantityOptions}
              onChange={(newQuantityId) => this.setState({ quantityId: newQuantityId })}
            />
          </div>
          <BuyButton cost={this.props.colorToQuantityToCost[this.state.colorId][this.state.quantityId]}/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="btl-productcard-container"onClick={this.onClick}>
        <div className={`btl-productcard-card ${this.state.isFlipped && "btl-productcard-flipped"}`}>
          {!this.state.isFlipped && this.renderFrontCardHead()}
          {!this.state.isFlipped && this.renderFrontCardBody()}
          {this.state.isFlipped && this.renderBackCardHead()}
          {this.state.isFlipped && this.renderBackCardBody()}
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
