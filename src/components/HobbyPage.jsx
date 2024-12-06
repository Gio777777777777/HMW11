import React from "react";
import { Link } from "react-router-dom";


const hobbies = [
    { name: "Playing Chess", id: "chess" },
    { name: "Reading Book", id: "reading" },
    { name: "Playing Soccer", id: "soccer" },
    { name: "Watching Movies", id: "movies" },
];

const HobbyPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Hobby Page</h1>
            {hobbies.map((hobby, index) => (
                <div key={index} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
                    <h2>{hobby.name}</h2>
                    <Link to={`/hobby/${hobby.id}`}>Show More</Link>
                </div>
            ))}
        </div>
    );
};

export default HobbyPage;
