import React from 'react'


const Fish = (props) => {

    let {fish} = props

    return (
        <div className="section acnh-label-menu four wide column">
            <h4 className="acnh-text">{fish.name}</h4>
            <img src={fish.image_cute} alt={`${fish.name}'s icon`}/>
        </div>
    )
}

export default Fish