import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(res => setCountries(res.data))
    }, [])

    const onFilterChange = (event) => setFilter(event.target.value)
    const shownCountries = [...countries.filter(it => it.name.startsWith(filter))]

    return (
        <div>
            <Filter filter={filter} onFilterChange={onFilterChange}/>
            <Countries countries={shownCountries}/>
        </div>)
}

export default App
