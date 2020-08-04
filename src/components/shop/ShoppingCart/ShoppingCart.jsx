import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from './ShoppingCart.actions';
import $ from 'jquery';

import './ShoppingCart.scss';
import Rope from './Rope';
import ShoppingCartModal from '../ShoppingCartModal/ShoppingCartModal';

const mapStateToProps = (state) => ({
  items: state.shoppingCartItems
});

class ShoppingCart extends Component {
  constructor() {
    super();
    this.extendMath();
  }

  componentDidMount() {
    this.cart = $('.shopping-cart');
    this.canvas = $('.shopping-cart canvas')[0];
    this.context = this.canvas.getContext('2d');
    this.count = this.cart.find('.count');
    this.current = this.props.items.length;
    this.x = this.canvas.dataset.x;
    this.y = this.canvas.dataset.y;
    
    this.setConfig();

    this.points = Rope.generate(
      this.config.start,
      this.config.end,
      this.config.resolution,
      this.canvas
    );

    this.rope = new Rope(this.points, this.config.solverIterations);

    this.tick = dt => {
        this.rope.update(this.canvas, dt);
    };
    this.initilizeMovementWithScroll();
    this.prepForStart();
    this.start();
  }

  componentDidUpdate() {
    console.log('Cart Items', this.props.items);
    if (this.props.items.length > this.current) {
      this.addItem();
    } else if (this.props.items.length < this.current) {
      this.removeItem();
    }
  }

  initilizeMovementWithScroll() {
    $(window).scroll(function() {
      $(".shopping-cart-container").css({
        "top": ($(window).scrollTop() + $(window).height() * 0.75)+ "px",
      });
    });
  }

  setConfig() {
    this.config = {
      start: {
          x: this.canvas.width / 4,
          y: this.canvas.height / 2
      },
      end: {
          x: this.canvas.width - this.canvas.width / 4,
          y: this.canvas.height / 2
      },
      resolution: 4,
      mass: .8,
      damping: .8,
      solverIterations: 20,
      color: getComputedStyle(this.cart[0]).getPropertyValue('--stroke'),
      ropeSize: 14
    };
  }

  start() {
    this._lastTime = new Date().getTime();
    this._currentTime = 0;
    this._deltaTime = 0;
    this._interval = 1000 / this._frameRate;
    this._canvas.addEventListener('mousemove', e => {
        this._onMouseEventHandlerWrapper(e, this.onMouseMoveHandler);
    }, false);
    this._canvas.addEventListener('mousedown', e => {
        this._onMouseEventHandlerWrapper(e, this.onMouseDownHandler);
    }, false);
    setInterval(() => {
        this._onRequestAnimationFrame();
    }, 30);
  }

  prepForStart() {
    this._window = window;
    this._canvas = this.canvas;
    this._context = this.context;
    this._updateHandler = this.tick;
    this._drawHandler = this.draw;
    this._frameRate = 60;
    this._lastTime = 0;
    this._currentTime = 0;
    this._deltaTime = 0;
    this._interval = 0;
    this.onMouseMoveHandler = (x, y) => {};
    this.onMouseDownHandler = (x, y) => {};
    this.start = this.start.bind(this);
    this._onMouseEventHandlerWrapper = this._onMouseEventHandlerWrapper.bind(this);
    this._onRequestAnimationFrame = this._onRequestAnimationFrame.bind(this);
  }

