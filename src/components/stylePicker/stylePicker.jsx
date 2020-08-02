import React,{ Component } from 'react';
import './stylePicker.scss';

export default class StylePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStyle: this.props.styles[0]
    }
  }

  async onStyleClick(newStyle) {
    await this.setState({ selectedStyle: newStyle });
    this.props.onChange(newStyle.id);
  }

  getStyle(style) {
    const isSelected = style.id === this.state.selectedStyle.id;

    return (
      <li
        key={style.id}
        className={`btl-stylepicker-color ${isSelected ? 'btl-stylepicker-color-active' : ''}`}
        style={{ backgroundColor: style.color }}
        onClick={() => this.onStyleClick(style)}>
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
