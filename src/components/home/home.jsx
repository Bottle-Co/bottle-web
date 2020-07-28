import React from 'react';
import Header from '../header/Header';
import JumboTron from '../jumbotron/JumboTron';
import About from '../about/about';
import Footer from '../footer/Footer';
import MaskGallery from '../maskGallery/MaskGallery';
import FeaturedProducts from '../featuredProducts/featuredProducts';

const Home = () => (
  <React.Fragment>
    <Header />
    <JumboTron />
    <About />
    <FeaturedProducts />
    <Footer />
  </React.Fragment>
);

export default Home;
