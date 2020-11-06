import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './containers/LandingPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App wrapper">
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path='/home' render={routerProps => <MainContainer {...routerProps} />} />
          
        </div>
      </Router>
    );
  }
}

export default App;
