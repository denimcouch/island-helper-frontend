import React, { Component } from "react";
import Navbar from "./Navbar";
import DisplayContainer from "./DisplayContainer";
import {BrowserRouter as Router, Route} from 'react-router-dom'

const villagersURL = "http://localhost:3000/villagers";
const fishURL = "http://localhost:3000/fish";
const bugsURL = "http://localhost:3000/bugs";

class MainContainer extends Component {
  state = {
    villagers: [],
    fish: [],
    bugs: [],
    user: []
  };

  componentDidMount() {
    fetch(villagersURL)
      .then((res) => res.json())
      .then((villagers) => {
        this.setState({
          villagers,
        });
      });
    fetch(fishURL)
      .then((res) => res.json())
      .then((fish) => {
        this.setState({
          fish,
        });
      });
    fetch(bugsURL)
      .then((res) => res.json())
      .then((bugs) => {
        this.setState({
          bugs,
        });
      });
    fetch('http://localhost:3000/users/1')
    .then(res => res.json())
    .then(user => {
        this.setState({
            user: user
        })
    })
  }


  render() {
    return (
    <Router >
        <div className="section">
        <h1>Main Container</h1>
        <Navbar />
        <DisplayContainer villagers={this.state.villagers} fish={this.state.fish} bugs={this.state.bugs} user={this.state.user} />
      </div>
    </Router>
    );
  }
}

export default MainContainer;
