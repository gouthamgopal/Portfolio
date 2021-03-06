import React, { Component } from "react";
import icon from "../content/images/gg_icon.svg";
import gitIco from "../content/images/github.svg";
import { SocialIcon } from "react-social-icons";
import "../styles/Nav.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

class Nav extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggleNavbar.bind(this);

    // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-light justify-content-between fixed-top"
          id="navbar"
        >
          <a className="navbar-brand backsvg" href="/">
            <img src={icon} alt="Home Link" width="30px" height="30px" />
            <span>Goutham Gopal</span>
          </a>
          <div className="navbar-header">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div orientation="left" className="leftNav">
          <ul className="navbar-nav">
            <li>
              <a
                href="https://www.linkedin.com/in/goutham-gopal-8a018692/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  url="https://www.linkedin.com/in/goutham-gopal-8a018692/"
                  style={{
                    height: 40,
                    width: 40,
                    color: "black",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gouthamgopal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  style={{
                    height: 38,
                    width: 35,
                    color: "black",
                    marginLeft: 3,
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/goutham_gopal"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon
                  style={{
                    height: 40,
                    width: 40,
                    color: "black",
                  }}
                />
              </a>
            </li>
          </ul>
        </div>

        <div orientation="right" className="rightNav">
          <ul className="navbar-nav">
            <li>
              <a
                href="mailto:goutham.gopal94@gmail.com"
                className="rightNavMail"
                rel="noopener noreferrer"
                target="_blank"
              >
                goutham.gopal94@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
