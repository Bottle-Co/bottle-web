import React, { Component } from 'react';
import Logo from '../logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faKickstarterK } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

import './Footer.scss';
import ConfettiButton from '../confettiButton/confettiButton';

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
          <FontAwesomeIcon className="btl-connect-button" icon={faTwitter} size="lg" />
          <FontAwesomeIcon className="btl-connect-button" icon={faFacebookF} size="lg"/>
          <FontAwesomeIcon className="btl-connect-button" icon={faInstagram} size="lg" />
          <FontAwesomeIcon className="btl-connect-button" icon={faKickstarterK} size="lg" />
        </div>
      </div>
    );
  }

  /**
   * Using this as a temprary footer section until contact section
   * can be improved or multiple links under contact could be built.
   */
  getContactSummaryTemp() {
    return (
      <div className="btl-Footer-Summary">
        <span className="btl-Footer-Summary-Title">Contact</span>
        <div className="btl-Footer-Summary-Items">
          <ConfettiButton title="Get in touch" href="mailto:bottleandco@gmail.com" />
        </div>
      </div>
    );
  }

  // getContactSummary() {
  //   return (
  //     <div className="btl-Footer-Summary">
  //       <span className="btl-Footer-Summary-Title">Contact</span>
  //       <div className="btl-Footer-Summary-Items">
  //         <a href="#team">Team</a>
  //         <a className="btl-Footer-Summary-Item">Marketing</a>
  //         <a className="btl-Footer-Summary-Item">Partnership</a>
  //         <a className="btl-Footer-Summary-Item">Get involved</a>
  //       </div>
  //     </div>
  //   );
  // }

  // getResourceSummary() {
  //   return (
  //     <div className="btl-Footer-Summary">
  //       <span className="btl-Footer-Summary-Title">Resources</span>
  //       <div className="btl-Footer-Summary-Items">
  //         <a>Process of making</a>
  //         <a className="btl-Footer-Summary-Item">Impact</a>
  //         <a className="btl-Footer-Summary-Item">Insipration</a>
  //         <a className="btl-Footer-Summary-Item">Designs</a>
  //       </div>
  //     </div>
  //   );
  // }

  getTail() {
    return (
      <div className="btl-Footer-Tail">
        <div className="btl-Footer-CopyRight">&copy; Bottle & Co. All rights reserved</div>
        {/* <div className="btl-Footer-TailLinks">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Security</div>
        </div> */}
      </div>
    )
  }

  render() {
    return (
      <div id="contact" className="btl-Footer-Container">
        <div className="btl-Footer-Head">
          <div className="btl-Footer-Row1">
            <Logo />
          </div>
          <div className="btl-Footer-Row2">
            <div className="btl-Footer-Row2-Left">
              {this.getContactSummaryTemp()}
              {/* {this.getResourceSummary()} */}
            </div>
            <div className="btl-Footer-Row2-Right">
              {this.getSocialSummary()}
            </div>
          </div>
        </div>
        {this.getTail()}
      </div>
    )
  }
}

export default Footer;
