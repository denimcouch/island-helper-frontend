import { render } from "@testing-library/react";
import React, { Component } from "react";
import BugModal from "../components/BugModal";

class BugsList extends Component {
  render() {
    let { bugs } = this.props;
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
