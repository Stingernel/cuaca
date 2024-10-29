// src/pages/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kefamenanu&appid=04b8ab465488d4fd7859297abf0a4d51&units=metric'); // Ganti dengan API key Anda
                if (!response.ok) throw new Error('Failed to fetch weather data');
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWeather();
    }, []);

    // Menentukan ikon cuaca berdasarkan kondisi cuaca
    const getWeatherIcon = (description) => {
        if (description.includes('clear')) {
            return 'fas fa-sun';
        } else if (description.includes('cloud')) {
            return 'fas fa-cloud';
        } else if (description.includes('rain')) {
            return 'fas fa-cloud-showers-heavy';
        } else if (description.includes('snow')) {
            return 'fas fa-snowflake';
        }
        return 'fas fa-smog'; // Default icon
    };

    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen flex flex-col justify-center items-center text-white">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold">Weather App</h1>
                <p className="text-xl">Stay updated with the latest weather information.</p>
            </header>
            <div className="flex flex-col items-center justify-center">
                {error ? (
                    <div className="bg-red-500 p-4 rounded-lg shadow-lg">
                        <p>{error}</p>
                    </div>
                ) : (
                    weather && (
                        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
                            <h5 className="text-xl font-bold">Weather in {weather.name}</h5>
                            <h6 className="text-gray-500">Current Conditions</h6>
                            <div className="flex items-center justify-center my-4">
                                <i className={`${getWeatherIcon(weather.weather[0].description)} text-4xl`}></i>
                            </div>
                            <p className="text-lg">Temperature: {weather.main.temp}°C</p>
                            <p className="text-lg">Weather: {weather.weather[0].description}</p>
                            <p className="text-lg">Humidity: {weather.main.humidity}%</p>
                            <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Home;
