import React from 'react';
import './ZoomImageCard.scss';

const ZoomImageCard = (props) => (
  <button className="btl-zoom-image-card" onClick={props.onClick}>
    <img src={props.image} />
  </button>
)

export default ZoomImageCard;
