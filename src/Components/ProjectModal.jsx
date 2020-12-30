import React from "react";
import "../styles.css";
import Slideshow from "./Slideshow";
import Skill from "./Skill";

class ProjectModal extends React.Component {
  render() {
    console.log(this.props.project);
    return (
      <div class="modal">
        <span class="close" onClick={this.props.closeModal}>
          &times;
        </span>
        <p class="modal-title">{this.props.project.name}</p>
        <div class="subline"></div>
        <Slideshow
          slides={this.props.project.images}
          isMobile={this.props.project.isMobile}
        />
        <p class="modal-text">{this.props.project.description}</p>
        <span class="modal-language">{this.props.project.line1Text}</span>
        <div className="skills modal-skills">
          <div className="modal-skills">
            {this.props.project.line1Icons.map((skill) => {
              return <Skill name={skill.name} icon={skill.icon} />;
            })}
          </div>
        </div>
        <span class="modal-language">{this.props.project.line2Text}</span>
        <div className="skills modal-skills">
          <div className="modal-skills">
            {this.props.project.line2Icons.map((skill) => {
              return (
                <Skill name={skill.name} icon={skill.icon} href={skill.href} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
