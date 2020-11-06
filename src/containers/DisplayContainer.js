import React from "react";
import UserSideBar from "./UserSideBar";
import { Route } from "react-router-dom";
import VillagersList from "./VillagersList";
import BugsList from "./BugsList";
import FishList from "./FishList";
import UserHome from "./UserHome";

const DisplayContainer = (props) => {
  let { villagers, fish, bugs, user, match } = props;

  return (
    <div id="display-container" className="title friend">
      <UserSideBar user={user} />
      <Route
        exact
        path={`${match.url}`}
        render={(routerProps) => <UserHome {...routerProps} user={user} />}
      />
      <Route
        exact
        path={`${match.url}/villagers`}
        render={(routerProps) => (
          <VillagersList {...routerProps} villagers={villagers} />
        )}
      />
      <Route
        exact
        path={`${match.url}/bugs`}
        render={(routerProps) => <BugsList {...routerProps} bugs={bugs} />}
      />
      <Route
        exact
        path={`${match.url}/fish`}
        render={(routerProps) => <FishList {...routerProps} fish={fish} />}
      />
    </div>
  );
};

export default DisplayContainer;
