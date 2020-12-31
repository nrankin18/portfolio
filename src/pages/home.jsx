import React from "react";
import "../styles.css";
import Company from "../Components/Company.jsx";
import Skill from "../Components/Skill.jsx";
import ProjectModal from "../Components/ProjectModal.jsx";
import { companies } from "../util/companies.js";
import { skills } from "../util/skills.js";
import { projects } from "../util/projects.js";
import * as Scroll from "react-scroll";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Modal from "react-modal";

import Banner from "../img/banner.png";
import Headshot from "../img/headshot.png";
import BCLogo from "../img/logos/bc.png";
import USMLogo from "../img/logos/usm.png";

let Element = Scroll.Element;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }
  // componentDidMount() {
  //   Modal.setAppElement(document.getElementById("root"));
  // }

  openModal(project) {
    this.setState({ modalOpen: true, project: project });
  }

  closeModal(project) {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div>
        <Header isHome={1} />
        <div class="home">
          <div class="banner">
            <img src={Banner} alt="" />
          </div>

          <div class="stripe"></div>
          <h1 class="greeting">
            <span class="html-tag">{"<h1>"}</span>
            <span class="welcome">
              Hi, I'm <strong>Nathan Rankin</strong>
            </span>
            <span class="html-tag">{"</h1>"}</span>
          </h1>
          <span class="subtitle">
            <span>Computer Science</span>
            <span class="dot">•</span>
            <span>Physics</span>
            <span class="dot">•</span>
            <span>Aviation</span>
          </span>
          <div class="line"></div>
          <div class="about">
            <img class="headshot" src={Headshot} alt="Nathan Rankin" />
            <div class="about-column">
              <span class="html-tag top">{"<p>"}</span>
              <p class="about-text">
                Thank you for visiting my portfolio website! I am a hardworking,
                highly motivated and dedicated student pursuing a B.S. in
                computer science at Boston College with minors in physics and
                music. I have experience in a wide variety of software
                engineering topics including Java, iOS, and full-stack web
                development and am currently seeking a software engineering
                internship or freelance projects. Additionally, I have a passion
                for aviation and hold a private pilot's license with an
                instrument rating. This hobby has inspired many of my software
                development projects, including my role as Facility Engineer for
                Boston Virtual ARTCC. Feel free to explore my website and learn
                more about me.
              </p>
              <span class="html-tag">{"</p>"}</span>
            </div>
          </div>
          <h2 class="section" id="experience">
            <Element name="experience" />
            <span class="html-tag">{"<h2>"}</span>
            <span class="section-text">Experience</span>
            <span class="html-tag">{"</h2>"}</span>
          </h2>
          <div class="line"></div>
          <ul class="companies">
            {companies.map((company) => {
              return (
                <Company
                  name={company.name}
                  logo={company.logo}
                  location={company.location}
                  time={company.time}
                  positions={company.positions}
                />
              );
            })}
          </ul>
          <h3 class="subsection">
            <span class="html-tag">{"<h3>"}</span>
            <span class="section-text">Skills</span>
            <span class="html-tag">{"</h3>"}</span>
          </h3>
          <div class="subline"></div>
          <div class="skills">
            {skills.map((skillGroup) => {
              return (
                <div>
                  {skillGroup.map((skill) => {
                    return <Skill name={skill.name} icon={skill.icon} />;
                  })}
                </div>
              );
            })}
          </div>
          <h3 class="subsection">
            <span class="html-tag">{"<h3>"}</span>
            <span class="section-text">Projects</span>
            <span class="html-tag">{"</h3>"}</span>
          </h3>
          <div class="subline"></div>
          <div class="projects">
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal.bind(this)}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                },
                content: {
                  top: "100px",
                  margin: "5% auto",
                  padding: "0 20px",
                  border: "1px solid #888",
                  width: "80%",
                },
              }}
            >
              <ProjectModal
                project={this.state.project}
                closeModal={this.closeModal.bind(this)}
              />
            </Modal>
            {projects.map((project) => {
              return (
                <div
                  class="project"
                  onClick={() => {
                    this.openModal(project);
                  }}
                >
                  <img src={project.images[0]} alt={project.name} />
                  <div class="screen">
                    <p>{project.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <h3 class="subsection">
            <span class="html-tag">{"<h3>"}</span>
            <span class="section-text">Education</span>
            <span class="html-tag">{"</h3>"}</span>
          </h3>
          <div class="subline"></div>
          <ul class="schools">
            <Company
              name="Boston College"
              logo={BCLogo}
              detail="Bachelor of Science - Computer Science, Minor in Physics, Minor in Music"
              time="2018 - 2022 (expected)"
              positions={[
                { name: "Sophomore Scholar", objectives: [] },
                { name: "Dean's List First Honors", objectives: [] },
                {
                  name: "Courses include:",
                  objectives: [
                    "Intro to Computer Science (TA)",
                    "Data Structures (TA)",
                    "Computer Systems",
                    "Logic and Computation",
                    "Randomness and Computation",
                    "Computer Organization",
                    "Algorithms",
                    "Computer Networks",
                    "Object-Oriented Design (TA)",
                    "Robotics",
                    "Operating Systems",
                    "Electricity and Magnetism",
                    "Waves and Vibrations",
                    "Modern Physics",
                    "Quantum Physics",
                    "Quantum Computing",
                  ],
                },
              ]}
            />
            <Company
              name="University School of Milwaukee"
              logo={USMLogo}
              time="2004 - 2018"
              positions={[
                { name: "Cum Laude Society", objectives: [] },
                { name: "Office of Naval Research ISEF Award", objectives: [] },
              ]}
            />
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
