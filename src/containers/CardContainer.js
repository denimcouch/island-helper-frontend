import React, { Component } from "react";
import VillagersList from "./VillagersList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";

class CardContainer extends Component {

  render() {
    let { villagers } = this.props;
    return (
      <BrowserRouter>
        <div id="card-container" className="section teal">
          <h1 className="acnh-text">Card Container</h1>
          <Switch>
            <Route
              exact
              path="/villagers"
              render={(routeProps) => (
                <VillagersList {...routeProps} villagers={villagers} />
              )}
            />
          </Switch>
          {/* <VillagersList 
            villagers={villagers}
            /> */}
        </div>
      </BrowserRouter>
    );
  }
  
}

export default CardContainer;
