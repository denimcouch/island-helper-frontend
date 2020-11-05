import React, {Component} from 'react'
import './App.css';

class App extends Component{

  state = {
    villagers: [],
    fish: [],
    bugs: []
  }

  render () {
    return (
    <div className="App wrapper">
      <h1 className="acnh-text">Hello World</h1>
    </div>
  );
  }
  

}

export default App;
