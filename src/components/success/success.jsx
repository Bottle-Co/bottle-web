import React, { Component } from 'react';
import './success.scss';

const Confettiful = function(el) {
  this.el = el;
  this.containerEl = null;
  
  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];
  
  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;
  
  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }
  
  containerEl.classList.add('confetti-container');
  
  this.el.appendChild(containerEl);
  
  this.containerEl = containerEl;
};

class Success extends Component {
  render() {
    return (
      <div class="success-container">
  <div class="receipt">
    <h2 class="receipt__title">Thank you.</h2>
    <p class="receipt__subtitle">Your order has been sucessfully placed. Check your mail for tracking details.</p>
    {/* <ul class="receipt__lines">
      <li class="receipt__line">
        <span class="receipt__line__item">Octocat Mug</span>
        <span class="receipt__line__price">11,99 €</span>  
      </li>
      <li class="receipt__line">
        <span class="receipt__line__item">ES6 stickers (x5)</span>
        <span class="receipt__line__price">1,99 €</span>  
      </li>
      <li class="receipt__line">
        <span class="receipt__line__item">Node modules (+Infinity)</span>
        <span class="receipt__line__price">8 403,67 €</span>  
      </li>
    </ul>
    <p class="receipt__total">
      <span class="receipt__total__item">Total</span>
      <span class="receipt__total__price">8 417,65 €</span>
    </p> */}
    <p class="receipt__back">
      <a href="#">Return to home</a>
    </p>
  </div>
</div>
    );
  }
}

export default Success;
