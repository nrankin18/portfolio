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
    return (
      <div
        className={
          this.props.isAviation
            ? "aviation-slideshow"
            : this.props.isMobile
            ? "modal-mobile-slideshow"
            : "modal-slideshow"
        }
      >
        {this.props.slides.map((slide, index) => {
          return this.state.currentSlide === index ? (
            <div class="slide fade" index={index}>
              <div
                class="caption"
                style={!this.props.isAviation ? { display: "none" } : null}
              >
                {slide.caption}
              </div>
              <img
                src={this.props.isAviation ? slide.image : slide}
                alt={this.props.isAviation ? slide.caption : "img " + index}
              />
            </div>
          ) : (
            <div class="slide fade" style={{ display: "none" }} index={index}>
              <div class="caption">{slide.caption}</div>
              <img src={slide.image} alt={slide.caption} />
            </div>
          );
        })}
        <button
          class="prev"
          onClick={this.previousSlide.bind(this)}
          style={this.props.slides.length <= 1 ? { display: "none" } : null}
        >
          &#10094;
        </button>
        <button
          class="next"
          onClick={this.nextSlide.bind(this)}
          style={this.props.slides.length <= 1 ? { display: "none" } : null}
        >
          &#10095;
        </button>
        <div style={{ textAlign: "center" }}>
          <div
            class="dotbar"
            style={this.props.slides.length <= 1 ? { display: "none" } : null}
          >
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
  }
}

export default Slideshow;
