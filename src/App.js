import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import MainTheme from './audio/95.mp3'

class App extends Component {
  state = {
    name: null,
    song: ''
  };

  signUpUser = (userObj) => {
    this.setState({name: userObj.name})
    const userOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userObj),
    };

    fetch("http://localhost:3000/users", userOptions)
      .then((res) => res.json())
      .then((user) => {
        this.setState({ name: user.name });
      });
  };

  logInUser = (userObj) => {
    console.log("userObj from logInUser", userObj);
    this.setState({
      name: userObj.name,
    });
  };

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage
                signUpUser={this.signUpUser}
                logInUser={this.logInUser}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={(routerProps) => <MainContainer {...routerProps} name={this.state.name} />}
          />
          <audio id="bgm-player" src={MainTheme} type="audio/mpeg" volume='0.5' autoPlay controls loop/>
        </div>
      </Router>
    );
  }
}

export default App;
