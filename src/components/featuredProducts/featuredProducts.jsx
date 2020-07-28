import React from 'react';
import MaskGallery from '../maskGallery/MaskGallery';
import './featuredProducts.scss';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => (
  <div className="btl-featuredproducts container">
    <h3 className="btl-featuredproducts-title">Featured products</h3>
    <MaskGallery />
    <Link className="btl-featuredproducts-link" to="/shop" >See entire catalogue</Link>
  </div>
);

export default FeaturedProducts;
