import React, { Component } from 'react';
import Diamond from '../diamond/Diamond';
import Section from '../section/Section';
import Recycle from '../../assets/recycle.svg';
import SaveWater from '../../assets/saveWater.svg';
import SaveForests from '../../assets/saveForests.svg';

import './Body.scss';
import PerspectiveCard from '../perspectiveCard/PerspectiveCard';

class Body extends Component {
  renderCards() {
    return (
      <div className="ui special cards">
        <div className="card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img className="btl-cardImage" src={Recycle} />
            </div>
            <div className="content">
              <a className="header">Recycle, Reuse</a>
              <div className="description">
                Quisque porta, lacus a faucibus placerat, erat diam aliquam tellus, in mollis erat nunc ut dolor. Etiam ac felis nibh.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img className="btl-cardImage" src={SaveWater} />
            </div>
            <div className="content">
              <a className="header">Save water</a>
              <div className="description">
                Quisque porta, lacus a faucibus placerat, erat diam aliquam tellus, in mollis erat nunc ut dolor. Etiam ac felis nibh.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="blurring dimmable image">
              <div className="ui dimmer">
                <div className="content">
                  <div className="center">
                    <div className="ui inverted button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img className="btl-cardImage" src={SaveForests} />
            </div>
            <div className="content">
              <a className="header">Save forests</a>
              <div className="description">
                Quisque porta, lacus a faucibus placerat, erat diam aliquam tellus, in mollis erat nunc ut dolor. Etiam ac felis nibh.
              </div>
            </div>
          </div>
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
          <div className="ui grid">
            <div className="two column row">
              <div className="column">
                <Diamond width="400px" height="400px" margin="-15em 0em" />
                <Diamond background="#5000F1" width="200px" height="200px" margin="-5em 0em 0em 30em"/>
              </div>
              <div className="column">
                <div className="btl-mission-description">
                  <h2 className="btl-mission-description-header">CALLING</h2>
                  <p className="btl-mission-description-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna lectus, consequat non ipsum quis, ultrices bibendum mi. Nulla laoreet egestas ultrices. Vestibulum augue elit, malesuada a lectus non, tempus ornare ante. In suscipit sem scelerisque consectetur aliquam. Aenean dapibus vestibulum urna eu tempus. Duis id sem sed nulla maximus.
                  </p>
                </div>
                <Diamond background="#5000F1" width="80px" height="80px" rellaxSpeed={-19} />
              </div>
            </div>
            <div className="ui container btl-cardContainer">
              {this.renderCards()}
            </div>
            <PerspectiveCard imageUrl="https://unsplash.it/500/300" deg={6} />
          </div>
      </Section>
    )
  }
}

export default Body;
