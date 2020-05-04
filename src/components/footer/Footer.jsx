import React, { Component } from 'react';
import Section from '../section/Section';
import Logo from '../logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faKickstarterK } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss';

class Footer extends Component {
  /**
   * Get element for the social sukmmary block within the footer.
   */
  getSocialSummary() {
    return (
      <div className="btl-Footer-Summary">
        <span className="btl-Footer-Summary-Title">Social</span>
        <div className="btl-Footer-Summary-Description">
          Follow us on social media to find out the latest updates on our progress.
        </div>
        <div className="btl-Footer-Summary-SocialContainer">
          <FontAwesomeIcon icon={faTwitter} size="lg"/>
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
          <FontAwesomeIcon icon={faInstagram} size="lg" />
          <FontAwesomeIcon icon={faKickstarterK} size="lg" />
        </div>
      </div>
    )
  }

  getTail() {
    return (
      <div className="btl-Footer-Tail">
        <div className="btl-Footer-CopyRight">&copy; Bottle & Co. All rights reserved</div>
        <div className="btl-Footer-TailLinks">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Security</div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Section
        sectionStyles={{
          backgroundColor: '#10182f',
          height: '50vh',
          width: '100%',
          boxShadow: 'rgba(50, 50, 50, 1) 0px -5px 35px'
        }}
      >
        <div className="btl-Footer-Container">
          <div className="btl-Footer-Head">
            <div className="btl-Footer-Row1">
              <Logo />
            </div>
            <div className="btl-Footer-Row2">
              {this.getSocialSummary()}
            </div>
          </div>
          {this.getTail()}
        </div>
      </Section>
    )
  }
}

export default Footer;
