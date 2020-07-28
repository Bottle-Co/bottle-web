import React from 'react';
import Header from '../header/Header';
import JumboTron from '../jumbotron/JumboTron';
import About from '../about/about';
import Footer from '../footer/Footer';

const Home = () => (
  <React.Fragment>
    <Header />
    <JumboTron />
    <About />
    <Footer />
  </React.Fragment>
);

export default Home;
