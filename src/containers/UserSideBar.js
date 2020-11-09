import React from 'react'

const UserSideBar = (props) => {
    let {user} = props
    return (
        <div id='user-sidebar' className="section teal">
            <h1 className="acnh-text">{user.name}</h1>
            <h3>Island: {user.town_name}</h3>
            <h3>Hemisphere: {user.hemisphere}</h3>
            <h3># of Villagers: {user.villagers.length}</h3>
            <h3>Bugs Caught: {user.bugs.length}</h3>
            <h3>Fish Caught: {user.fishes.length}</h3>
        </div>
    )
}

export default UserSideBar