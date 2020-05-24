import React, { Component } from 'react';
import './ColorPicker.scss';

class ColorPicker extends Component {

  getColorSwatch(color) {
    return (
      <div className="btl-colorpicker-colorswatch" style={{ backgroundColor: color }}>

      </div>
    )
  }

  getColorSwatches() {
    return this.props.colors.map(color => (
      this.getColorSwatch(color)
    ));
  }

  render() {
    return (
      <div className="btl-colorpicker">
        {this.getColorSwatches()}
      </div>
    );
  }
}

export default ColorPicker;
