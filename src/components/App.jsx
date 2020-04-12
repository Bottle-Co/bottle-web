import React from 'react';
import Header from './header/Header';
import Logo from './logo/Logo';
import JumboTron from './jumbotron/JumboTron';
import Body from './body/Body';
import Footer from './footer/Footer';

const App = () => (
  <div>
    <Header>
      <Logo />
    </Header>
    <JumboTron />
    <Body />
    <Footer />
  </div>
);

export default App;
