import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Projects from "@pages/Projects";
import Project from "@pages/Project";
import Navbar from "@components/Navbar";
import ProjectAdmin from "@pages/ProjectAdmin";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/projectadmin" element={<ProjectAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
