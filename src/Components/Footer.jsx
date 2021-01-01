import React from "react";
import "../styles.css";

import Mail from "../img/icons/mail.png";
import Facebook from "../img/icons/facebook.png";
import Instagram from "../img/icons/instagram.png";
import LinkedIn from "../img/icons/linkedin.png";
import GitHub from "../img/icons/github.png";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <span class="copyright desktop">Copyright © 2021 Nathan Rankin</span>
        <span class="copyright-mobile mobile">
          Copyright © 2021 Nathan Rankin
        </span>
        <span class="connect desktop">
          <a
            href={process.env.PUBLIC_URL + "/Nathan%20Rankin%20Resume.pdf"}
            download
          >
            ↓ Download Resume
          </a>
          <a href="mailto:rankinna@bc.edu">
            <img src={Mail} alt="Mail" />
          </a>
          <a
            href="https://www.facebook.com/nathan.rankin.908"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/rankin_n/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathanrankin/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/nrankin18"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
