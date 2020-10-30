import React from 'react'

const Total = ({parts}) => {
    const sum = parts.map(it => it.exercises).reduce((acc, it) => acc + it)
    return (<p style={{'fontWeight': '900'}}>total of {sum} exercise</p>)
}

export default Total