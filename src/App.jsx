import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
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
          <Route path="/about" element={<AboutPage />} />
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
  );
}