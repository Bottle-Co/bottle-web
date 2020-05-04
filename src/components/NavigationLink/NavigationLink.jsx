import React from 'react';

import './NavigationLink.scss';

const NavigationLink = (props) => (
  <a href={props.href} className="btl-NavigationLink" onClick={props.onClick}>{props.label}</a>
);

export default NavigationLink;
