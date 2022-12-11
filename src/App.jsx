import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  /*------useStates-----*/
  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("")
  const [showError, setShowError] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(10)

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = location?.residents.slice(firstCardIndex, lastCardIndex)

  /*------Funciones------ */
  const getDataDimension = (idDimension) => {
    if (idDimension) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
      axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => {
          setShowError(true)
          setTimeout(() => {
            setShowError(false)
          }, 2000)
          console.log(err)
        })
    } else {
      alert("Enter a value")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const dimensionSearch = event.target.search.value
    getDataDimension(dimensionSearch)
    setLocationName('')
  }
  const handleChangeInput = (event) => {
    setLocationName(event.target.value)
  }
  const getNewLocation = (URL, name) => {
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
    setLocationName('')
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  /*-------useEffects------ */
  useEffect(() => {
    const randomDimension = getRandomNumber(126)
    getDataDimension(randomDimension)
  }, [])

  return (
    <div className="App">
      <header className='App-header'>
        <img src="https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png" alt="" />
        <section className='search-box'>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <input className='search-bar' id='search' type="text" value={locationName} onChange={handleChangeInput} placeholder='Search a dimension' />
              <button onClick={() => setCurrentPage(1)} type='submit'>Search</button>
              {
                showError ? <ErrorMessage /> : ""
              }

              <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
            </div>
          </form>

        </section>
      </header>
      <LocationInfo location={location} />
      <ResidentList location={currentCards} />
      <Pagination totalCards={location?.residents.length} cardsPerPage={cardsPerPage} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
