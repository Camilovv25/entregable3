import axios from 'axios'
import React, { useEffect, useState } from 'react'


const LocationFilter = ({ locationName, getNewLocation }) => {
    const [locationsOptions, setlocationsOptions] = useState()

    useEffect(() => {
        if (!locationName) return setlocationsOptions()
        const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`
        axios.get(URL)
            .then(res => setlocationsOptions(res.data.results))
            .catch(err => console.log(err))
    }, [locationName])

    return (
        <ul className='filter_options'>
            {
                locationsOptions?.map(locationsOption => <li className='filter-item' onClick={() => getNewLocation(locationsOption.url, '')} key={locationsOption.url}>{locationsOption.name}</li>)

            }
        </ul>
    )
}

export default LocationFilter