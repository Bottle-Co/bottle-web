import React, { Component } from 'react';
import * as backgroundVideo from '../../assets/video.mp4'
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
          background: 'rgba(0, 0, 0, 0.5)'
        }}
        contentStyles={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80em',
          backgroundColor: 'rgba(0,0,0,0.35)'
        }}
        sectionStyles={{
            height: '80vh'
        }}
      >
        <div className="btl-jumbotron-description-container">
          <p className="btl-jumbotron-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet euismod odio, eget rutrum purus lobortis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <JumboButton />
        </div>
      </Section>
    );
  }
}

export default JumboTron;
