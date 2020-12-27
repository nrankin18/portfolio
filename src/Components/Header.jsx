import React from "react";
import Logo from "../img/logo.png";
import "../styles.css";

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <img class="logo" src={Logo} />
        <nav class="nav">
          <ul>
            <li class="nav-item">
              <a href="">Home</a>
            </li>
            <li class="nav-item">
              <a href="">Experience</a>
            </li>
            <li class="logo-spacer"></li>
            <li class="nav-item">
              <a href="">Aviation</a>
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
