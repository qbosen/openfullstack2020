import React from 'react'

const Countries = ({countries}) => {
    if (countries.length > 10) return (<div>Too many matches,specify another filter</div>)
    else if (countries.length === 1) return (<Country country={countries[0]}/>)
    else return (countries.map(it => <SimpleCountry key={it.name} country={it}/>))
}

const SimpleCountry = ({country}) => <div>{country.name}</div>

const Country = ({country}) => (
    <div>
        <h1>{country.name}</h1>
        <p>
            capital {country.capital}

            population {country.population}
        </p>
        <h2>languages</h2>
        <ul>
            {country.languages.map(it => <li>{it.name}</li>)}
        </ul>
        <img src={country.flag} height='100px' alt='flag'/>
    </div>
)

export default Countries