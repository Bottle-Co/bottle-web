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
import Process from '../../assets/Process.png';
import BenefitsOfMask from '../../assets/BenefitsOfMask.png';

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
          marginTop: '4em'
        }}
      >
        <div id="about" className="ui container btl-cardContainer">
          <div className="btl-mission-description">
            <div className="btl-mission-description-header">Turning care into action</div>
            <p className="btl-mission-description-body">
              We, at Bottle&Co, believe not only in providing state-of-the-art solutions to modern
              day problems, but also in ensuring that our initiatives foster the restoration of
              ecological balance.We create sustainable, breathable and washable/reusable masks
              for everyone. Our products are manufactured by recycling single-use plastic
              products, such as bottles.
            </p>

            <img className="btl-mission-description-image" src={Process} />

            <p className="btl-mission-description-body">
              During this covid-19 crisis, our face-masks act as the first line of defence. To ensure
              and strengthen safety standards, we have gone a mile ahead, and have curated a
              fabric with Anti-viral/ bacterial properties. Upon testing this fabric, we observed that
              it successfully neutralised the effect of any virus/flu (including Covid-19 or
              Coronavirus), within 10 minutes of contact, in a Lab Experiment. We have coupled
              this technology with our advanced recycling practice to create an optimal balance of
              safety, sustainability and welfare.
            </p>
          </div>
          <hr className="btl-divider"/>
          <div className="btl-MaskContainer">
            <ZoomImageCard image={Mask1} />
            <ZoomImageCard image={Mask2} />
            <ZoomImageCard image={Mask3} />
          </div>
          <img className="btl-MaskBenefits" src={BenefitsOfMask} />
          {/* {this.renderCards()}
          {this.renderBadges()} */}
        </div>
        {/* <Team /> */}
      </Section>
    )
  }
}

export default Body;
