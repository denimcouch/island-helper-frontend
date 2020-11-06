import React, { Component } from "react";
import VillagersList from "./VillagersList";


class CardContainer extends Component {
  render() {
    let { villagers } = this.props;
    return (
      <div id="card-container" className="section teal">
        <h1 className="acnh-text">Card Container</h1>
        <VillagersList villagers={villagers} />
      </div>
    );
  }
}

export default CardContainer;
