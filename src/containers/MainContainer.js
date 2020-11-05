import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DisplayContainer from './DisplayContainer'




const villagersURL = 'http://localhost:3000/villagers'
const fishURL = 'http://localhost:3000/fish'
const bugsURL = 'http://localhost:3000/bugs'

class MainContainer extends Component{

    state = {
        villagers: [],
        fish: [],
        bugs: []
      }
    
    componentDidMount(){
        fetch(villagersURL)
        .then(res => res.json())
        .then(villagers => {
            this.setState({
                villagers
            })
        })
        fetch(fishURL)
        .then(res => res.json())
        .then(fish => {
            this.setState({
                fish
            })
        })
        fetch(bugsURL)
        .then(res => res.json())
        .then(bugs => {
            this.setState({
                bugs
            })
        })
    }


    render () {
        return (
        <BrowserRouter>

         <div className='section' >
            <h1>Main Container</h1>
            <Navbar 
            handleClick={this.handleClick}
            />
            <Switch>
                
                <DisplayContainer 
                villagers={this.state.villagers}
                />
            </Switch>
         </div>

        </BrowserRouter>
       
    )
    }
    
}

export default MainContainer