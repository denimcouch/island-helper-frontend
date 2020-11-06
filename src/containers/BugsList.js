import React from "react";
import Bug from "../components/Bug";

const BugsList = (props) => {
  let { bugs } = props;

  return (
    <div className="card-container section teal">
      <h3 className="acnh-text">Bugs</h3>
      <br />
      <div className="ui center aligned grid">
        {bugs.map((bug) => (
          <Bug bug={bug} key={bug.id} />
        ))}
      </div>
    </div>
  );
};

export default BugsList;