import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './containers/LandingPage'

class App extends Component {

  state = {
  
  }

  signUpUser = (userObj) => {
    const userOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userObj)
    }

    fetch('http://localhost:3000/users', userOptions)
    .then(res => res.json())
    .then(data => console.log("This is the data from POST", data))
  }

  render() {
    return (
      <Router>
        <div className="App wrapper">
          <Header />
          <Route exact path="/" render={() => <LandingPage signUpUser={this.signUpUser} />} />
          <Route exact path='/home' render={routerProps => <MainContainer {...routerProps} />} />
          
        </div>
      </Router>
    );
  }
}

export default App;
