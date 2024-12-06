import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
    { name: "Project 1", github: "https://github.com/project1", vercel: "https://project1.vercel.app", image: "https://blog.logrocket.com/wp-content/uploads/2022/01/creating-interactive-backgrounds-react-tsparticles.png" },
    { name: "Project 2", github: "https://github.com/project2", vercel: "https://project2.vercel.app", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3ZHRm4yFPUXCnWUNBXPJEhsImIwthTQSF4masCFQnQR4meEyyAL0eMqLossUUl403Fk&usqp=CAU" },
    { name: "Project 3", github: "https://github.com/project3", vercel: "https://project3.vercel.app", image: "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg" },
];

const ProjectsPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    fontSize: "24px",
                }}
            >
                Loading Projects...
            </motion.div>
        );
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    style={{ marginBottom: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "10px" }}
                >
                    <h2>{project.name}</h2>
                    <img src={project.image} alt={`${project.name} screenshot`} style={{ width: "10%", height: "auto", borderRadius: "10px", marginBottom: "10px" }} />
                    <p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
                        <a href={project.vercel} target="_blank" rel="noopener noreferrer">Vercel</a>
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectsPage;
