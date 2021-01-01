import React from "react";
import "../styles.css";
import "../hamburgers.css";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Hamburger from "react-hamburgers";

import Logo from "../img/logo.png";

import Scroll from "react-scroll";
let scroll = Scroll.animateScroll;
let scroller = Scroll.scroller;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileDropdownActive: false };
  }

  homeClicked() {
    scroll.scrollTo(0, {
      duration: 1500,
      smooth: true,
    });
    this.setState({
      mobileDropdownActive: !this.state.mobileDropdownActive,
    });
  }

  experienceClicked() {
    scroller.scrollTo("experience", {
      duration: 1500,
      smooth: true,
      offset: -130,
    });
    this.setState({
      mobileDropdownActive: !this.state.mobileDropdownActive,
    });
  }
  render() {
    return (
      <div class="header">
        <img class="logo" src={Logo} alt="NR" />
        <nav class="nav">
          <ul>
            <li class="desktop nav-item">
              {this.props.isHome ? (
                <button class="navbutton" onClick={this.homeClicked.bind(this)}>
                  Home
                </button>
              ) : (
                <Link to="" class="navbutton">
                  Home
                </Link>
              )}
            </li>
            <li class="desktop nav-item">
              {this.props.isHome ? (
                <button
                  class="navbutton"
                  onClick={this.experienceClicked.bind(this)}
                >
                  Experience
                </button>
              ) : (
                <HashLink to="/#experience" class="navbutton" smooth>
                  Experience
                </HashLink>
              )}
            </li>
            <li class="logo-spacer"></li>
            <li class="nav-item">
              <Link to="/aviation" class="desktop navbutton">
                Aviation
              </Link>
            </li>
            <li class="desktop nav-item">
              <Link to="/contact" class="desktop navbutton">
                Contact
              </Link>
            </li>
            <div class="mobile ham">
              <Hamburger
                active={this.state.mobileDropdownActive}
                type="spin"
                style={{ color: "white" }}
                onClick={() =>
                  this.setState({
                    mobileDropdownActive: !this.state.mobileDropdownActive,
                  })
                }
              />
            </div>
          </ul>
        </nav>
        <div className="mobile mobile-nav-menu-wrapper">
          <div
            className={
              this.state.mobileDropdownActive
                ? " mobile-nav-menu  nav-active"
                : " mobile-nav-menu"
            }
          >
            <div className="mobile-nav-item top">
              {this.props.isHome ? (
                <button class="navbutton" onClick={this.homeClicked.bind(this)}>
                  Home
                </button>
              ) : (
                <Link to="" class="navbutton">
                  Home
                </Link>
              )}
            </div>
            <div className="mobile-nav-item">
              {this.props.isHome ? (
                <button
                  class="navbutton"
                  onClick={this.experienceClicked.bind(this)}
                >
                  Experience
                </button>
              ) : (
                <HashLink to="/#experience" class="navbutton" smooth>
                  Experience
                </HashLink>
              )}
            </div>
            <div className="mobile-nav-item">
              <Link to="/aviation" class="navbutton">
                Aviation
              </Link>
            </div>
            <div className="mobile-nav-item">
              <Link to="/contact" class="navbutton">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
