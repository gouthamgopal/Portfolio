import React, { Component } from "react";
import "../styles/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contactComponent">
        <h3>Want to Connect?</h3>
        <div className="textOuter">
          <p>
            I am open to connecting with new people, my inbox is always open. I
            am looking for new opportunities. Feel free to reach out to me, I
            will get back to you as soon as I can!
          </p>
        </div>
        <button type="button" className="btn btn-outline-success">
          <a
            href="mailto:goutham.gopal94@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn"
          >
            Let's Connect
          </a>
        </button>
      </div>
    );
  }
}

export default Contact;
