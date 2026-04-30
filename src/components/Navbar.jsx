import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GOLD = '#C8A84B';

const NAV_CONFIG = [
  { label: "HOME",             path: "/" },
  { label: "ABOUT",            path: "/about" },
  { label: "PROJECTS",         path: "/projects" },
  { label: "INTERIOR DESIGN",  path: "/interior-design" },
  { label: "IT",               path: "/it" },
  { label: "TEAM",             path: "/team" },
  { label: "NEWS",             path: "/news" },
  { label: "CONTACT",          path: "/contact" },
];

// Sections that live on the homepage (not separate routes)
const HOME_SECTIONS = {
  '/about':    'about',
  '/projects': 'projects',
  '/team':     'team',
  '/news':     'news',
  '/contact':  'contact',
};

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActiveSection] = useState(''); // tracks which section is in view
  const navigate  = useNavigate();
  const location  = useLocation();

  // Change navbar bg on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer — watches all homepage sections and updates URL + activeSection
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sectionIds = Object.values(HOME_SECTIONS); // ['about','projects','team','news','contact']
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            // Update URL bar without triggering a re-render/navigation
            window.history.replaceState(null, '', `/${id}`);
          }
        },
        { threshold: 0.4 } // section must be 40% visible to trigger
      );
      obs.observe(el);
      observers.push(obs);
    });

    // When scrolled back to very top, reset to "/"
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection('');
        window.history.replaceState(null, '', '/');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleNav = (path) => {
    setMenuOpen(false);

    const sectionId = HOME_SECTIONS[path];

    if (sectionId) {
      if (location.pathname === '/') {
        // Already on homepage — smooth scroll + update URL
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState(null, '', path);
          setActiveSection(sectionId);
        }
      } else {
        // On a real page — go to homepage then scroll
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.replaceState(null, '', path);
            setActiveSection(sectionId);
          }
        }, 380);
      }
    } else if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', '/');
        setActiveSection('');
      } else {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 380);
      }
    } else {
      // Real separate route (/interior-design, /it)
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActive = (path) => {
    const sectionId = HOME_SECTIONS[path];

    if (sectionId) {
      // Only highlight if this specific section is in view
      return activeSection === sectionId;
    }
    if (path === '/') {
      // HOME is active only when on homepage and no section is active
      return location.pathname === '/' && activeSection === '';
    }
    // Real routes
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <div className="w-100 h-30">
            <img
              src="https://www.nnsel.com/assets/nnsel-B5wYGJs_.png"
              alt="NNSEL Logo"
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => handleNav("/")}
            />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex flex-1 items-center gap-6 justify-center">
          {NAV_CONFIG.map(({ label, path }) => (
            <li key={label}>
              <button
                onClick={() => handleNav(path)}
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  whiteSpace: "nowrap",
                  color: isActive(path) ? GOLD : 'rgba(255,255,255,0.8)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { if (!isActive(path)) e.currentTarget.style.color = GOLD; }}
                onMouseLeave={e => { if (!isActive(path)) e.currentTarget.style.color = isActive(path) ? GOLD : 'rgba(255,255,255,0.8)'; }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("/contact")}
            className="hidden md:block transition-all duration-300 bg-[#C8A84B] hover:bg-[#F5D066]"
            style={{
              color: "#000",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              padding: "0.75rem 1.5rem",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Schedule Visit
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "500px" : "0" }}>
        <div className="bg-black/95 px-6 py-6 border-t border-white/10">
          {NAV_CONFIG.map(({ label, path }) => (
            <button key={label} onClick={() => handleNav(path)}
              className="block w-full text-left py-3 transition-colors duration-200"
              style={{
                fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.12em", background: "none", border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "pointer",
                color: isActive(path) ? GOLD : 'rgba(255,255,255,0.8)',
              }}>
              {label}
            </button>
          ))}
          <button onClick={() => handleNav("/contact")}
            className="block w-full mt-5 text-center hover:opacity-90 transition-opacity"
            style={{
              background: "#C8A84B", color: "#000",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em",
              padding: "0.75rem 1.5rem", border: "none", cursor: "pointer",
            }}>
            Schedule Visit
          </button>
        </div>
      </div>
    </nav>
  );
}