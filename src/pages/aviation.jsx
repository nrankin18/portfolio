import React from "react";
import "../styles.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { flags } from "../util/flags.js";

import Map from "../components/Map";

class Home extends React.Component {
  render() {
    console.log(process.env.REACT_APP_MAPBOX_TOKEN);
    return (
      <div>
        <Header />
        <div class="aviation">
          <h1 class="aviation-header">Aviation</h1>
          <div class="line"></div>
          <div class="aviation-intro">
            <div class="aviation-about">
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
              <img src="/img/wings.png" />
            </div>
          </div>
          <br />
          <br />
          <div class="subline"></div>
          <div class="flags">
            {flags.map((flag) => {
              return (
                <div class="flag">
                  <img src={flag} />
                </div>
              );
            })}
          </div>
          <Map />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
