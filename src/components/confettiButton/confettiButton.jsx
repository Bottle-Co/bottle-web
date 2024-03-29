import React, { Component } from 'react';
import gsap from 'gsap';
import Physics2DPlugin from 'gsap/all';
import './confettiButton.scss';

function particles(parent, quantity, x, y, minAngle, maxAngle) {
  const colors = [
      '#FFFF04',
      '#EA4C89',
      '#892AB8',
      '#4AF2FD',
  ];

  for(let i = quantity - 1; i >= 0; i--) {
      let angle = gsap.utils.random(minAngle, maxAngle),
          velocity = gsap.utils.random(70, 140),
          dot = document.createElement('div');
      dot.style.setProperty('--b', colors[Math.floor(gsap.utils.random(0, 4))]);
      parent.appendChild(dot);
      gsap.set(dot, {
          opacity: 0,
          x: x,
          y: y,
          scale: gsap.utils.random(.4, .7)
      });
      gsap.timeline({
          onComplete() {
              dot.remove();
          }
      }).to(dot, {
          duration: .05,
          opacity: 1
      }, 0).to(dot, {
          duration: 1.8,
          rotationX: `-=${gsap.utils.random(720, 1440)}`,
          rotationZ: `+=${gsap.utils.random(720, 1440)}`,
          physics2D: {
              angle: angle,
              velocity: velocity,
              gravity: 120
          }
      }, 0).to(dot, {
          duration: 1,
          opacity: 0
      }, .8);
  }
}

class ConfettiButton extends Component {
  componentDidMount() {
    gsap.registerPlugin(Physics2DPlugin);
    this.initializeConfetti();
  }

  initializeConfetti = () => {
    document.querySelectorAll('.confetti-button').forEach(button => {
      const bounding = button.getBoundingClientRect();

      button.addEventListener('mousemove', e => {
          let dy = (e.clientY - bounding.top - bounding.height / 2) / -1;
          let dx = (e.clientX - bounding.left - bounding.width / 2) / 10;
  
          dy = dy > 10 ? 10 : (dy < -10 ? -10 : dy);
          dx = dx > 4 ? 4 : (dx < -4 ? -4 : dx);
  
          button.style.setProperty('--rx', dy);
          button.style.setProperty('--ry', dx);
      });
  
      button.addEventListener('mouseleave', e => {
          button.style.setProperty('--rx', 0)
          button.style.setProperty('--ry', 0)
  
      });
  
      button.addEventListener('click', e => {
          button.classList.add('success');
          gsap.to(button, {
              '--icon-x': -3,
              '--icon-y': 3,
              '--z-before': 0,
              duration: .2,
              onComplete() {
                  particles(button.querySelector('.emitter'), 100, -4, 6, -80, -50);
                  gsap.to(button, {
                      '--icon-x': 0,
                      '--icon-y': 0,
                      '--z-before': -6,
                      duration: 1,
                      ease: 'elastic.out(1, .5)',
                      onComplete() {
                          button.classList.remove('success');
                      }
                  });
              }
          });
      });
    });
  }

  render() {
    return (
      <a class="confetti-button white" href={this.props.href}>
        <div class="icon">
            <div class="cannon"></div>
            <div class="confetti">
                <svg viewBox="0 0 18 16">
                    <polyline points="1 10 4 7 4 5 6 1" />
                    <path d="M4,13 C5.33333333,9 7,7 9,7 C11,7 12.3340042,6 13.0020125,4" />
                    <path d="M6,15 C7.83362334,13.6666667 9.83362334,12.6666667 12,12 C14.1663767,11.3333333 15.8330433,9.66666667 17,7" />
                </svg>
                <i></i><i></i><i></i><i></i><i></i><i></i>
                <div class="emitter"></div>
            </div>
        </div>
        <span>{this.props.title}</span>
      </a>
    );
  }
}

export default ConfettiButton;
