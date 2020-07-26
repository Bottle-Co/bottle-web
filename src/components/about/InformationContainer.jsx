import React, { Component } from 'react';
import './informationContainer.scss';

class InformationContainer extends Component {
  render() {
    return (
      <div className="information-container container">
        {this.props.children}
      </div>
    );
  }
}

export default InformationContainer;
