import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
import MyNavbar from "./components/Nav";
// import Footer from './components/footer';
import Home from "./components/Home";
import Story from "./components/Story";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import About from "./components/About";
import Footer from "./components/Footer";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLDWeyMbd4SWtpNAf6429a2LtO1xc6_58",
  projectId: "gokulvenkat-xyz-site",
  appId: "1:1055455645310:web:bcabdc12e2af2e75f6122f",
  measurementId: "G-S4BDBZSGQ9",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}
        <main>
          <MyNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/skill" component={Skill} />
            <Route exact path="/story" component={Story} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about-me" component={About} />
          </Switch>
          <Footer />
        </main>
      </Router>
    );
  }
}

// export default App;
