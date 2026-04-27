import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import NewsSection from './components/NewsSection';
import ArticlePage from './pages/ArticlePage';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TeamSection from './components/Teamsection';
import ITPage from './pages/ITPage';

// Home page — all sections
function HomePage() {
  return (
    <>
      <HeroSlider />
      <TeamSection/>
      <NewsSection />
      <ContactSection/>
      <Footer/>

    </>
  );
}
 
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/blogs/:slug"    element={<ArticlePage />} />
          <Route path="/it"             element={<ITPage />} />
          <Route path="/interior-design" element={<div style={{ paddingTop: '120px', textAlign: 'center', color: '#fff', minHeight: '60vh' }}><h1 style={{ fontFamily: "'Barlow', sans-serif", color: '#d4a017' }}>Interior Design</h1><p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem' }}>Coming soon...</p></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
 





