import React, { Component } from "react";
import Navbar from "./Navbar";
import DisplayContainer from "./DisplayContainer";
import { BrowserRouter as Router } from "react-router-dom";

const villagersURL = "http://localhost:3000/villagers";
const fishURL = "http://localhost:3000/fish";
const bugsURL = "http://localhost:3000/bugs";

class MainContainer extends Component {
  state = {
    villagers: [],
    fish: [],
    bugs: [],
    user: {
      id: 1,
      name: "",
      email: "",
      password: "",
      town_name: "",
      hemipshere: "",
      villagers: [],
      bugs: [],
      fishes: [],
    },
    userVillagers: [],
    userFish: [],
    userBugs: [],
  };

  componentDidMount() {
    fetch(villagersURL)
      .then((res) => res.json())
      .then((villagers) => {
        this.setState({
          villagers,
        });
      });
    fetch(fishURL)
      .then((res) => res.json())
      .then((fish) => {
        this.setState({
          fish,
        });
      });
    fetch(bugsURL)
      .then((res) => res.json())
      .then((bugs) => {
        this.setState({
          bugs,
        });
      });
    fetch(`http://localhost:3000/users/${this.props.name}`)
      .then((res) => res.json())
      .then((user) => {
        console.log("Component Mounted user", user);
        this.setState({
          user: {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
            password: user[0].password,
            town_name: user[0].town_name,
            hemisphere: user[0].hemisphere,
            villagers: user[0].villagers,
            bugs: user[0].bugs,
            fishes: user[0].fishes,
          },
        });
      });
    fetch("http://localhost:3000/user_villagers")
      .then((res) => res.json())
      .then((userVillagers) => {
        this.setState({
          userVillagers,
        });
      });
    fetch("http://localhost:3000/user_bugs")
      .then((res) => res.json())
      .then((userBugs) => {
        this.setState({
          userBugs,
        });
      });
    fetch("http://localhost:3000/user_fishes")
      .then((res) => res.json())
      .then((userFish) => {
        this.setState({
          userFish,
        });
      });
  }

  addVillagerToTown = (object) => {
    fetch("http://localhost:3000/user_villagers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        villager_id: object.id,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          user: user,
        });
        return fetch("http://localhost:3000/user_villagers");
      })
      .then((res) => res.json())
      .then((userVillagers) => {
        this.setState({
          userVillagers,
        });
      });
  };
  deleteVillagerFromTown = (object) => {
    let villagerArray = this.state.userVillagers.filter((uv) =>
      uv.villager_id === object.id ? uv : null
    );

    console.log("Villager Array", villagerArray);

    let deletedUV = villagerArray.filter((element) =>
      element.user_id === this.state.user.id ? element.id : null
    )[0].id;

    console.log("Deleted UserVillager", deletedUV);
    fetch(`http://localhost:3000/user_villagers/${deletedUV}`, {
      method: "DELETE",
    });

    this.setState({
      user: {
        ...this.state.user,
        villagers: [
          ...this.state.user.villagers.filter(
            (villager) => villager.id !== object.id
          ),
        ],
      },
    });
  };

  addBugToTown = (object) => {
    fetch("http://localhost:3000/user_bugs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        bug_id: object.id,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          user: user,
        });
        return fetch("http://localhost:3000/user_bugs");
      })
      .then((res) => res.json())
      .then((userBugs) => {
        this.setState({
          userBugs,
        });
      });
  };
  deleteBugFromTown = (object) => {
    let bugArray = this.state.userBugs.filter((uv) =>
      uv.bug_id === object.id ? uv : null
    );

    console.log("bug Array", bugArray);

    let deletedUV = bugArray.filter((element) =>
      element.user_id === this.state.user.id ? element.id : null
    )[0].id;

    console.log("Deleted Userbug", deletedUV);
    fetch(`http://localhost:3000/user_bugs/${deletedUV}`, {
      method: "DELETE",
    });

    this.setState({
      user: {
        ...this.state.user,
        bugs: [...this.state.user.bugs.filter((bug) => bug.id !== object.id)],
      },
    });
  };

  addFishToTown = (object) => {
    fetch("http://localhost:3000/user_fishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        fish_id: object.id,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        this.setState({
          user: user,
        });
        return fetch("http://localhost:3000/user_fishes");
      })
      .then((res) => res.json())
      .then((userFish) => {
        this.setState({
          userFish,
        });
      });
  };
  deleteFishFromTown = (object) => {
    let fishArray = this.state.userFish.filter((uv) =>
      uv.fish_id === object.id ? uv : null
    );

    console.log("fish Array", fishArray);

    let deletedUV = fishArray.filter((element) =>
      element.user_id === this.state.user.id ? element.id : null
    )[0].id;

    console.log("Deleted Userfish", deletedUV);
    fetch(`http://localhost:3000/user_fishes/${deletedUV}`, {
      method: "DELETE",
    });

    this.setState({
      user: {
        ...this.state.user,
        fishes: [...this.state.user.fishes.filter((fish) => fish.id !== object.id)],
      },
    });
  };

  showDisplayContainer = () => {
    if (this.state.villagers.length === 0) {
      return null;
    } else {
      return (
        <DisplayContainer
          villagers={this.state.villagers}
          fish={this.state.fish}
          bugs={this.state.bugs}
          user={this.state.user}
          match={this.props.match}
          addVillagerToTown={this.addVillagerToTown}
          deleteVillagerFromTown={this.deleteVillagerFromTown}
          addBugToTown={this.addBugToTown}
          deleteBugFromTown={this.deleteBugFromTown}
          addFishToTown={this.addFishToTown}
          deleteFishFromTown={this.deleteFishFromTown}
        />
      );
    }
  };

  render() {
    return (
      <Router>
        <div className="section">
          <Navbar match={this.props.match} />
          {this.showDisplayContainer()}
        </div>
      </Router>
    );
  }
}

export default MainContainer;
