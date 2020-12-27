import React from "react";
import "../styles.css";

class Skill extends React.Component {
  render() {
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
