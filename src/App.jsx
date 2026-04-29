import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
