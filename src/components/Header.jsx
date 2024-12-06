import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "10px 20px",
                borderBottom: "2px solid #ccc",
                background: "linear-gradient(to right, #6a11cb, #2575fc)",
                color: "white",
            }}
        >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</Link>
            <Link to="/hobby" style={{ color: "white", textDecoration: "none" }}>Hobby</Link>
        </motion.header>
    );
};

export default Header;
