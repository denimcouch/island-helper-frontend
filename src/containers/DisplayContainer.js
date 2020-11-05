import React from 'react'
import UserSideBar from './UserSideBar'
import CardContainer from './CardContainer'

const DisplayContainer = (props) => {

    return (
        <div id="display-container" className="title friend">
            <UserSideBar />
            <CardContainer />
        </div>
    )
}

export default DisplayContainer