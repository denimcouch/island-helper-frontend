import React, { Component } from "react";
import BugModal from "../components/BugModal";
import CritterSearchBar from "../components/CritterSearchBar";

class BugsList extends Component {
  state = {
    searchTerm: "",
    rarityFilter: "",
    locationFilter: "",
    sortTerm: "",
    bugs: [],
  };

  componentDidMount(){
    this.formatBugs()
  }

  handleSearch = (searchWord) => {
    this.setState({
      searchTerm: searchWord,
    });
  };

  searchBugs = () => {
    // let sortedBugs = this.sortBugs()
    return this.props.bugs.filter((bug) =>
      bug.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  // formatBugs = () => {
  //   if (this.props.bugs.length === 0) {
  //     return [];
  //   } else {
  //     this.setState({
  //       bugs: this.props.bugs.map((bug) => {
  //         let formattedAvailability = JSON.parse(
  //           bug.availability.replace(/=>/g, ":")
  //         );
  //         bug.availability = formattedAvailability;
  //         console.log("Inside of formatBugs", bug);
  //         return bug;
  //       }),
  //     });
  //   }
  // };

  render() {
    console.log("Bugs in BugsList", this.props.bugs);
    return (
      <>
        <div className="search-bar section teal acnh-text">
          <CritterSearchBar handleSearch={this.handleSearch} />
        </div>
        <div className="card-container section teal">
          <h3 className="acnh-text">Bugs</h3>
          <br />
          <div className="ui center aligned grid">
            {this.props.bugs.map((bug) => (
              <BugModal bug={bug} key={bug.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default BugsList;
