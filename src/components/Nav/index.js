import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import myname from '../../assets/images/myname.png';
import twitterIcon from '../../assets/images/twitter.svg';
import GithubIcon from '../../assets/images/github.svg';

class MyNavbar extends Component {
  render() {
    return <MyNav />
  }
}

const MyNav = () => (
  <section className="header_section">
    <div className="container">
      <nav>
        <Link className="brand" to={"/"}>
          <img src={myname} className="logo" alt="gokul" />
        </Link>
        <div className="menu">
          <ul className="menu-links">
            <li>
              <Link className="nav-link" to={"/story"}>stories.</Link>
            </li>
            <li>
              <Link className="nav-link" to={"/work"}>work.</Link>
            </li>
            <li>
              <Link className="nav-link" to={"/contact"}>contact.</Link>
            </li>
          </ul>
          <ul className="menu-social">
            <li>
              <a href="https://twitter.com/gokulvenkats" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitterIcon} alt="twitterIcon" />
              </a>
            </li>
            <li>
              <a className="nav-link p-2" href="https://github.com/gokulvenkats" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={GithubIcon} alt="GithubIcon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
)

export default MyNavbar