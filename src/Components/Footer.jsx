import React from "react";
import "../styles.css";

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
            <img src="/img/icons/facebook.png" />
          </a>
          <a href="https://www.instagram.com/rankin_n/" target="_blank">
            <img src="/img/icons/instagram.png" />
          </a>
          <a href="https://www.linkedin.com/in/nathanrankin/" target="_blank">
            <img src="/img/icons/linkedin.png" />
          </a>
          <a href="https://github.com/nrankin18" target="_blank">
            <img src="/img/icons/github.png" />
          </a>
        </span>
      </div>
    );
  }
}

export default Footer;
