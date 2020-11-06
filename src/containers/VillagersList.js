import React, { Fragment } from "react";
import Villager from "../components/Villager";

const VillagersList = (props) => {
  let { villagers } = props;

  return (
    <div className="card-container section teal">
      <h3 className="acnh-text">Villagers</h3>
      <br />
      <div className="ui center aligned grid">
        {villagers.map((villager) => (
          <Villager villager={villager} key={villager.id} />
        ))}
      </div>
    </div>
  );
};

export default VillagersList;
