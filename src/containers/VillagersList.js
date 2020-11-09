import React, { Component } from "react";
import VillagerModal from "../components/VillagerModal";
import SearchBar from '../components/SearchBar'

class VillagersList extends Component {

  state = {
    searchTerm: '',
    speciesFilter: '',
    personalityFilter: '',
    sortTerm: ''
  }

  handleSearch = (searchWord) => {
    this.setState({
      searchTerm: searchWord
    })
  }
  searchVillagers = ( ) => {
    return this.props.villagers.filter( villager => villager.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  handleSpeciesFilter = (filterWord) => {
    console.log("I'm filtering based on", filterWord)
    this.setState({
      speciesFilter: filterWord
    })
  }
  handlePersonalityFilter = (filterWord) => {
    console.log("I'm filtering based on", filterWord)
    this.setState({
      personalityFilter: filterWord
    })
  }

  villagerSpecies = () => {
    let speciesArray = []
    this.props.villagers.forEach(villager => {
     return speciesArray.includes(villager.species) ? null : speciesArray.push(villager.species)})
    return speciesArray
  }
  villagerPersonalities = () => {
    let personalityArray = []
    this.props.villagers.forEach(villager => {
     return personalityArray.includes(villager.personality) ? null : personalityArray.push(villager.personality)})
    return personalityArray
  }

  render() {
    let villagers = this.searchVillagers().filter( villager => villager.species.includes(this.state.speciesFilter) && villager.personality.includes(this.state.personalityFilter))
    return (
      <>
      <div className="search-bar section teal acnh-text">
        <SearchBar personalities={this.villagerPersonalities()} species={this.villagerSpecies()} handleSearch={this.handleSearch} handleSpeciesFilter={this.handleSpeciesFilter} handlePersonalityFilter={this.handlePersonalityFilter} />
      </div>
      <div className="card-container section teal">
        <h3 className="acnh-text">Villagers</h3>
        <br />
        <div className="ui center aligned grid">
          {villagers.map((villager) => (
            <VillagerModal villager={villager} key={villager.id} />
          ))}
        </div>
      </div>
      </>
    );
  }
}

export default VillagersList;
