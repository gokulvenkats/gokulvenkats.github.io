import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="container text-center" style={{ height: "100vh" }}>
        <div className="section-info">
          <h1>Contact</h1>
          {/* <p>I put my heart and soul in these projects. Now that you're on this page, feel free to explore.</p> */}
        </div>
        <div className="btns">
          <a
            href="mailto:gokul.venkatesan.gv@gmail.com?subject=Hello!"
            className="btn btn-outline"
          >
            Mail Me
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
