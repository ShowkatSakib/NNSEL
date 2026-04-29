import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useScrollTo } from "../hooks/useScrollTo";

const navLinks = ["HOME", "ABOUT", "PROJECTS", "INTERIOR DESIGN", "IT", "TEAM", "NEWS", "CONTACT"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (link) => {
    setMenuOpen(false);
    if (link === "INTERIOR DESIGN") {
      navigate("/interior-design");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (link === "IT") {
      navigate("/it");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollTo(link.toLowerCase());
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
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
              onClick={() => handleNav("HOME")}
            />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex flex-1 items-center gap-6 justify-center">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="text-white/80 hover:text-[#C8A84B] transition-colors duration-300"
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
                  color: (link === "INTERIOR DESIGN" && location.pathname === "/interior-design") ||
                         (link === "IT" && location.pathname === "/it")
                    ? "#C8A84B" : undefined,
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav("CONTACT")}
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
          {navLinks.map((link) => (
            <button key={link} onClick={() => handleNav(link)}
              className="block w-full text-left text-white/80 hover:text-[#C8A84B] py-3 transition-colors duration-200"
              style={{
                fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", fontWeight: 500,
                letterSpacing: "0.12em", background: "none", border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)", cursor: "pointer",
              }}>
              {link}
            </button>
          ))}
          <button onClick={() => handleNav("CONTACT")}
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