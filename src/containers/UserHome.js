import React from "react";
import VillagersList from "./VillagersList";
import BugsList from "./BugsList";
import FishList from "./FishList";

const UserHome = (props) => {
  let { user } = props;
  console.log(user.villagers);

  return (
    <div>
      <h2>{`${user.name}'s Home Page`}</h2>
      <div>
        <VillagersList villagers={user.villagers} />
        <BugsList bugs={user.bugs} />
        <FishList fish={user.fishes} />
      </div>
    </div>
  );
};

export default UserHome;

// {/* <h3 className="acnh-text">{user.name}</h3>
//       <br />
//       <div className="ui center aligned grid"> */}
//         {/* {user.villagers.map((villager) => {
//           <Villager villager={villager} />;
//         })} */}{/* </div> */}
