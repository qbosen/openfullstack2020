import React, {useState} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Person.js";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [shownPersons, setShownPersons] = useState(persons)

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
        setShownPersons([...persons.filter(it => it.name.toLowerCase().startsWith(event.target.value))])
    }

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