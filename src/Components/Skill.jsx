import React from "react";
import "../styles.css";

class Skill extends React.Component {
  render() {
    if (this.props.href)
      return (
        <a target="_blank" href={this.props.href}>
          <div class="skill">
            <img src={this.props.icon} />
            <div class="bubble">
              <p>{this.props.name}</p>
            </div>
          </div>
        </a>
      );
    else
      return (
        <div class="skill">
          <img src={this.props.icon} />
          <div class="bubble">
            <p>{this.props.name}</p>
          </div>
        </div>
      );
  }
}

export default Skill;
