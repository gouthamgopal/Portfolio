import React, { Component } from "react";
import "../styles/App.css";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <section className="content">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="work">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
