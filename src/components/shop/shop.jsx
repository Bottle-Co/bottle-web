import React from 'react';
import ShopCard from './shopCard/shopCard';
import './shop.scss';
import $ from 'jquery';

import Products from '../../shared/products';
import Header from '../header/Header';

export const Shop = () => (
  <div>
    <Header />
    <div class="ui active modal"></div>
    <div className="btl-shopcards container">
      {Products.map(product => (
        <ShopCard
          title={product.name}
          description={product.description}
          image={product.image}
          cost={product.cost}
        />
      ))}
    </div>
  </div>
);
