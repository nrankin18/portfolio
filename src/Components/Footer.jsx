import React from "react";
import "../styles.css";

import Facebook from "/img/icons/facebook.png";
import Instagram from "/img/icons/instagram.png";
import LinkedIn from "/img/icons/linkedin.png";
import GitHub from "/img/icons/github.png";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <span class="copyright">Copyright © 2021 Nathan Rankin</span>
        <span class="connect">
          <a
            href={process.env.PUBLIC_URL + "/Nathan%20Rankin%20Resume.pdf"}
            download
          >
            ↓ Download Resume
          </a>
          <a href="mailto:rankinna@bc.edu">
            <img src="/img/icons/mail.png" />
          </a>
          <a href="https://www.facebook.com/nathan.rankin.908" target="_blank">
            <img src={Facebook} />
          </a>
          <a href="https://www.instagram.com/rankin_n/" target="_blank">
            <img src={Instagram} />
          </a>
          <a href="https://www.linkedin.com/in/nathanrankin/" target="_blank">
            <img src={LinkedIn} />
          </a>
          <a href="https://github.com/nrankin18" target="_blank">
            <img src={GitHub} />
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
