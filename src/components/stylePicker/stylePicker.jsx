import React,{ Component } from 'react';
import './stylePicker.scss';

export default class StylePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStyle: this.props.styles[0]
    }
  }

  getStyle(style) {
    return (
      <li className="btl-stylepicker-color" style={{ backgroundColor: style.color }} onClick>
      </li>
    );
  }

  render() {
    return (
      <div className="btl-stylepicker">
        <span>Color:</span>
        <ul className="btl-stylepicker-list">
          {this.props.styles.map(style => this.getStyle(style))}
        </ul>
      </div>
    );
  }
}
