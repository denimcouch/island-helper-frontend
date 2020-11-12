import React from "react";
import pic from '../pics/alex_avi.jpg'

const UserSideBar = (props) => {
  let { user } = props;

  const capitalizeWords = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div id="user-sidebar" className="section teal">
      {/* <div id="user-image">
          <img src={pic} alt="user" />
      </div> */}
      <div id="user-info">
        <h1 className="acnh-text">{user.name}</h1>
        <h3>Island: {capitalizeWords(user.town_name)}</h3>
        <h3>Hemisphere: {capitalizeWords(user.hemisphere)}</h3>
        <h3># of Villagers: {user.villagers.length}</h3>
        <h3>Bugs Caught: {user.bugs.length}</h3>
        <h3>Fish Caught: {user.fishes.length}</h3>
      </div>
    </div>
  );
};

export default UserSideBar;