  _onMouseEventHandlerWrapper(e, callback) {
    let element = this._canvas;
    let offsetX = 0;
    let offsetY = 0;
    if(element.offsetParent) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }
    const x = e.pageX - offsetX;
    const y = e.pageY - offsetY;
    callback(x, y);
  }

  _onRequestAnimationFrame() {
    //this._window.requestAnimationFrame(this._onRequestAnimationFrame);
    this._currentTime = new Date().getTime();
    this._deltaTime = this._currentTime - this._lastTime;
    if(this._deltaTime > this._interval) {
        const dts = this._deltaTime * 0.001;
        this._updateHandler(dts);
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._drawHandler(this._canvas, this._context, dts);
        this._lastTime = this._currentTime - this._deltaTime % this._interval;
    }
  }

  extendMath() {
    Math.lerp = (first, second, percentage) => {
      return first + (second - first) * percentage;
    };

    Math.clamp = (value, min, max) => {
        return value < min ? min : value > max ? max : value;
    };
  }

  setCount(value, minus) {
    this.cart.toggleClass('counted', value !== 0);
    let moveClass = minus ? 'moveDown' : 'moveUp';
    this.count.children('div').append($('<span />').addClass(minus ? 'before' : 'after').text(value));
    this.count.addClass(moveClass);
    this.bounceCart();
    setTimeout(() => {
        this.count.find('.current').text(value);
        this.count.removeClass(moveClass);
        this.count.find('.before, .after').remove();
    }, 300);
  }

  draw = (canvas, context, dt) => {
    this.drawRopePoints(context, this.points, this.config.color, this.config.ropeSize);
  };

  drawRopePoints = (context, points, color, width) => {
    for (let i = 0; i < points.length; i++) {
        let p = points[i];
        const prev = i > 0 ? points[i - 1] : null;
        if(prev) {
            context.beginPath();
            context.moveTo(prev.pos.x, prev.pos.y);
            context.lineTo(p.pos.x, p.pos.y);
            context.lineWidth = width;
            context.strokeStyle = color;
            context.stroke();
        }
    }
  };

  bounceCart() {
    this.canvas.setAttribute('data-y', this.y * 3);
    this.canvas.setAttribute('data-x', -200);
    setTimeout(() => {
        this.canvas.setAttribute('data-x', 200);
    }, 50);
    this.cart.addClass('bounce');
    setTimeout(() => {
        this.canvas.setAttribute('data-y', this.y);
        this.canvas.setAttribute('data-x', this.x);
        setTimeout(() => {
            this.cart.removeClass('bounce');
        }, 200);
    }, 100);
  } 

  addItem = () => {
    this.current++;

    let setY = this.current >= 1 && !this.cart.hasClass('open') ? this.y * -.7 : this.y;

    if(this.current === 0) {
        setY = -1280;
    }

    this.canvas.setAttribute('data-y', setY);

    this.cart.toggleClass('open', this.current >= 1);

    this.x = this.canvas.dataset.x;
    this.y = this.canvas.dataset.y;

    setTimeout(() => {
      this.setCount(this.current, false);
    }, this.current === 1 && 300);

    return false;
  }

  removeItem = () => {
    if(this.current === 0) {
      return false;
    }

    this.current--;

    let setY = this.current >= 1 && !this.cart.hasClass('open') ? this.y * -.7 : this.y;

    if(this.current === 0) {
        setY = -1280;
    }

    this.canvas.setAttribute('data-y', setY);

    this.cart.toggleClass('open', this.current >= 1);

    this.x = this.canvas.dataset.x;
    this.y = this.canvas.dataset.y;

    setTimeout(() => {
      this.setCount(this.current, true);
    }, this.current === 1 && 0);

    return false;
  }

  render() {
    return (
      <ShoppingCartModal
        title="Shopping cart"
        trigger={
          <div className="shopping-cart-container">
            <div className="shopping-cart">
              <div className="bag">
              <div className="front">
                <div className="inner"></div>
                <canvas
                  width="240px"
                  height="240px"
                  data-x="0"
                  data-y="-1280"
                  data-mass=".8"
                  data-damping=".8"
                />
              </div>
              <div className="back"></div>
            </div>
              <div className="count">
              <span className="current">{this.current}</span>
            </div>
          </div>
        </div>
      }
    />
    );
  }
}

export default connect(
  mapStateToProps,
  { removeItem }
)(ShoppingCart);
