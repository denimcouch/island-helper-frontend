import React from 'react'
import UserSideBar from './UserSideBar'
import {Route} from 'react-router-dom'
import VillagersList from './VillagersList'
import BugsList from './BugsList'
import FishList from './FishList'
import UserHome from './UserHome'

const DisplayContainer = (props) => {

    let {villagers, fish, bugs, user} = props

    return (
        <div id="display-container" className="title friend">
            <UserSideBar user={user}/>
            <Route exact path="/homepage" render={routerProps => <UserHome {...routerProps} user={user} />} />
            <Route exact path="/villagers" render={routerProps => <VillagersList {...routerProps} villagers={villagers}/>} />
            <Route exact path="/bugs" render={routerProps => <BugsList {...routerProps} bugs={bugs}/>} />
            <Route exact path="/fish" render={routerProps => <FishList {...routerProps} fish={fish}/>} />
        </div>
    )
}

export default DisplayContainer