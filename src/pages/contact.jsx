import React from "react";
import "../styles.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="contact-page">
          <h1 class="contact-header">Contact</h1>
          <div class="line"></div>
          <div class="contact">
            <div class="column">
              <div class="column-head">Send a message:</div>
              <div class="subline"></div>
              <form class="contact-form" action="contactform.php" method="post">
                <span>Name:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <span>Email:</span>
                <input
                  type="text"
                  name="mail"
                  placeholder="example@domain.com"
                  required
                />
                <span>Subject:</span>
                <input type="text" name="subject" placeholder="Subject" />
                <span class="spacer"></span>
                <span>Message:</span>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                ></textarea>
                <br />
                <div
                  class="g-recaptcha"
                  data-sitekey="6LcyNrUZAAAAAKUiMPfiyw5037o245IZXhK9g8vc"
                ></div>
                <button type="submit" name="submit">
                  Send
                </button>
              </form>
            </div>
            <div class="column">
              <div class="column-head">Connect:</div>
              <div class="subline"></div>
              <div class="connection">
                <a href="https://www.facebook.com/nathan.rankin.908">
                  <img src="/img/icons/facebook.png" />
                </a>
                <a href="https://www.facebook.com/nathan.rankin.908">
                  facebook.com/nathan.rankin.908
                </a>
              </div>
              <div class="connection">
                <a href="https://www.instagram.com/rankin_n/">
                  <img src="/img/icons/instagram.png" />
                </a>
                <a href="https://www.instagram.com/rankin_n/">
                  instagram.com/rankin_n
                </a>
              </div>
              <div class="connection">
                <a href="https://www.linkedin.com/in/nathanrankin/">
                  <img src="img/icons/linkedin.png" />
                </a>
                <a href="https://www.linkedin.com/in/nathanrankin/">
                  linkedin.com/in/nathanrankin
                </a>
              </div>
              <div class="connection">
                <a href="https://github.com/nrankin18">
                  <img src="/img/icons/github.png" />
                </a>
                <a href="https://github.com/nrankin18">github.com/nrankin18</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
