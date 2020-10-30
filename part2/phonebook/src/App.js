import React, {useEffect, useState} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Person.js";
import personsService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const shownPersons = [...persons.filter(it => it.name.toLowerCase().startsWith(filter.toLowerCase()))]

    const onNameChange = (event) => setNewName(event.target.value)
    const onNumberChange = (event) => setNewNumber(event.target.value)
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (persons.find(it => it.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const person = {name: newName, number: newNumber}
            personsService.create(person)
                .then(it => {
                    setPersons(persons.concat(it))
                    setNewNumber('')
                    setNewName('')
                })
        }
    }
    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
        personsService.getAll().then(data => setPersons(data))
    }, [])

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