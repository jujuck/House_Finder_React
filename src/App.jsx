import { useState } from 'react';
import houses from './data/houses'
import './App.css'
import HouseCard from './components/HouseCard'

function App() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [available, setAvailable] = useState(false)

  return (
    <div className="App">
      <header>
        <h1>🏠 Find your home</h1>
    <h2>TEST FOR GITHUB WORKFLOW</h2>
      </header>
      <div className="wrapper">
        <div className="filters">
          <input
            type="text"
            className="search-input"
            placeholder="🔎 Type to search"
            id="searchInput"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select
            className="select"
            name="home"
            id="homeType"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="All">All</option>
            <option value="Flat">Flat</option>
            <option value="House">House</option>
          </select>
          <div>
            <label htmlFor="available">Show only Available </label>
            <input
              type="checkbox"
              className="available-checkbox"
              name="checkbox"
              checked={available}
              onChange={(event) => setAvailable(event.target.checked)}
            />
          </div>
        </div>
        <section className="cards" id="displayHouses">
          {houses
            .filter(house => {
              return ((house.name.includes(search)) &&
                (house.type === type || type === "All") &&
                (house.available === available || !available))
            })
            .map(house => <HouseCard house={house} key={house.id} />)}
        </section>
      </div>
    </div>
  )
}

export default App
