import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {


    return (
        <div className="section acnh-label-menu">
            <NavLink 
            to="/homepage"
            >
                <button className="acnh-btn acnh-label" >Home</button>
            </NavLink>
            <NavLink 
            to='/villagers'
            >
                <button className="acnh-btn acnh-label" >Villagers</button>
            </NavLink>
            <NavLink 
            to='/bugs'
            >
                <button className="acnh-btn acnh-label" >Bugs</button>
            </NavLink>
            <NavLink 
            to='/fish'
            >
                <button className="acnh-btn acnh-label" >Fish</button>
            </NavLink>
        </div>
    )
}

export default Navbar