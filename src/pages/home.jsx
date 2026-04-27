import React, { useEffect, useRef, useState } from 'react';

// Import your existing components
import AboutSection from '../components/About';
import ContactSection from '../components/Contact';

// ─── Token Map ─────────────────────────────────────────────────────────────
// color.surface.base      = #000000
// color.surface.strong    = #0a0a0a
// color.text.primary      = #ffffff
// color.text.secondary    = #a0a0a0
// color.border.muted      = #d4af37  (gold)
// font.family.primary     = Onest
// radius.lg               = 50px (pill)
// motion.duration.normal  = 250ms
// ───────────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Floating particle dots for hero atmosphere ──────────────────────────────
function Particles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    delay: `${Math.random() * 4}s`,
    duration: `${Math.random() * 6 + 5}s`,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#d4af37] animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

// ── Stats ticker bar ────────────────────────────────────────────────────────
const heroStats = [
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Strategic Locations" },
  { value: "100%", label: "Client Satisfaction" },
];

// ── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const [headingRef, headingVisible] = useInView(0.1);
  const [statsRef, statsVisible] = useInView(0.1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-[#000000]"
      aria-labelledby="hero-heading"
      style={{ fontFamily: "'Onest', system-ui, sans-serif" }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
        }}
      />

      <Particles />

      {/* Gold top bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#d4af37]" aria-hidden="true" />

      {/* Main content */}
      <div
        ref={headingRef}
        className="relative z-10 text-center max-w-[860px] mx-auto px-6 md:px-10 pt-8"
      >
        {/* Eyebrow label */}
        <div
          className={`flex items-center justify-center gap-3 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-px bg-[#d4af37]" aria-hidden="true" />
          <p
            className="text-[#d4af37] tracking-[0.2em] uppercase"
            style={{ fontSize: "11px", fontWeight: 500 }}
          >
            NN Services &amp; Engineering Ltd
          </p>
          <span className="w-8 h-px bg-[#d4af37]" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className={`text-[#ffffff] leading-[1.1] mb-7 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(36px, 6.5vw, 72px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Building Tomorrow's
          <br />
          <span className="text-[#d4af37]">Landmarks Today</span>
        </h1>

        {/* Sub-copy */}
        <p
          className={`text-[#a0a0a0] mx-auto mb-10 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: "28px",
            maxWidth: "580px",
            fontWeight: 400,
          }}
        >
          Pioneering premium residential and commercial development across
          Bangladesh's most strategic locations since 2015.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Primary CTA */}
          <a
            href="#about"
            className="group inline-flex items-center gap-2 bg-[#d4af37] text-[#000000] font-semibold px-8 py-4 transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none"
            style={{ fontSize: "13.5px", letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}
            onFocus={(e) =>
              (e.currentTarget.style.boxShadow =
                "rgb(255,255,255) 0px 0px 0px 2px, rgb(212,175,55) 0px 0px 0px 4px")
            }
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Discover Our Work
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#d4af37]/40 text-[#d4af37] font-medium px-8 py-4 transition-all duration-200 hover:border-[#d4af37] hover:bg-[#d4af37]/8 active:scale-[0.98] focus-visible:outline-none"
            style={{ fontSize: "13.5px", letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none" }}
            onFocus={(e) =>
              (e.currentTarget.style.boxShadow =
                "rgb(255,255,255) 0px 0px 0px 2px, rgb(212,175,55) 0px 0px 0px 4px")
            }
            onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            Get in Touch
          </a>
        </div>

        {/* Trust badge */}
        <div
          className={`mt-10 flex items-center justify-center gap-2 transition-all duration-700 delay-[400ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex -space-x-1.5" aria-hidden="true">
            {["#d4af37", "#b8922e", "#e8c547"].map((c, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-[#000]"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="text-[#a0a0a0]" style={{ fontSize: "12px" }}>
            Trusted by <span className="text-[#ffffff]">50+ clients</span> across Bangladesh
          </span>
        </div>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        className={`relative z-10 w-full max-w-[860px] mx-auto mt-16 px-6 md:px-10 transition-all duration-700 delay-[500ms] ${
          statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#d4af37]/20 divide-x divide-y md:divide-y-0 divide-[#d4af37]/10">
          {heroStats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] px-6 py-6 text-center hover:bg-[#111111] transition-colors duration-200"
            >
              <p
                className="text-[#d4af37] font-semibold"
                style={{ fontSize: "22px", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {s.value}
              </p>
              <p className="text-[#a0a0a0] mt-1" style={{ fontSize: "12px" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade to About */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to top, #000000, transparent)" }}
      />
    </section>
  );
}

// ── Page root ───────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div
      className="bg-[#000000] min-h-screen"
      style={{ fontFamily: "'Onest', system-ui, sans-serif" }}
    >
      <HeroSection />

      {/* id anchors allow the CTA buttons to scroll here */}
      <div id="about">
        <AboutSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
