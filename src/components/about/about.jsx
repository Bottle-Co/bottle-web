import React, { Component } from 'react';
import InformationContainer from './InformationContainer';
import Information from './information';

import Mission from '../../assets/illustrations/Mission.png';
import NoVirus from '../../assets/illustrations/NoVirus.png';
import Process from '../../assets/illustrations/Process.png';

import './about.scss';

class About extends Component {
  render() {
    return (
      <div className="about">
        <InformationContainer>
          <Information
            title="Our mission"
            description={
              `We, at Bottle&Co, believe not only in providing state-of-the-art solutions
              to modern day problems, but also in ensuring that our initiatives foster the
              restoration of ecological balance. We create sustainable, breathable and washable
              masks for everyone. Our products are a mix of RPet, churned out of single-use
              plastic products such as bottles, and an array of sustainable fabrics.
              To stay relevant in these unprecedented times, Bottle&Co has come up with a technology,
              iProtect, that offers a comprehensive solution. iProtect has Antiviral and Antibacterial
              against enveloped viruses and bacteria, and lasts effectively for at least 15-20 washes
              at 40°C (104°F). Rapid antiviral effect of the fabric successfully eliminates any potential
              threat within 30 mins of contamination, through its self-sanitizing and germ resistant surface.
              The mask is made water repellent to prevent droplets from penetrating the surface, thereby making
              it an all-rounder.`
            }
            image={{
              source: Mission,
              alt: "Mission",
              height: 350,
              position: "right"
            }}
          />

          <Information
            title="Motivation"
            description={
              `Covid-19 has kick-started a global race for Personal Protective Equipment (PPE), as various
              countries scramble to protect their frontline workers. Made up of non-biodegradable plastic,
              everyday masks add to the plastic waste in a significant manner. Additionally, to slow down the
              spread of the Covid-19 virus and to win over the customer confidence, retailers and vendors are now
              switching to single use plastic. This could reverse years worth of effort and cause irrevocable damage
              to the environment. To counter this movement and ensure removal of plastic waste from our landfills,
              oceans, etc., we have committed ourselves to take that very waste off the streets, and convert
              it into a high utility product, i.e Face masks. Our products are made up of that discarded
              single use plastic, and go through a rigorous process of transformation & cleansing,
              before it reaches your face.`
            }
            image={{
              source: NoVirus,
              alt: "Motivation",
              height: 450,
              position: "left",
              style: {
                marginLeft: "7em"
              }
            }}
          />

          <Information
            title="Our process"
            description={
              `During this covid-19 crisis, our face-masks act as the first line of defence.
              To ensure and strengthen safety standards, we have gone a mile ahead, and have
              curated a fabric with Anti-viral & Anti-bacterial properties.Upon testing this fabric,
              we observed that it successfully neutralised 99.9% of any virus/flu, within 30 minutes
              of contact. Once the virus is in proximity to the Face Mask, iProtect attracts the virus
              through a positive charge and captures it by locking on to the virus protein. The virus
              membrane begins to disintegrate rendering the virus ineffective. The disintegration
              process is expedited using Agus technology. We have coupled this technology with our
              advanced recycling practice to create an optimal balance of safety, sustainability and
              welfare. The masks will continue to eliminate any threats, upto 20 washes.`
            }
            image={{
              source: Process,
              alt: "Process",
              height: 450,
              position: "right",
              style: {
                marginRight: "5em"
              }
            }}
          />
        </InformationContainer>
      </div>
    );
  }
}

export default About;
