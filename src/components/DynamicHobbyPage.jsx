import React from "react";
import { useParams, Link } from "react-router-dom";

const hobbyDetails = {
    chess: "I love playing chess because it improves my strategic thinking.",
    reading: "Reading books helps me learn and relax.",
    soccer: "Playing soccer keeps me active and healthy.",
    movies: "Watching movies is my way of unwinding.",
};

const DynamicHobbyPage = () => {
    const { hobby } = useParams();
    const details = hobbyDetails[hobby] || "No details available.";

    return (
        <div style={{ padding: "20px" }}>
            <Link to="/hobby">← Back</Link>
            <h1>{hobby.charAt(0).toUpperCase() + hobby.slice(1)}</h1>
            <p>{details}</p>
        </div>
    );
};

export default DynamicHobbyPage;
