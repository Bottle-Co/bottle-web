import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

const Section = (props) => (
  <section
    className="btl-section"
    style={props.sectionStyles}
  >
    <div className="btl-section-background" style={props.backgroundStyles}>
      {props.background}
    </div>
    <div className="btl-section-content" style={props.contentStyles}>
      {props.children}
    </div>
  </section>
);

Section.propTypes = {
  background: PropTypes.element,
  contentStyles: PropTypes.object,
  backgroundStyles: PropTypes.object,
  sectionStyles: PropTypes.object,
  height: PropTypes.number,
}

export default Section;
