import React from 'react'
import ResidentInfo from './ResidentInfo'

const ResidentList = ({ location }) => {
    return (
        <section className='residents-container'>
            {
                location?.map(urlResident => <ResidentInfo key={urlResident} URL={urlResident} />)
            }
        </section>
    )
}

export default ResidentList