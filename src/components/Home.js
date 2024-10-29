// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';

function Home() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        axios.get(`https://api.fotbal.org/v1/matches?team=FC%20Barcelona&api_key=${apiKey}`)
            .then(response => {
                setMatches(response.data.matches);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching match data: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading matches...</p>;

    return (
        <div className={`container mt-5 ${styles.homeContainer}`}>
            <h1 className="text-center" style={{ color: '#A50044' }}>FC Barcelona Matches</h1>
            <div className="row">
                {matches.map((match, index) => (
                    <div className="col-md-4 my-3" key={index}>
                        <div className="card border-dark shadow-sm">
                            <div className="card-header bg-primary text-white">
                                <h5>{match.opponent}</h5>
                            </div>
                            <div className="card-body">
                                <p>Date: {match.date}</p>
                                <p>Location: {match.location}</p>
                                <p>Status: {match.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
