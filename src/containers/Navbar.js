import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = ({match}) => {



    return (
        <div className="section acnh-label-menu">
            <NavLink 
            to={`${match.url}`}
            >
                <button className="acnh-btn acnh-label" >Home</button>
            </NavLink>
            <NavLink 
            to={`${match.url}/villagers`}
            >
                <button className="acnh-btn acnh-label" >Villagers</button>
            </NavLink>
            <NavLink 
            to={`${match.url}/bugs`}
            >
                <button className="acnh-btn acnh-label" >Bugs</button>
            </NavLink>
            <NavLink 
            to={`${match.url}/fish`}
            >
                <button className="acnh-btn acnh-label" >Fish</button>
            </NavLink>
        </div>
    )
}

export default Navbar