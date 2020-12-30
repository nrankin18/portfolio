import React from "react";
import "../styles.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

import Header from "../components/Header";
import Footer from "../components/Footer";

const recaptchaRef = React.createRef();

class Contact extends React.Component {
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fdnr2h8",
        "template_8jnaqd7",
        e.target,
        "user_EWmkoYvos96nJmOGEURtD"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        },
        (error) => {
          console.log(error.text);
          if (error.text == "The g-recaptcha-response parameter not found") {
            Swal.fire({
              footer:
                '<a href="mailto:18nrankin@gmail.com">Send me an email directly</a>',
              icon: "warning",
              title: "Error validating reCAPTCHA",
              showConfirmButton: false,
              timer: 10000,
              timerProgressBar: true,
              showCloseButton: true,
            });
          } else {
            Swal.fire({
              footer:
                '<a href="mailto:18nrankin@gmail.com">Send me an email directly</a>',
              icon: "error",
              title: "Message failed to send",
              showConfirmButton: false,
              timer: 10000,
              timerProgressBar: true,
              showCloseButton: true,
            });
          }
        }
      );
  };

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
              <form class="contact-form" onSubmit={this.sendEmail}>
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
                  name="reply_to"
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
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcyNrUZAAAAAKUiMPfiyw5037o245IZXhK9g8vc"
                />
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
