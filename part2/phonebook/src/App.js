import React, {useState} from 'react'
import Person from './components/Person.js'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-1234567'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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


    return (
        <div>
            <h2>Phonebook</h2>
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

            {persons.map(it => <Person key={it.name} person={it}/>)}
        </div>
    )
}

export default App