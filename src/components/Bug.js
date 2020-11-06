import React from 'react'


const Bug = (props) => {

    let {bug} = props

    return (
        <div className="section acnh-label-menu four wide column">
            <h4 className="acnh-text">{bug.name}</h4>
            <img src={bug.image_cute} alt={`${bug.name}'s icon`}/>
        </div>
    )
}

export default Bug