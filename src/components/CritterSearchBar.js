import React from "react";

const CritterSearchBar = (props) => {

    let { handleSearch, handleLocationFilter, handleRarityFilter, handleSort } = props
  
    return (
    <div>
      <strong>Sort by: </strong>
      <form>
        <label><input
          type="radio"
          name="sort"
          value="Alphabetically"
          onChange={(e) => handleSort(e.target.value)}
        /> Alphabetically</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value="lowToHigh"
          onChange={(e) => handleSort(e.target.value )}
        />Price (low to high)</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value="highToLow"
          onChange={(e) => handleSort(e.target.value )}
        />Price (high to low)</label>
        <br />
        <label><input
          type="radio"
          name="sort"
          value=""
          onChange={(e) => handleSort(e.target.value )}
        />Default</label>
      </form>
      <br />
      <br />

      <label>
      <strong>Filter by Rarity: </strong>
        <select onChange={(e) => handleRarityFilter(e.target.value)}>
          <option value="">All</option>
          {props.rarities.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <label>
        <strong>Filter by Location: </strong>
        <select onChange={(e) => handleLocationFilter(e.target.value)}>
          <option value="">All</option>
          {props.locations.map((p) => (
            <option value={p}>{p}</option>
          ))}
        </select>
      </label>
      <br />
      <br />

      <label>
        <strong>Search</strong>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <i className="search icon" />
          </div>
        </div>
      </label>
    </div>
  );
};

export default CritterSearchBar;