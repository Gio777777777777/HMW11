import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ padding: "20px", textAlign: "center" }}
        >
            <h1>Welcome to My Portfolio!</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                        width: "100px",
                        height: "100px",
                        background: "url('https://imgcdn.stablediffusionweb.com/2024/10/1/2fb289b0-dabf-484b-8c1b-a1ee90992546.jpg') center/cover",
                        borderRadius: "50%",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                ></motion.div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                        textAlign: "left",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        backgroundColor: "#f8f8f8",
                    }}
                >
                    <p>I'm 32 years old, I'm a programmer with 20 years of experience, I also have successful businesses.</p>
                    <p>Contact Info:</p>
                    <ul>
                        <li>GitHub: <a href="https://github.com/" target="_blank">GitHub Link</a></li>
                        <li>Email: <a href="mailto:example@example.com">example@example.com</a></li>
                </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomePage;
