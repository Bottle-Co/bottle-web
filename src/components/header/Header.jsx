import React from 'react';
import './Header.scss';
import Logo from '../logo/Logo';
import Hamburger from '../hamburger/hamburger';

const Header = (props) => (
  <div className="btl-header">
    <Logo />
    <Hamburger />
  </div>
)

export default Header;