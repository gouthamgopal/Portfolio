import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import "../styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <h3>Hi, I am</h3>
        <h1>Goutham Gopal.</h1>
        <ReactTypingEffect
          className="bioWriter"
          text={[
            "Software Developer",
            "Full Stack Developer",
            "Cloud Developer",
          ]} //text=["Hello.", "World!"]
          speed={50}
          eraseDelay={600}
          typingDelay={1500}
        />
        <p>
          I am a software engineer based in Bloomington, IN specializing in
          building highly scalable applications. Currently pursuing Master's in
          Computer Science at <strong>Indiana University Bloomington</strong>.
        </p>
      </div>
    );
  }
}

export default Home;
