import React, { Component } from 'react';
import './JumboTron.scss';

class JumboTron extends Component {
  componentDidMount() {
    var scene = document.getElementById('scene');
    new window.Parallax(scene)
  }

  getMainWord() {
    const words = ["Impact", "Sustainable", "Recycle", "Green", "Organic"]
    return words[Math.floor(Math.random() * 5)];
  }

  render() {
    const mainWord = this.getMainWord();

    return (
      <div className="btl-container">
        {/* <div class="about">
          <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
              <span class="icon"></span>
          </a>
          <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
              <span class="icon"></span>
          </a>
          <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
              <span class="icon"></span>
          </a>
          <a class="bg_links logo"></a>
        </div> */}


        <section class="wrapper">
          <div class="container">
            <div id="scene" class="scene" data-hover-only="false">
              <div class="circle" data-depth="1.2"></div>

              <div class="one" data-depth="0.9">
                <div class="content">
                  <span class="piece"></span>
                  <span class="piece"></span>
                  <span class="piece"></span>
                </div>
              </div>

              <div class="two" data-depth="0.60">
                  <div class="content">
                      <span class="piece"></span>
                      <span class="piece"></span>
                      <span class="piece"></span>
                  </div>
              </div>

              <div class="three" data-depth="0.40">
                  <div class="content">
                      <span class="piece"></span>
                      <span class="piece"></span>
                      <span class="piece"></span>
                  </div>
              </div>

              <p class="p404" data-depth="0.50">{mainWord}</p>
              <p class="p404" data-depth="0.10">{mainWord}</p>
            </div>

            <div class="text">
                <article>
                    <p>
                    We make innovative clothes using single-use plastic bottles and sustainable fabrics.
                    </p>
                    <button>Discover the power</button>
                </article>
            </div>
          </div>
        </section>

        <div class="scroll-down"></div>
      </div>
    );
  }
}

export default JumboTron;
