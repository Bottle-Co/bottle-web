import React from 'react';
import Video from './video/Video';
import Header from './header/Header';
import Logo from './logo/Logo';
import * as backgroundVideo from '../assets/video.mp4'
import Section from './section/Section';
import JumboButton from './jumboButton/JumboButton';
import Diamond from './diamond/Diamond';
import JumboTron from './jumbotron/JumboTron';

const App = () => (
  <div>
    <Header>
      <Logo />
    </Header>
    <JumboTron />
    <Section background={<div style={{ backgroundColor: 'white', height: '500em', width: '100%' }}>
      </div>}>
      <section>
        <Diamond rellaxSpeed={-4} />
        <Diamond background="#5000F1" width="80px" height="80px" margin="50em 0em 10em 100em" rellaxSpeed={-19} />
        </section>
    </Section>
  
  </div>
);

export default App;
