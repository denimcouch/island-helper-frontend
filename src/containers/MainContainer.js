import React, { Component } from 'react'
import Navbar from './Navbar'

class MainContainer extends Component{

    state = {
        villagers: [],
        fish: [],
        bugs: []
      }

    render () {
        return (
        <div className="section green">
            <Navbar />
        </div>
    )
    }
    
}

export default MainContainer