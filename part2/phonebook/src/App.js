import React, {useState} from 'react'
import Person from './components/Person.js'

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
    const onSubmit = (event) => {
        event.preventDefault()
        if (persons.find(it => it.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons([...persons, {name: newName, number: newNumber}])
        }
    }
    const refresh = (event) => {
        setFilter(event.target.value)
        setShownPersons([...persons.filter(it => it.name.toLowerCase().startsWith(event.target.value))])
        console.log(shownPersons)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input onChange={refresh} value={filter}/>
            </div>
            <h2>add a new</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input onChange={onNameChange} value={newName}/>
                </div>
                <div>
                    number: <input onChange={onNumberChange} value={newNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {shownPersons.map(it => <Person key={it.name} person={it}/>)}
        </div>
    )
}

export default App