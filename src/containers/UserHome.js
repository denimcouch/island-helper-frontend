import React from "react";
import VillagersList from "./VillagersList";
import BugsList from "./BugsList";
import FishList from "./FishList";

const UserHome = (props) => {
  let { user, deleteFromTown, deleteBugFromTown, deleteFishFromTown } = props;
  let villagers = user.villagers

  return (
    <div>
      <div id="user-villager-container">
        <VillagersList villagers={villagers} page="home" manageTown={deleteFromTown} />
      </div>
      <div id="user-bug-container">
        <BugsList bugs={user.bugs} page="home" manageBugs={deleteBugFromTown} />
      </div>   
      <div id="user-fish-container">
        <FishList fish={user.fishes} page="home" manageFish={deleteFishFromTown} />
      </div>
    </div>
  );
};

export default UserHome;
