import { useEffect, useState } from 'react'

import Apartments from 'components/Apartments/Apartments'
import Filter from 'components/Filter/Filter'

import './App.css'

function App() {
  // Q: How to avoid using 2 useState variables for apartments?
  const [initialApartments, setInitialApartments] = useState([])
  const [apartaments, setApartments] = useState([])

  const [maxPeopleFilter, setMaxPeopleFilter] = useState(3)

  const [locationFilter, setLocationFilter] = useState('All')

  useEffect(() => {
    ;(async () => {
      const data = await window.fetch('/mock/apartaments.json')
      const apartaments = await data.json()

      setInitialApartments(apartaments)
      setApartments(apartaments)
    })()
  }, [])

  useEffect(() => {
    // Q: What happens if the apartments is an array of complex objects?
    if (locationFilter === 'All')
      return setApartments(initialApartments.filter((item) => item.maxPeople >= maxPeopleFilter))

    setApartments(
      initialApartments
        .filter((apartment) => apartment.location === locationFilter)
        .filter((apartment) => apartment.maxPeople >= maxPeopleFilter),
    )
  }, [locationFilter, maxPeopleFilter, initialApartments])

  return (
    <div className='App'>
      <Filter setLocationFilter={setLocationFilter} setMaxPeopleFilter={setMaxPeopleFilter} />
      <Apartments apartaments={apartaments} />
    </div>
  )
}

export default App
