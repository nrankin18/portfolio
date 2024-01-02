import React from "react";
import AviationMap from "../Components/AviationMap.js";
import Destinations from "../Components/Destinations.js";
import Footer from "../Components/Footer.js";
import Header from "../Components/Header.js";
import Slideshow from "../Components/Slideshow.js";
import { flags } from "../data/flags.js";
import "../styles.css";

import av1 from "../img/aviation/av1.png";
import av2 from "../img/aviation/av2.png";
import av3 from "../img/aviation/av3.png";
import av4 from "../img/aviation/av4.png";
import av5 from "../img/aviation/av5.png";
import av6 from "../img/aviation/av6.png";
import av7 from "../img/aviation/av7.png";
import C152 from "../img/c152.png";
import C172 from "../img/c172.png";
import P28A from "../img/p28a.png";
import Wings from "../img/wings.png";

function Aviation {


  constructor(props) {
    super(props);
    this.state = {
      board: 0,
      boardRow1: "Chicago, IL           KMDW",
      boardRow2: "Green Bay, WI         KGRB",
      boardRow3: "Nantucket, MA         KACK",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }


    return (
      <div>
        <Header />
        <div className="aviation">
          <h1 className="aviation-header">Aviation</h1>
          <div className="line"></div>
          <div className="aviation-intro">
            <div className="aviation-about">
              <p>
                Aviation has always fascinated me. At the age of 10, I went for
                my first introductory flight in a small general-aviation
                aircraft and made it my goal to earn a pilot's license. After
                turning 17, I became a certified private pilot and later added
                an instrument rating and complex endorsement to my certificate.
                Since then I have seen many amazing sights from the air
                including the skyline of Chicago, the peaks of the Cascades, and
                the Massachusetts cape, all while sharing my passion with
                friends and family.
              </p>
              <img src={Wings} alt="" />
            </div>
            <Slideshow
              isAviation={1}
              slides={[
                { image: av3, caption: "Mount Hood" },
                { image: av1, caption: "Chicago" },
                { image: av4, caption: "Boston College" },
                {
                  image: av2,
                  caption: "Arches National Park",
                },
                { image: av5, caption: "Nantucket" },
                { image: av6, caption: "Niagara Falls" },
                { image: av7, caption: "White Mountains" },
              ]}
            />
          </div>
          <br />
          <br />
          <div className="subline"></div>
          <div className="flags">
            {flags.slice(0, flags.length / 2).map((flag) => {
              return (
                <div className="flag">
                  <img src={flag} alt="" />
                </div>
              );
            })}
          </div>
          <div className="subline"></div>
          <div className="flags">
            {flags.slice(flags.length / 2, flags.length).map((flag) => {
              return (
                <div className="flag">
                  <img src={flag} alt="" />
                </div>
              );
            })}
          </div>
          <AviationMap />
          <Destinations />
          <br />
          <br />
          <div className="subline"></div>
          <h3 className="subsection">
            <span className="aviation-section-text">Total Time:</span>
          </h3>
          <div className="hours">207.2 hrs</div>
          <h3 className="subsection">
            <span className="aviation-subsection-text">Top-Time Aircraft:</span>
          </h3>
          <div className="aircraft">
            <div className="ac">
              <img src={C152} alt="" />
              <span className="ac-id">Cessna 152</span>
              <span className="subline"></span>
              <div className="ac-hours">39.3 hrs</div>
            </div>
            <div className="ac">
              <img src={C172} alt="" />
              <span className="ac-id">Cessna 172</span>
              <span className="subline"></span>
              <div className="ac-hours">74.6 hrs</div>
            </div>
            <div className="ac">
              <img src={P28A} alt="" />
              <span className="ac-id">Piper PA-28</span>
              <span className="subline"></span>
              <div className="ac-hours">89.2 hrs</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Aviation;
