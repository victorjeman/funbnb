const Filter = ({ setLocationFilter, setMaxPeopleFilter }) => {
  return (
    <div>
      <select
        placeholder='Location'
        name=''
        id=''
        onChange={(e) => {
          setLocationFilter(e.target.value)
        }}>
        <option value='All'>All</option>
        <option value='Suceava'>Suceava</option>
        <option value='Cluj'>Cluj</option>
        <option value='Bucuresti'>Bucuresti</option>
      </select>

      <select
        placeholder='Max people'
        name=''
        id=''
        onChange={(e) => {
          setMaxPeopleFilter(e.target.value)
        }}>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  )
}

export default Filter
