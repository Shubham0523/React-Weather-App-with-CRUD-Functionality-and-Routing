import React, { useState } from 'react';
import axios from 'axios';
import '../Weather.css';
import { useNavigate } from 'react-router-dom'

const Weather = () => {

    const navigate = useNavigate()
    const [data, setData] = useState({})
    const apiKey = "Your API Key"
    // const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    const [inputCityName, setInputCityName] = useState()

    const getWeather = (cityName) => {
        if (!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
            console.log('res', res.data)
            setData(res.data)
        }).catch((err) => {
            console.log('err', err)
        })

    }

    const handleChangeInput = (e) => {
        const value = e.target.value
        console.log('value', e.target.value)
        setInputCityName(value)
    }

    const handleSearch = () => {
        getWeather(inputCityName)
        
    }

    return (
        <div className="Weather">
                <button onClick={()=>{navigate('/')}}>Home</button>
            <h1>Weather App</h1>
            <input className='search' value={inputCityName} onChange={handleChangeInput} type="text" placeholder='Enter City name' />
            <button className='btn' type='button' onClick={handleSearch}>Search</button>
            {Object.keys(data).length > 0 &&
                <div>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather" />
                        <h3>{((data.main.temp) - 272.15).toFixed(2) + '°c'}</h3>
                        <h3>{data.name}</h3>
                </div>
            }
        </div>

    )
}

export default Weather