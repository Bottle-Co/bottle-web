import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Logo from '../logo/Logo';
import JumboTron from '../jumbotron/JumboTron';
import NavigationLink from '../NavigationLink/NavigationLink';
import PerspectiveCard from '../perspectiveCard/PerspectiveCard';
import M from 'materialize-css';
import $ from 'jquery';

import Section from '../section/Section';
import forest from '../../assets/forest.mp4';
import water from '../../assets/water.mp4';
import environment from '../../assets/environment.mp4';
import MaskGallery from '../maskGallery/MaskGallery';

import Process from '../../assets/Process.png';
import './parallax.scss';
import Footer from '../footer/Footer';

class Parallax extends React.Component {
  
  isOnScreen(ele){

    var elementTop = ele.offset().top;
    var elementBottom = elementTop + ele.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  renderCards() {
    return (
      <div className="btl-CardContainer">
        <PerspectiveCard
          title="Save trees"
          description="Forests are the only livable habitat for a variety of species around the globe. Based on recent research 3.5 billion to 7 billion trees cut down each year."
          imageUrl={forest}
          deg={6} />
        <PerspectiveCard
          title="Save water"
          description="More than 8 million tons of plastic is dumped into our oceans every year. We have developed a 'disposable' lifestyle and estimates are that around 50% of plastic is used just once and thrown away."
          imageUrl={water}
          deg={6} />
        <PerspectiveCard
          title="Save air"
          description="Burning plastic and other wastes releases dangerous substances such as heavy metals, persistent organic pollutants (POP), and other toxic chemicals into the air and persist in ash waste residues. These chemicals have been linked to the development of asthma, endocrine disruption and cancer."
          imageUrl={environment}
          deg={6} />
      </div>
    );
  }

  componentDidMount() {
    $(window).scroll(() => {
      var viewportTop = $(window).scrollTop();
      const offSet = $('.btl-parallax-bottom').offset().top;
      console.log(viewportTop - offSet)
      // $('.btl-parallax-top').css({
      //   transform: `translate(0px, ${offSet * 0.5}px)`
      // })
      
      if (this.isOnScreen($('.btl-parallax-bottom'))) {
        $('.btl-parallax-bottom').css({
          transform: `translate(0px, ${(viewportTop - offSet) * 0.5}px)`
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header>
        <Logo />
        <div className="btl-NaviagtionLink-Container">
          <NavigationLink href="#about" label="About" />
          <NavigationLink href="#shop" label="Shop" />
          <NavigationLink href="#contact" label="Contact" />
        </div>
        </Header>
        <JumboTron />

        <div className="btl-parallax-top">
          <div id="about" className="btl-section-content">
            <div className="btl-mission-description">
              <div className="btl-mission-description-header">What we do</div>
              <p className="btl-mission-description-body">
                We, at Bottle&Co, believe not only in providing state-of-the-art solutions to modern day problems, but also
                in ensuring that our initiatives foster the restoration of ecological balance.
                We create sustainable, breathable and washable/reusable masks for everyone.
                Our products are manufactured by recycling single-use plastic products, such as bottles.
              </p>

              <img className="btl-mission-description-image" src={Process} />
            </div>
          </div>
        </div>

        <div className="btl-parallax-bottom">
          <div id="about" className="btl-section-content">
            <div className="btl-mission-description">
              <div className="btl-mission-description-header">Why we do</div>
              <p className="btl-mission-description-body">
                Covid-19 has kick-started a global race for Personal Protective Equipment (PPE), as various countries
                scramble to protect their frontline workers. Made up of non-biodegradable plastic, everyday masks add
                to the plastic waste in a significant manner.
              </p>

              {this.renderCards()}

              <p className="btl-mission-description-body">
                To counter this movement and ensure removal of plastic waste from our landfills, oceans, etc., we
                have committed ourselves to take that very waste off the streets, and convert it into a high utility product,
                i.e Face masks.
              </p>
            </div>
          </div>
        </div>

        <div className="btl-parallax-top">
          <div id="about" className="btl-section-content">
            <div className="btl-mission-description">
              <div className="btl-mission-description-header">How we do</div>

              <p className="btl-mission-description-body">
                During this covid-19 crisis, our face-masks act as the first line of defence. To ensure and
                strengthen safety standards, we have gone a mile ahead, and have curated a fabric with Anti-viral &
                Anti-bacterial properties.
              </p>

              <MaskGallery />

              <p className="btl-mission-description-body" style={{ marginTop: "1em" }}>
                Upon testing this fabric, we observed that it successfully neutralised 99.9% of any virus/flu
                (including Covid-19 or Coronavirus), within 10 minutes of contact. We have coupled this technology
                with our advanced recycling practice to create an optimal balance of safety, sustainability and welfare.
              </p>
            </div>
          </div>
        </div>
      
        <Footer />
      </React.Fragment>
    );
  }
}

export default Parallax;
