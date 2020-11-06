import React from 'react'
import UserSideBar from './UserSideBar'
import CardContainer from './CardContainer'

const DisplayContainer = (props) => {

    let {villagers} = props

    return (
        <div id="display-container" className="title friend">
            <h1>Display Container</h1>
            <UserSideBar />
            <CardContainer 
            villagers={villagers}
            />
        </div>
    )
}

export default DisplayContainer