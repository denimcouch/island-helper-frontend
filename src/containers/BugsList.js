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

  handleLocationFilter = (locationWord) => {
    console.log(locationWord)
  }

  bugsLocation = () => {
    let locationsArray = [];
    this.props.bugs.forEach((bug) => {
      return locationsArray.includes(bug.availability[0].location)
        ? null
        : locationsArray.push(bug.availability[0].location);
    });
    return locationsArray;
  }
  
  render() {
    let { bugs } = this.props;
    //console.log("bugs list", bugs)

    return (
      <>
        <div className="search-bar section teal acnh-text">
          <CritterSearchBar locations={this.bugsLocation()} handleSearch={this.handleSearch} handleLocationFilter={this.handleLocationFilter}/>
        </div>
        <div className="card-container section teal">
          <h3 className="acnh-text">Bugs</h3>
          <br />
          <div className="ui center aligned grid">
            {this.searchBugs().map((bug) => (
              <BugModal bug={bug} key={bug.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default BugsList;
