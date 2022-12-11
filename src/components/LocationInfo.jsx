import React from 'react'

const LocationInfo = ({ location }) => {
    return (
        <article className='location-card'>
            <h1 className='location-card_title'>{location?.name}</h1>
            <ul className='location-card_list'>
                <li className='location-card_item'><span>Type: </span>{location?.type}</li>
                <li className='location-card_item'><span>Dimension: </span>{location?.dimension}</li>
                <li className='location-card_item'><span>Population: </span>{location?.residents.length}</li>
            </ul>

        </article>
    )
}

export default LocationInfo