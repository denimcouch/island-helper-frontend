import React from "react";
import VillagersList from "./VillagersList";
import BugsList from "./BugsList";
import FishList from "./FishList";

const UserHome = (props) => {
  let { user } = props;
  let villagers = user.user_villagers.map( element => element.villager)
  console.log("Villagers in UserHome",villagers);

  return (
    <div>
      <div>
        <VillagersList villagers={villagers} page="home"/>
        <BugsList bugs={user.bugs} page="home"/>
        <FishList fish={user.fishes} page="home"/>
      </div>
    </div>
  );
};

export default UserHome;
