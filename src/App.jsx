<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import ITPage from './pages/ITPage';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={
          <div style={{ paddingTop: '120px', textAlign: 'center', color: '#fff', minHeight: '60vh' }}>
            <h1 style={{ fontFamily: "'Barlow', sans-serif", color: '#d4a017' }}>About</h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>Coming soon...</p>
          </div>
            } />
          <Route path="/projects" element={
            <div style={{ paddingTop: '120px', textAlign: 'center', color: '#fff', minHeight: '60vh' }}>
              <h1 style={{ fontFamily: "'Barlow', sans-serif", color: '#d4a017' }}>Projects</h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>Coming soon...</p>
            </div>
          } />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs/:slug" element={<ArticlePage />} />
          <Route path="/it" element={<ITPage />} />
          <Route path="/interior-design" element={
            <div style={{ paddingTop: '120px', textAlign: 'center', color: '#fff', minHeight: '60vh' }}>
              <h1 style={{ fontFamily: "'Barlow', sans-serif", color: '#d4a017' }}>Interior Design</h1>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>Coming soon...</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// We've updated the path to look inside the "pages" folder!
import Home from "./pages/Home"; 

import About from "./components/About";
import Contact from "./components/Contact";
import InteriorDesignPage from "./components/InteriorDesignPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Your full scrolling landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Your standalone routes */}
        <Route path="/about" element={<About />} />
      
        <Route path="/interior-design" element={<InteriorDesignPage />} />
  <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
>>>>>>> 6645c35b5a7fd9be991c6e48ca0c1b218d4f9d63
  );
}