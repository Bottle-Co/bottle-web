import React, { Component } from 'react';

export default class QuantityPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.options[0] ? this.props.options[0].id : null
    };
  }

  getLabel(option) {
    const select = this.state.selected === option.id;

    return (
      <a class={`ui ${select ? "blue" : "" } image label`} onClick={() => this.setState({ selected: option.id }) }>
        {option.label}
      </a>
    );
  }

  render() {
    return (
      <div className="btl-quantitypicker">
        <span className="btl-quantitypicker-label">Quantity:</span>
        <div className="btl-quantitypicker-options">
          {this.props.options.map(option => this.getLabel(option))}
        </div>
      </div>
    );
  }
}
