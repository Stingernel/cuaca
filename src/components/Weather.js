// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Weather.module.css';

function Weather() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('London');
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        try {
            const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            setWeather(response.data);
            setError('');
        } catch (error) {
            setError('City not found. Please try again.');
            setWeather(null);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {weather && (
                <div>
                    <h1>{weather.name}</h1>
                    <p>{weather.main.temp}°C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Weather;
