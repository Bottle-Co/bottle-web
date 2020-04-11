import React from 'react';
import './Header.scss';

const Header = (props) => (
  <div className="btl-header">
    {props.children}
  </div>
)

export default Header;