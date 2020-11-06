import React from 'react'


const Villager = (props) => {

    let {villager} = props

    return (
        <div className="section teal four wide column">
            <h4 className="acnh-text">{villager.name}</h4>
            <img src={villager.icon} alt={`${villager.name}'s icon`}/>
        </div>
    )
}

export default Villager