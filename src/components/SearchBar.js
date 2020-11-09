import React from "react";

const SearchBar = (props) => {
  let { handleSearch, handleSpeciesFilter, handlePersonalityFilter } = props;

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={null}
          onChange={(e) => console.log("I'm clicked!", e.target.value)}
        />
        Alphabetically
      </label>
      {/* <label>
        <input
          type="radio"
          value="Birthdate"
          checked={null}
          onChange={(e) => console.log("I'm clicked!", e.target.value )}
        />
        Birthdate
      </label> */}
      <br />
      <br />

      <label>
        <strong>Filter by Species:</strong>
        <select onChange={(e) => handleSpeciesFilter(e.target.value)}>
          <option value="">All</option>
          {props.species.map((species) => (
            <option value={species}>{species}</option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <label>
        <strong>Filter by Personality:</strong>
        <select onChange={(e) => handlePersonalityFilter(e.target.value)}>
          <option value="">All</option>
          {props.personalities.map((p) => (
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

export default SearchBar;
