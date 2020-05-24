import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductBrowser.scss';

class ProductBrowser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autoScroll: true,
      currentImage: this.props.images ? this.props.images[0] : null,
    };
  }

  getSelector(img) {
    return (
      <img className="btl-productbrowser-selector-image" alt="selector" src={img} />
    );
  }

  getSelectors() {
    return this.props.images.map(img => this.getSelector(img));
  }

  render() {
    return (
      <div className="btl-productbrowser">
        <img className="btl-productbrowser-main"
          alt="product"
          src={this.state.currentImage}
        />
        <div className="btl-productbrowser-all">
          {this.getSelectors()}
        </div>
      </div>
    );
  }
}

ProductBrowser.propTypes = {
  scrollDelay: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.object),
}

export default ProductBrowser;
