import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Section from '../section/Section';
import Recycle from '../../assets/recycle.svg';
import SaveWater from '../../assets/saveWater.svg';
import SaveForests from '../../assets/saveForests.svg';
import forest from '../../assets/forest.mp4';
import water from '../../assets/water.mp4';
import environment from '../../assets/environment.mp4';

import './Body.scss';
import PerspectiveCard from '../perspectiveCard/PerspectiveCard';

class Body extends Component {
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
        <PerspectiveCard title="Save air" imageUrl={environment} deg={6} />
      </div>
    );
  }

  render() {
    return (
      <Section
        sectionStyles={{
          height: '200vh'
        }}
      >
        <div id="about" className="ui container btl-cardContainer">
          {this.renderCards()}
        </div>
        <Divider className="btl-Divider" variant="middle" light />
      </Section>
    )
  }
}

export default Body;
