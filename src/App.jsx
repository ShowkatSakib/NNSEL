import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
