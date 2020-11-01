import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Weather = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(it => setWeather([it.data]))
    }, [])

    const showWeather = ({current}) => (
        <div>
            {console.log(current)}
            <h2>Weather in {country.capital}</h2>
            <b>temperature:</b>{current.temperature} Celcius <br/>
            <img src={current.weather_icons[0]} alt='weather icon'/><br/>
            <b>wind:</b>{current.wind_speed} mph direction {current.wind_dir}
        </div>
    )

    return (<div>{weather.length === 1 ? showWeather(weather[0]) : ''}</div>)
}
export default Weather