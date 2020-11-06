import React from "react";
import Villager from "../components/Villager";
import VillagerModal from '../components/VillagerModal'

const VillagersList = (props) => {
  let { villagers } = props;
  console.log('These are the props in VillagersList', props)
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
};

export default VillagersList;
