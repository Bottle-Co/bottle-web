import React, { Component } from 'react';
import $ from 'jquery';

import SwipeOpen from "../../assets/sounds/SwipeOpen.mp3";
import SwipeClose from "../../assets/sounds/SwipeClose.mp3";

import './hamburger.scss';

class Hamburger extends Component {
  isOpen = false;
  openSound = new Audio(SwipeOpen);
  closeSound = new Audio(SwipeClose);

  getHamburger() {
    return (
      <div class="btl-hamburger" onClick={this.toggleSidebar}>
        <div class="btl-line1 btl-top"></div>
        <div class="btl-line2 btl-middle"></div>
        <div class="btl-line3 btl-middle"></div>
        <div class="btl-line4 btl-bottom"></div>
      </div>
    );
  }

  getSidebar() {
    return (
      <div className="btl-sidebar isClosed">
        <ul className="btl-sidebar-list">
          <li className="btl-sidebar-item">
            <a href="#" className="btl-sidebar-anchor">Home</a>
          </li>
          <li className="btl-sidebar-item">
            <a href="#" className="btl-sidebar-anchor">About</a>
          </li>
          <li className="btl-sidebar-item">
            <a href="#/shop" className="btl-sidebar-anchor">Shop</a>
          </li>
        </ul>
      </div>
    );
  }

  toggleSidebar = () => {
    if (this.isOpen) {
      this.closeSound.play();
    } else {
      this.openSound.play();
    }

    this.isOpen = !this.isOpen;

    $(".btl-hamburger").toggleClass("active");
    $(".btl-sidebar").toggleClass("isClosed");
    $(".btl-hamburger").toggleClass("move-to-left");
    $(".btl-sidebar-item").toggleClass("active");
  }

  render() {
    return (
      <div className="btl-navigation">
        {this.getHamburger()}
        {this.getSidebar()}
      </div>
    );
  }
}

export default Hamburger;
