import React from 'react';
import CountUp from 'react-countup';

import './Cost.scss';

const Cost = (props) => (
  <div className={`btl-cost ${props.className}`}>
    <CountUp end={499.99} duration={1.5} prefix="₹" decimals={2} />
  </div>
);

export default Cost;
