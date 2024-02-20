import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
        <div className="section-info">
          <h1>About Me.</h1>
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              Sometimes, it is the very people who no one imagines anything of
              who do the things no one can imagine.
            </p>
            <footer className="blockquote-footer">
              Alan Turing, <cite title="Source Title">Mathematician</cite>
            </footer>
          </blockquote>
        </div>
        <div className="container resume">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Gokul</h4>
                <p className="pb-3">
                  Innovative and deadline-driven Programmer with 5+ years of
                  experience designing and developing enterprise level
                  applications and APIs with Python & JavaScript.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <span role="img" aria-label="emoji-home">
                      🏡
                    </span>{" "}
                    &nbsp; Chennai, Tamil Nadu, India
                  </li>
                  <li>
                    <span role="img" aria-label="emoji-phone">
                      📞
                    </span>{" "}
                    &nbsp; <a href="tel:+918248123185">(824) 812-3185</a>
                  </li>
                  <li>
                    <span role="img" aria-label="emoji-mail">
                      📫
                    </span>{" "}
                    &nbsp;{" "}
                    <a href="mailto:gokul.venkatesan.gv@gmail.com">
                      gokul.venkatesan.gv@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor's of Engineering</h4>
                <h6>Anna University, Chennai, India</h6>
                <h5>2011 - 2015</h5>
                <p>
                  Aspired degree in discipline of Electronics & Communication.
                  Student's Chairman of IETE Association. Organised and Mastered
                  many of the ceremonies. Won sports competitions - Chess &
                  table-tennis
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Cisco Systems</h4>
                <h6>Software Engineer</h6>
                <h5>2022 - Present</h5>
                <ul>
                  <li>
                    Working for SD-WAN, developing programs to manage & 
                    orchestrate WAN devices. 
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Wipro Technologies</h4>
                <h6>Senior Software Engineer</h6>
                <h5>2020 - 2022</h5>
                <ul>
                  <li>
                    Working as a data engineer for Apple Inc. Involved in
                    creating a framework to managing ETL pipelines for targeted
                    data source.
                  </li>
                  <li>
                    Managing applications containers with docker & kubernetes.
                    Handling multiple source/target file formats.
                  </li>
                  <li>
                    Pipeline queue and data are managed with Mongo. Collection
                    of framework library & tracker functionalities written to
                    manage time series data.
                  </li>
                  <li>
                    Creating custom log handlers for Splunk and ETL pipeline
                    metrics with prometheus/Grafana.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Elait IT Technologies Pvt Ltd.</h4>
                <h6>Technology Lead</h6>
                <h5>2015 - 2020</h5>
                <ul>
                  <li>
                    Working as a full stack web application & REST API solution
                    architect lead in the design, development, implementation
                    and deploying enterprise level applications using Python
                  </li>
                  <li>
                    UI/UX prototyping and building reactive user interfaces,
                    layout & components with JavaScript and other frameworks
                    like Angular or React.
                  </li>
                  <li>
                    Managing cloud infrastructure and services, application
                    platform and environments management
                  </li>
                  <li>
                    Supervise the assessment of all applications with unit test
                    programs in order to ensure quality and accuracy.
                  </li>
                </ul>
              </div>
              {/* <div className="resume-item">
              <h4></h4>
              <h5></h5>
              <p></p>
              <ul>
                <li>.</li>
              </ul>
            </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
