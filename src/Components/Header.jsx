import React from "react";
import Logo from "../img/logo.png";
import "../styles.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Scroll from "react-scroll";
let scroll = Scroll.animateScroll;
let scroller = Scroll.scroller;

class Header extends React.Component {
  homeClicked() {
    scroll.scrollTo(0, {
      duration: 1500,
      smooth: true,
    });
  }

  experienceClicked() {
    scroller.scrollTo("experience", {
      duration: 1500,
      smooth: true,
      offset: -90,
    });
  }
  render() {
    return (
      <div class="header">
        <img class="logo" src={Logo} />
        <nav class="nav">
          <ul>
            <li class="nav-item">
              {this.props.isHome ? (
                <a onClick={this.homeClicked}>Home</a>
              ) : (
                <Link to="">Home</Link>
              )}
            </li>
            <li class="nav-item">
              {this.props.isHome ? (
                <a onClick={this.experienceClicked}>Experience</a>
              ) : (
                <HashLink to="/#experience" smooth>
                  Experience
                </HashLink>
              )}
            </li>
            <li class="logo-spacer"></li>
            <li class="nav-item">
              <Link to="/aviation">Aviation</Link>
            </li>
            <li class="nav-item">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
