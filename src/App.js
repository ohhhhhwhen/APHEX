import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Gallery from "./components/pages/Gallery";
import Artwork from "./components/pages/Artwork";
import "bootstrap/dist/css/bootstrap.min.css";
import MP3 from "./components/music/Shells x Hollaback Girl (Extended).mp3";
import ReactAudioPlayer from "react-audio-player";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container">
          <ReactAudioPlayer src={MP3} autoPlay/>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Gallery" exact={true} component={Gallery} />
          <Route path="/Artwork" exact={true} component={Artwork} />
        </div>
      </Router>
    );
  }
}

export default App;
