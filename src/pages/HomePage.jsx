import HeroSlider from '../components/sections/HeroSlider';
import TeamSection from '../components/sections/TeamSection';
import NewsSection from '../components/sections/NewsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';
import Navbar from '../components/sections/Navbar';
import FeaturedProjects from '../components/sections/FeaturedProjects';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Navbar />

      {/* Minimal Hero / Landing */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{ minHeight: '100vh', paddingTop: '80px' }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, #C9973A 40px, #C9973A 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9973A 40px, #C9973A 41px)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="text-[#C9973A] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
            NNSEL Engineering Limited
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Building Your
            <br />
            <span className="text-[#C9973A]">Dream Home</span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Premium residential and commercial developments that set new standards
            in architectural excellence across Bangladesh.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="btn-gold px-8 py-3.5 text-sm font-bold"
            >
              Explore Projects
            </a>
            <button className="border border-[#2a2a2a] text-gray-300 hover:text-white hover:border-[#C9973A] transition-colors px-8 py-3.5 text-sm font-semibold rounded">
              Schedule Visit
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
            <rect x="1" y="1" width="16" height="22" rx="8" stroke="#2a2a2a" strokeWidth="1.5"/>
            <circle cx="9" cy="7" r="2.5" fill="#C9973A">
              <animate attributeName="cy" values="7;15;7" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </section>

      {/* Featured Projects (scrolled to via #projects) */}
      <FeaturedProjects />

      {/* Footer placeholder */}
      <footer
        className="py-12 text-center border-t"
        style={{ borderColor: '#2a2a2a' }}
      >
        <p className="text-gray-600 text-sm">
          © 2025 NNSEL Engineering Limited. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
