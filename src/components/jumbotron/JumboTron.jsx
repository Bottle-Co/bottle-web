import React, { Component } from 'react';
import * as backgroundVideo from '../../assets/life.mp4'
import Section from '../section/Section';
import JumboButton from '../jumboButton/JumboButton';
import Video from '../video/Video';
import './JumboTron.scss';

class JumboTron extends Component {
  render() {
    return (
      <Section
        background={<Video source={backgroundVideo} />}
        backgroundStyles={{
          height: '100%',
        }}
        contentStyles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.35)'
        }}
        sectionStyles={{
            height: '100vh',
        }}
      >
        <div className="btl-jumbotron-description-container">
          <p className="btl-jumbotron-description">
            We make innovative clothes using single-use plastic bottles and sustainable fabrics.
          </p>
          <JumboButton />
        </div>
      </Section>
    );
  }
}

export default JumboTron;
