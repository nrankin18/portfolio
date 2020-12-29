import React from "react";
import "../styles.css";
import Company from "../components/Company";
import Skill from "../components/Skill";
import { companies } from "../util/companies.js";
import { skills } from "../util/skills.js";
import { projects } from "../util/projects.js";
import * as Scroll from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

let Element = Scroll.Element;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header isHome={1} />
        <div class="home">
          <div class="banner">
            <img src="/img/banner.png" />
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
            <img id="headshot" src="/img/headshot.png" />
            <span class="html-column">
              <span class="html-tag top">{"<p>"}</span>
              <span class="html-tag">{"</p>"}</span>
            </span>
            <p class="about-text">
              I am a hardworking, highly motivated and dedicated student
              pursuing a B.S. in computer science at Boston College with minors
              in physics and music. I have experience in a wide variety of
              software engineering including Java, iOS, and web development and
              am currently seeking an internship in computer science.
              Additionally, I have a passion for aviation and hold a private
              pilot's license with an instrument rating. This hobby has inspired
              many of my computer science projects, including my role as
              Facility Engineer for Boston Virtual ARTCC. Feel free to explore
              my website and learn more about me.
            </p>
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
            {projects.map((project) => {
              return (
                <div class="project">
                  <img src={project.images[0]} />
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
              logo="img/logos/bc.png"
              detail="Bachelor of Science - Computer Science, Minor in Physics, Minor in Music"
              time="2018 - 2022 (expected)"
              positions={[
                { name: "Sophomore Scholar", objectives: [] },
                { name: "Dean's List First Honors", objectives: [] },
                {
                  name: "Courses include:",
                  objectives: [
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
              logo="/img/logos/usm.png"
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
