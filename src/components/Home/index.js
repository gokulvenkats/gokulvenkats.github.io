import React, { Component } from "react";
import { Link } from "react-router-dom";
import mypic from "../../assets/images/mypic.png";

class Home extends Component {
  render() {
    return <AboutMe />;
  }
}

const AboutMe = () => (
  <div>
    <div className="intro-image">
      <img src={mypic} alt="gokul" />
    </div>
    <section className="hero">
      <div className="container">
        <div className="hero-wrap">
          <div className="intro-box">
            <div className="intro-txt">
              <h1 className="typewriter">I’m Gokul.</h1>
              <h2>Developer, Designer, Dreamer</h2>
              <p>
                Python & JavaScript expert with a focus on Web Technologies,
                Data Engineer (ETL), Microservices and Devops. I also do UI/UX
                works. Explore my portfolio.
                {/* as it contains some of my best works */}
              </p>
            </div>
            <div className="btns h-btns">
              <a
                href="mailto:gokul.venkatesan.gv@gmail.com?subject=Hello!"
                className="btn btn-outline mr-4"
              >
                Say hi
              </a>
              <Link type="button" className="btn btn-outline" to={"/about-me"}>
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
