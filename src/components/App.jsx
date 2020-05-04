import React from 'react';
import Header from './header/Header';
import Logo from './logo/Logo';
import JumboTron from './jumbotron/JumboTron';
import Body from './body/Body';
import Footer from './footer/Footer';
import $ from 'jquery';

import './App.scss';
import NavigationLink from './NavigationLink/NavigationLink';

const App = () => (
  <div className="btl-App">
    <Header>
      <Logo />
      <div className="btl-NaviagtionLink-Container">
        <NavigationLink href="#about" label="About" />
        <NavigationLink href="#team" label="Team" />
        <NavigationLink href="#contact" label="Contact" />
      </div>
    </Header>
    <JumboTron />
    <Body />
    <Footer />
  </div>
);

export default App;
