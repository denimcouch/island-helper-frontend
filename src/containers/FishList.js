import { render } from "@testing-library/react";
import React, { Component } from "react";
import FishModal from "../components/FishModal";
import SearchBar from '../components/SearchBar'

class FishList extends Component {
  render() {
    let { fish } = this.props;
    return (
      <div className="card-container section teal">
        <h3 className="acnh-text">Fish</h3>
        <br />
        <div className="ui center aligned grid">
          {fish.map((fish) => (
            <FishModal fish={fish} key={fish.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default FishList;
