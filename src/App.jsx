import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import InteriorDesignPage from './pages/InteriorDesignPage';
import ITPage from './pages/ITPage';
import NewsPage from './pages/NewsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/interior-design" element={<InteriorDesignPage />} />
      <Route path="/it" element={<ITPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/article/:slug" element={<ArticlePage />} />
    </Routes>
  );
}

export default App;
