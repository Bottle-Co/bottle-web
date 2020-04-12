import React from 'react';
import PropTypes from 'prop-types';

import './Diamond.scss';

const Diamond = (props) => {
  const diamondStyles = {
    width: props.width || '600px',
    height: props.height || '600px',
    background: props.background || '#00F1C9',
    margin: props.margin
  };

  return (
    <div
      className="btl-diamond rellax"
      data-rellax-speed={props.rellaxSpeed}
      style={diamondStyles}
    >
    </div>
  )
};

Diamond.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  background: PropTypes.string,
  rellaxSpeed: PropTypes.number,
  margin: PropTypes.string,
}

export default Diamond;
