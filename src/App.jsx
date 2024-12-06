import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import HobbyPage from "./components/HobbyPage";
import DynamicHobbyPage from "./components/DynamicHobbyPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/hobby" element={<HobbyPage />} />
        <Route path="/hobby/:hobby" element={<DynamicHobbyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
