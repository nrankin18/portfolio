import React from "react";
import "../styles.css";

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      lastSlide: this.props.slides.length - 1,
    };
  }

  nextSlide() {
    if (this.state.currentSlide + 1 <= this.state.lastSlide)
      this.setState({ currentSlide: this.state.currentSlide + 1 });
    else this.setState({ currentSlide: 0 });
  }

  previousSlide() {
    if (this.state.currentSlide - 1 >= 0)
      this.setState({ currentSlide: this.state.currentSlide - 1 });
    else this.setState({ currentSlide: this.state.lastSlide });
  }

  goToSlide(index) {
    this.setState({ currentSlide: index });
  }

  render() {
    console.log(this.props.isMobile);
    if (this.props.isAviation)
      return (
        <div class="aviation-slideshow">
          <span class="slides">
            {this.props.slides.map((slide, index) => {
              return this.state.currentSlide === index ? (
                <div class="slide fade" index={index}>
                  <div class="caption">{slide.caption}</div>
                  <img src={slide.image} alt={slide.caption} />
                </div>
              ) : (
                <div
                  class="slide fade"
                  style={{ display: "none" }}
                  index={index}
                >
                  <div class="caption">{slide.caption}</div>
                  <img src={slide.image} alt={slide.caption} />
                </div>
              );
            })}
            <button class="prev" onClick={this.previousSlide.bind(this)}>
              &#10094;
            </button>
            <button class="next" onClick={this.nextSlide.bind(this)}>
              &#10095;
            </button>
          </span>
          <div style={{ textAlign: "center" }}>
            <div class="dotbar">
              {this.props.slides.map((slide, index) => {
                return this.state.currentSlide === index ? (
                  <span
                    class="slide-dot active"
                    onClick={() => this.goToSlide(index)}
                  ></span>
                ) : (
                  <span
                    class="slide-dot"
                    onClick={() => this.goToSlide(index)}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      );
    else if (this.props.isMobile === 1)
      return (
        <div class="modal-mobile-slideshow">
          <span class="slides">
            {this.props.slides.map((slide, index) => {
              return this.state.currentSlide === index ? (
                <div class="slide fade" index={index}>
                  <img src={slide} alt={"img " + index} />
                </div>
              ) : (
                <div
                  class="slide fade"
                  style={{ display: "none" }}
                  index={index}
                >
                  <img src={slide} alt={"img " + index} />
                </div>
              );
            })}
            {this.props.slides.length > 1 ? (
              <button class="prev" onClick={this.previousSlide.bind(this)}>
                &#10094;
              </button>
            ) : null}
            {this.props.slides.length > 1 ? (
              <button class="next" onClick={this.nextSlide.bind(this)}>
                &#10095;
              </button>
            ) : null}
          </span>
          {this.props.slides.length > 1 ? (
            <div style={{ textAlign: "center" }}>
              <div class="dotbar">
                {this.props.slides.map((slide, index) => {
                  return this.state.currentSlide === index ? (
                    <span
                      class="slide-dot active"
                      onClick={() => this.goToSlide(index)}
                    ></span>
                  ) : (
                    <span
                      class="slide-dot"
                      onClick={() => this.goToSlide(index)}
                    ></span>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      );
    return (
      <div class="modal-slideshow">
        <span class="slides">
          {this.props.slides.map((slide, index) => {
            return this.state.currentSlide === index ? (
              <div class="slide fade" index={index}>
                <img src={slide} alt={"img " + index} />
              </div>
            ) : (
              <div class="slide fade" style={{ display: "none" }} index={index}>
                <img src={slide} alt={"img " + index} />
              </div>
            );
          })}
          {this.props.slides.length > 1 ? (
            <button class="prev" onClick={this.previousSlide.bind(this)}>
              &#10094;
            </button>
          ) : null}
          {this.props.slides.length > 1 ? (
            <button class="next" onClick={this.nextSlide.bind(this)}>
              &#10095;
            </button>
          ) : null}
        </span>
        {this.props.slides.length > 1 ? (
          <div style={{ textAlign: "center" }}>
            <div class="dotbar">
              {this.props.slides.map((slide, index) => {
                return this.state.currentSlide === index ? (
                  <span
                    class="slide-dot active"
                    onClick={() => this.goToSlide(index)}
                  ></span>
                ) : (
                  <span
                    class="slide-dot"
                    onClick={() => this.goToSlide(index)}
                  ></span>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Slideshow;
