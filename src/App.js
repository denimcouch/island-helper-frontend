import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";

class App extends Component {
  state = {
    name: null,
  };

  signUpUser = (userObj) => {
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
        <div className="App wrapper">
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
        </div>
      </Router>
    );
  }
}

export default App;
