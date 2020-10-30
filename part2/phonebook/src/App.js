import React, {useState} from 'react'
import Person from './components/Person.js'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const onChange = (event) => setNewName(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        setPersons([...persons, {name: newName}])
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input onChange={onChange} value={newName}/>
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