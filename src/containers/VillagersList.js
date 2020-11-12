import React, { Component } from "react";
import VillagerModal from "../components/VillagerModal";
import VillagerSearchBar from "../components/VillagerSearchBar";

class VillagersList extends Component {
  state = {
    searchTerm: "",
    speciesFilter: "",
    personalityFilter: "",
    genderFilter: "",
    sortTerm: "",
  };

  handleSearch = (searchWord) => {
    this.setState({
      searchTerm: searchWord,
    });
  };
  searchVillagers = () => {
    let sortedVillagers = this.sortVillagers()
    return sortedVillagers.filter((villager) =>
      villager.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  handleSpeciesFilter = (filterWord) => {
    console.log("I'm filtering based on", filterWord);
    this.setState({
      speciesFilter: filterWord,
    });
  };
  handlePersonalityFilter = (filterWord) => {
    this.setState({
      personalityFilter: filterWord,
    });
  };
  handleGenderFilter = (filterWord) => {
    this.setState({
      genderFilter: filterWord
    })
  }

  handleSort = (sortWord) => {
    sortWord ? this.setState({sortTerm: "Alphabetically"}) : this.setState({sortTerm: ''})
  }
  sortVillagers = () => {
    switch (this.state.sortTerm){
      case "Alphabetically":
        return this.props.villagers.sort((a,b) => a.name.localeCompare(b.name));
        break;
      default:
        return this.props.villagers.sort((a,b) => a.id - b.id )
    }
  }

  villagerSpecies = () => {
    let speciesArray = [];
    this.props.villagers.forEach((villager) => {
      return speciesArray.includes(villager.species)
        ? null
        : speciesArray.push(villager.species);
    });
    return speciesArray;
  };
  villagerPersonalities = () => {
    let personalityArray = [];
    this.props.villagers.forEach((villager) => {
      return personalityArray.includes(villager.personality)
        ? null
        : personalityArray.push(villager.personality);
    });
    return personalityArray;
  };

  render() {
    let villagers = this.searchVillagers().filter(
      (villager) =>
        villager.species.includes(this.state.speciesFilter) &&
        villager.personality.includes(this.state.personalityFilter) &&
        villager.gender.includes(this.state.genderFilter)
    )
    return (
      <>
        <div className="card-container section teal">
          <h3 className="acnh-text">Villagers</h3>
          <br />
          <div className="ui center aligned grid">
            {villagers.map((villager) => (
              <VillagerModal villager={villager} key={villager.id} manageTown={this.props.manageTown} page={this.props.page} />
            ))}
          </div>
        </div>
      {this.props.page === 'home' ? null : 
        <div className="search-bar section teal acnh-text">
          <VillagerSearchBar
            personalities={this.villagerPersonalities()}
            species={this.villagerSpecies()}
            handleSearch={this.handleSearch}
            handleSpeciesFilter={this.handleSpeciesFilter}
            handlePersonalityFilter={this.handlePersonalityFilter}
            handleGenderFilter={this.handleGenderFilter}
            handleSort={this.handleSort}
          />
        </div> }
      </>
    );
  }
}

export default VillagersList;
