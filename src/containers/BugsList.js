import { render } from "@testing-library/react";
import React, { Component } from "react";
import BugModal from "../components/BugModal";
import SearchBar from '../components/SearchBar'

class BugsList extends Component {
  render() {
    let { bugs } = this.props;
    //console.log("bugs list", bugs)
    return (
      <div className="card-container section teal">
        <h3 className="acnh-text">Bugs</h3>
        <br />
        <div className="ui center aligned grid">
          {bugs.map((bug) => (
            <BugModal bug={bug} key={bug.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default BugsList;
