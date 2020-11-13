import React from "react";
import VillagersList from "./VillagersList";
import VillagerModal from "../components/VillagerModal";
import BugsList from "./BugsList";
import FishList from "./FishList";
import BugModal from "../components/BugModal";
import FishModal from "../components/FishModal";

const UserHome = (props) => {
  let { user, deleteFromTown, deleteBugFromTown, deleteFishFromTown } = props;
  let villagers = user.villagers;
  let bugs = user.bugs;
  let fishes = user.fishes

  return (
    <div>
      <div id="user-container" className="section teal">
        <h3>{user.name}'s Villagers</h3>

        {/* <VillagersList villagers={villagers} page="home" manageTown={deleteFromTown} /> */}
        <div className="ui center aligned grid">
          {villagers.map((villager) => (
            <VillagerModal
              villager={villager}
              page="home"
              manageTown={deleteFromTown}
            />
          ))}
        </div>
      </div>
      <div id="user-container" className="section teal" >
        <h3>{user.name}'s Bugs</h3>
        {/* <BugsList bugs={user.bugs} page="home" manageBugs={deleteBugFromTown} /> */}
        <div className="ui center aligned grid">
            {bugs.map( bug => <BugModal bug={bug} page="home" manageBugs={deleteBugFromTown} />)}
        </div>
      </div>
      <div id="user-container" className="section teal" >
        <h3>{user.name}'s Fish</h3>
        <div className="ui center aligned grid">
            {fishes.map( fish => <FishModal fish={fish} page="home" manageFish={deleteFishFromTown} />)}
        </div>
        {/* <FishList fish={user.fishes} page="home" manageFish={deleteFishFromTown} /> */}
      </div>
    </div>
  );
};

export default UserHome;
