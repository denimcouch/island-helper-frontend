import { render } from "@testing-library/react";
import React, { Component } from "react";
import FishModal from "../components/FishModal";
import CritterSearchBar from '../components/CritterSearchBar'

class FishList extends Component {
  state = {
    searchTerm: "",
    rarityFilter: "",
    locationFilter: "",
    sortTerm: "",
    fish: [],
  };

  handleSearch = (searchWord) => {
    this.setState({
      searchTerm: searchWord,
    });
  };

  searchFish = () => {
    let sortedFish = this.sortFish()
    return sortedFish.filter((fish) =>
      fish.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
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

  fishLocation = () => {
    let locationsArray = [];
    this.props.fish.forEach((fish) => {
      return locationsArray.includes(fish.availability[0].location)
        ? null
        : locationsArray.push(fish.availability[0].location);
    });
    return locationsArray;
  };

  fishRarity = () => {
    let raritysArray = [];
    this.props.fish.forEach((fish) => {
      return raritysArray.includes(fish.availability[0].rarity)
        ? null
        : raritysArray.push(fish.availability[0].rarity);
    });
    return raritysArray;
  };

  sortFish = () => {
    switch (this.state.sortTerm){
      case "Alphabetically":
        return this.props.fish.sort((a,b) => a.name.localeCompare(b.name));
        break;
      case "lowToHigh":
        return this.props.fish.sort((a,b) => a.price - b.price);
        break;  
      case "highToLow":
        return this.props.fish.sort((a,b) => b.price - a.price);
        break; 
      default:
        return this.props.fish.sort((a,b) => a.id - b.id )
    }
  }
  render() {
    let fish = this.searchFish().filter(
      (fish) =>
        fish.availability[0].location.includes(this.state.locationFilter) &&
        fish.availability[0].rarity.includes(this.state.rarityFilter)
    );
    return (
      <>
      <div className="card-container section teal">
        <h3 className="acnh-text">Fish</h3>
        <br />
        <div className="ui center aligned grid">
          {fish.map((fish) => (
            <FishModal fish={fish} key={fish.id} manageFish={this.props.addFishToTown} />
          ))}
        </div>
      </div>
      {this.props.page === 'home' ? null :
      <div className="search-bar section teal acnh-text">
          <CritterSearchBar
            rarities={this.fishRarity()}
            locations={this.fishLocation()}
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

export default FishList;
