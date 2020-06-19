import React, { Component } from 'react';
import Section from '../section/Section';
// import forest from '../../assets/forest.mp4';
// import water from '../../assets/water.mp4';
// import environment from '../../assets/environment.mp4';
// import Badge1 from '../../assets/Mask1.png';
// import Badge2 from '../../assets/Badge2.png';
// import Badge3 from '../../assets/Badge3.png';
import Mask1 from '../../assets/Mask1.jpeg';
import Mask2 from '../../assets/Mask2.jpeg';
import Mask3 from '../../assets/Mask3.jpeg';

import './Body.scss';
import PerspectiveCard from '../perspectiveCard/PerspectiveCard';
import Team from '../team/Team';
import ZoomImageCard from '../zoomImageCard/ZoomImageCard';

class Body extends Component {
  // renderCards() {
  //   return (
  //     <div className="btl-CardContainer">
  //       <PerspectiveCard
  //         title="Save trees"
  //         description="Forests are the only livable habitat for a variety of species around the globe. Based on recent research 3.5 billion to 7 billion trees cut down each year."
  //         imageUrl={forest}
  //         deg={6} />
  //       <PerspectiveCard
  //         title="Save water"
  //         description="More than 8 million tons of plastic is dumped into our oceans every year. We have developed a 'disposable' lifestyle and estimates are that around 50% of plastic is used just once and thrown away."
  //         imageUrl={water}
  //         deg={6} />
  //       <PerspectiveCard
  //         title="Save air"
  //         description="Burning plastic and other wastes releases dangerous substances such as heavy metals, persistent organic pollutants (POP), and other toxic chemicals into the air and persist in ash waste residues. These chemicals have been linked to the development of asthma, endocrine disruption and cancer."
  //         imageUrl={environment}
  //         deg={6} />
  //     </div>
  //   );
  // }

  // renderBadges() {
  //   return (
  //     <div className="btl-BadgeContainer">
  //       <img src={Badge1} />
  //       <img src={Badge2} />
  //       <img src={Badge3} />
  //     </div>
  //   )
  // }

  render() {
    return (
      <Section
        sectionStyles={{
          height: '120vh',
          marginTop: '4em'
        }}
      >
        <div id="about" className="ui container btl-cardContainer">
          <div className="btl-mission-description">
            <div className="btl-mission-description-header">Turning care into action</div>
            <p className="btl-mission-description-body">
              At Bottle&Co, we seek to unlock and fuel the possibility of a sustainable tomorrow.
              We are focused on the areas of greater needs, on the ways in which we can do the most good.
              With the alarming levels of environmental degradation, the planet needs a notch above caring,
              it needs definitive Action. Millions of plastic bottles enter the river-streams, oceans,
              landfills, etc. and deteriorate the eco-system for flora and fauna alike. Through Bottle&Co,
              we intend to drive that change to create a sustainable and greener tomorrow.
            </p>
            <p className="btl-mission-description-body">
              We are the World’s first sustainability-centric organization that facilitates
              multiple touchpoints with nature, to redress the unprecedented levels of environmental
              degradation. By 2022, we intend to retract and process 10 Million plastic pet bottles,
              and plant approximately 15K trees. 
            </p>
            <p className="btl-mission-description-body">
              Bottle&Co is the agent of change for the 21st century. We specialize in curating
              the most authentic and comfortable blend of fibers from recycled products (plastic bottles).
              Through our state-of-the-art process, which demands significantly fewer resources, we
              transform plastic bottles into recycled fiber. Not only do we recycle plastic, but also
              conserve electricity, save drinking water and emit fewer units of Carbon emissions,
              everytime we make a product. We use this process to create authentic, breathable and
              fashionable fabric for everyday use.
            </p>
          </div>
          <div className="btl-MaskContainer">
            <ZoomImageCard image={Mask1} />
            <ZoomImageCard image={Mask2} />
            <ZoomImageCard image={Mask3} />
          </div>
          {/* {this.renderCards()}
          {this.renderBadges()} */}
        </div>
        {/* <Team /> */}
      </Section>
    )
  }
}

export default Body;
