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

  
  render() {
    let { bugs } = this.props;
    //console.log("bugs list", bugs)

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
