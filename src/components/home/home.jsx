import React from 'react';
import Header from '../header/Header';
import JumboTron from '../jumbotron/JumboTron';
import About from '../about/about';

const Home = () => (
  <React.Fragment>
    <Header />
    <JumboTron />
    <About />
  </React.Fragment>
);

export default Home;
