import React from 'react'

const Countries = ({countries, onSelect}) => {
    if (countries.length > 10) return (<div>Too many matches,specify another filter</div>)
    else if (countries.length === 1) return (<Country country={countries[0]}/>)
    else return (countries.map(it => <SimpleCountry key={it.name} onClick={onSelect} country={it}/>))
}

const SimpleCountry = ({country, onClick}) => (
    <div>{country.name}
        <button onClick={onClick(country)}>select</button>
    </div>)

const Country = ({country}) => (
    <div>
        <h1>{country.name}</h1>
        <p>
            capital {country.capital} <br/>
            population {country.population}
        </p>
        <h2>languages</h2>
        <ul>
            {country.languages.map(it => <li key={it.name}>{it.name}</li>)}
        </ul>
        <img src={country.flag} height='100px' alt='flag' border='1px'/>
    </div>
)

export default Countries