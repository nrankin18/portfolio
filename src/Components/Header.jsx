import React from "react";
import Logo from "../img/icon.png";
import "../styles.css";

class Home extends React.Component {
  render() {
    return (
      <div class="header">
        <img class="icon" src={Logo} />
        <nav class="nav">
          <ul>
            <li class="nav-item">
              <a href="">Home</a>
            </li>
            <li class="nav-item">
              <a href="">Experience</a>
            </li>
            <li class="icon-spacer"></li>
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

export default Home;
