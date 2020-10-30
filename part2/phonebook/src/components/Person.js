import React from 'react'

const Person = ({person, onRemove}) => (
    <div>{person.name} {person.number}
        <button onClick={onRemove(person)}>删除</button>
    </div>)
const Persons = ({persons, onRemove}) => (
    <div>
        {persons.map(person => <Person key={person.name} person={person} onRemove={onRemove}/>)}
    </div>)

export default Persons