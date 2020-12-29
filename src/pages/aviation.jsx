import React from "react";
import "../styles.css";
import * as Scroll from "react-scroll";

import Header from "../components/Header";
import Footer from "../components/Footer";

let Element = Scroll.Element;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header isHome={0} />
        <div class="home"></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
