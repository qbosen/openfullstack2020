import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Person.js";
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const shownPersons = [...persons.filter(it => it.name.toLowerCase().startsWith(filter))]

    const onNameChange = (event) => setNewName(event.target.value)
    const onNumberChange = (event) => setNewNumber(event.target.value)
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (persons.find(it => it.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons([...persons, {name: newName, number: newNumber}])
        }
    }
    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
            axios
                .get('http://localhost:3001/persons')
                .then(res => setPersons(res.data))
        }
        , [])

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter onFilterChange={onFilterChange} filter={filter}/>
            <h3>add a new</h3>
            <PersonForm onNumberChange={onNumberChange} newNumber={newNumber}
                        onNameChange={onNameChange} newName={newName}
                        onFormSubmit={onFormSubmit}/>
            <h3>Numbers</h3>
            <Persons persons={shownPersons}/>
        </div>
    )
}

export default App