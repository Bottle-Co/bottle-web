import React from 'react';
import ShopCard from './shopCard/shopCard';
import './shop.scss';
import $ from 'jquery';

import Products from '../../shared/products';
import Header from '../header/Header';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import Footer from '../footer/Footer';

export const Shop = () => (
  <React.Fragment>
    <Header />
    <div class="ui active modal"></div>
    <div className="btl-shopcards container">
      {Products.map(product => (
        <ShopCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
    <ShoppingCart />
    {/* <Footer /> */}
  </React.Fragment>
);
