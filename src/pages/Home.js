import React, { Component } from "react";
import { Container } from "atomize";
import "./Home.css";
import API from "../utils/API";

const images = ["basquiat", "warhol"];

class Home extends Component {
  state = {
    results: []
  };

  componentDidMount = () => {
    var randomNumber = Math.floor(Math.random() * 2);
    console.log(randomNumber);
    API.artwork(images[randomNumber])
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        {this.state.results &&
          this.state.results.map(result => (
            <img
              id="gifBk"
              key={result.id}
              src={result.images.downsized_large.url}
              height="380px"
              width="380px"
            />
          ))}
      </Container>
    );
  }
}

export default Home;
