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
    let sortedBugs = this.sortBugs()
    return sortedBugs.filter((bug) =>
      bug.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  handleLocationFilter = (locationWord) => {
    this.setState({ locationFilter: locationWord });
  };

  handleRarityFilter = (rarityWord) => {
    this.setState({ rarityFilter: rarityWord });
  };

  handleSort = (sortTerm) => {
    this.setState({ sortTerm });
  };

  bugsLocation = () => {
    let locationsArray = [];
    this.props.bugs.forEach((bug) => {
      return locationsArray.includes(bug.availability[0].location)
        ? null
        : locationsArray.push(bug.availability[0].location);
    });
    return locationsArray;
  };

  bugsRarity = () => {
    let raritysArray = [];
    this.props.bugs.forEach((bug) => {
      return raritysArray.includes(bug.availability[0].rarity)
        ? null
        : raritysArray.push(bug.availability[0].rarity);
    });
    return raritysArray;
  };

  sortBugs = () => {
    switch (this.state.sortTerm){
      case "Alphabetically":
        return this.props.bugs.sort((a,b) => a.name.localeCompare(b.name));
        break;
      case "lowToHigh":
        return this.props.bugs.sort((a,b) => a.price - b.price);
        break;  
      case "highToLow":
        return this.props.bugs.sort((a,b) => b.price - a.price);
        break; 
      default:
        return this.props.bugs.sort((a,b) => a.id - b.id )
    }
  }

  render() {
    let bugs = this.searchBugs().filter(
      (bug) =>
        bug.availability[0].location.includes(this.state.locationFilter) &&
        bug.availability[0].rarity.includes(this.state.rarityFilter)
    );

    return (
      <>
        <div className="card-container section teal">
          <h3 className="acnh-text">Bugs</h3>
          <br />
          <div className="ui center aligned grid">
            {bugs.map((bug) => (
              <BugModal bug={bug} key={bug.id} page={this.props.page} manageBugs={this.props.manageBugs} />
            ))}
          </div>
        </div>
        {this.props.page === 'home' ? null :
        <div className="search-bar section teal acnh-text">
          <CritterSearchBar
            rarities={this.bugsRarity()}
            locations={this.bugsLocation()}
            handleSearch={this.handleSearch}
            handleLocationFilter={this.handleLocationFilter}
            handleRarityFilter={this.handleRarityFilter}
            handleSort={this.handleSort}
          />
        </div>}
      </>
    );
  }
}

export default BugsList;
