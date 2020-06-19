import React from 'react';
import './ZoomImageCard.scss';

const ZoomImageCard = (props) => (
  <div className="btl-zoom-image-card">
    <img src={props.image} />
  </div>
);

export default ZoomImageCard;
