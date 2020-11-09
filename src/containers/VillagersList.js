import React, { Component } from "react";
import VillagerModal from "../components/VillagerModal";
import SearchBar from '../components/SearchBar'

class VillagersList extends Component {
  render() {
    let { villagers } = this.props;
    return (
      <div className="card-container section teal">
        <h3 className="acnh-text">Villagers</h3>
        <br />
        <div className="ui center aligned grid">
          {villagers.map((villager) => (
            <VillagerModal villager={villager} key={villager.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default VillagersList;
