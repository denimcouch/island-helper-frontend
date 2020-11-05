import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import MainContainer from './containers/MainContainer';


class App extends Component{

  
  render () {
    return (
    <div className="App wrapper">
      <Header />
      <MainContainer/>
    </div>
  );
  }
  

}

export default App;
