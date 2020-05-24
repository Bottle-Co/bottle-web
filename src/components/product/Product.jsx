import React from 'react';

import Model1 from '../../assets/model1.png';
import Model2 from '../../assets/model2.png';
import './Product.scss';
import Header from '../header/Header';
import Logo from '../logo/Logo';
import ColorPicker from './colorPicker/ColorPicker';
import Cost from './cost/Cost';
import SizePicker from './sizePicker/SizePicker';
import CountUp from 'react-countup';
import ProductBrowser from './productBrowser/ProductBrowser';

const Product = () => (
  <div>
    <Header>
      <Logo color="black" />
    </Header>
    <div className="btl-product-container">
      <ProductBrowser images={[Model1, Model2]} />
      <div className="btl-product-config">
        <ColorPicker colors={["black", "#394868", "#2f3d3b", "white"]} />
        <Cost className="btl-product-cost" />
        <div className="btl-product-tree">
          We will plant <CountUp end={10} duration={1.5} useEasing={false} /> 🌳 trees upon purchase.
        </div>
        <div className="btl-product-description">
          Our Official Premium Weight Crew—rebuilt in a stylish relaxed fit. Made entirely from sustainable materials our Design team gave this style a dropped shoulder, a wider ribbed collar, longer sleeves, a wider body, while keeping the same length as the other Heavyweight tees. The dense, durable, 6.2 oz cotton has a structured drape that elevates the form of a simple sleeve roll. 
        </div>
        <SizePicker />
      </div>
    </div>
  </div>
);

export default Product;
