import React, { Component } from 'react';
import "./shopCard.scss";
import BuyButton from '../../buyButton/buyButton';
import PreviewModal from '../../PreviewModal/previewModal';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

class ShopCard extends Component {
  render() {
    return (
      <div className="btl-shopcard">
        <div
          className="btl-shopcard-head"
          style={{
            background: `linear-gradient(135deg, ${this.props.headGradientStart || "#74C69D"} 8%, ${this.props.headGradientEnd || "#2D6A4F"} 83%)`
          }}
          onClick={this.props.onClick}
        >
          <PreviewModal
            title={this.props.product.name}
            image={this.props.product.image}
            trigger={
              <img src={this.props.product.image} width={250} height={250} />
            }
          />
        </div>
        <div className="btl-shopcard-body">
          <span className="btl-shopcard-title">{this.props.product.name}</span>
          <p className="btl-shopcard-description">
            {this.props.product.description}
          </p>
          <AddToCartButton
            product={this.props.product}
          />
        </div>
      </div>
    );
  }
}

export default ShopCard;
