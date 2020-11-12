import React from "react";
import VillagersList from "./VillagersList";
import BugsList from "./BugsList";
import FishList from "./FishList";

const UserHome = (props) => {
  let { user, deleteFromTown, deleteBugFromTown } = props;
  let villagers = user.villagers

  return (
    <div>
      <div>
        <VillagersList villagers={villagers} page="home" manageTown={deleteFromTown} />
        <BugsList bugs={user.bugs} page="home" manageBugs={deleteBugFromTown} />
        <FishList fish={user.fishes} page="home"/>
      </div>
    </div>
  );
};

export default UserHome;
