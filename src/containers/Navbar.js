import React from 'react'
import {useHistory} from 'react-router-dom'

const Navbar = (props) => {

    let history = useHistory()

    let handleClick = () => {
        history.push("/villagers")
    }

    return (
        <div className="section acnh-label-menu">
            <button className="acnh-btn acnh-label" >Home</button>
            <button className="acnh-btn acnh-label" onClick={() => handleClick()} >Villagers</button>
            <button className="acnh-btn acnh-label" >Bugs</button>
            <button className="acnh-btn acnh-label" >Fish</button>
        </div>
    )
}

export default Navbar