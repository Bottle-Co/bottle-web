import React from 'react';
import ShopCard from './shopCard/shopCard';
import './shop.scss';

import Mask1 from '../../assets/Mask1.png';
import Mask2 from '../../assets/masks/mask2.jpg';
import Mask3 from '../../assets/masks/mask3.jpg';
import Mask4 from '../../assets/masks/mask4.jpg';
import Mask5 from '../../assets/masks/mask5.jpg';
import Mask6 from '../../assets/masks/mask6.jpg';
import Mask7 from '../../assets/masks/mask7.jpg';

export const Shop = () => (
  <div>
    <div className="btl-shopcards container">
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
      <ShopCard image={Mask1} />
    </div>
  </div>
);
