import React, { useEffect, useState, useRef } from "react";

const ff = "'Onest', system-ui, sans-serif";

/* ─────────────────────────────────────────
   SECTION 1 — Hero slideshow
───────────────────────────────────────── */
const slides = [
  { src: "/images/n7.jpg" },
  { src: "/images/n8.jpg" },
  { src: "/images/n9.jpg" },
  { src: "/images/n10.jpg" },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#000", fontFamily: ff }}>
      {slides.map((s, i) => (
        <img key={i} src={s.src} alt=""
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease", zIndex: 1,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.55) 100%)" }} />

      {/* Breadcrumb */}
      <div style={{ position: "absolute", top: "80px", left: "48px", zIndex: 10, display: "flex", alignItems: "center", gap: "6px", color: "#888", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
        Home
      </div>

      {/* Bottom-left content */}
      <div style={{ position: "absolute", bottom: "64px", left: "48px", zIndex: 10 }}>
        <p style={{ color: "#999", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          NNSEL — Interior Design Studio
        </p>
        <h1 style={{ margin: "0 0 32px 0", lineHeight: 1.0, fontWeight: 800 }}>
          <span style={{ display: "block", color: "#fff", fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}>Interior</span>
          <span style={{ display: "block", color: "#eab308", fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}>Design.</span>
        </h1>
        <div style={{ display: "flex", gap: "48px" }}>
          {[["2+", "Interior Projects"], ["10–16 Weeks", "Average Delivery"], ["6 Signature Directions", "Premium Concepts"]].map(([val, label]) => (
            <div key={label}>
              <p style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 700, margin: 0 }}>{val}</p>
              <p style={{ color: "#666", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", margin: "5px 0 0 0" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div style={{ position: "absolute", bottom: "28px", right: "48px", zIndex: 10, display: "flex", gap: "8px" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? "22px" : "6px", height: "6px", borderRadius: "3px",
            background: i === current ? "#eab308" : "rgba(255,255,255,0.3)",
            border: "none", padding: 0, cursor: "pointer", transition: "all 0.3s",
          }} />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2 — Studio overview + Project detail
───────────────────────────────────────── */
function StudioSection() {
  return (
    <section style={{ background: "#0a0a0a", color: "#fff", fontFamily: ff, padding: "80px 0 0 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>

        {/* Studio Overview row */}
        <div style={{ display: "flex", gap: "60px", marginBottom: "72px", alignItems: "flex-start" }}>
          <div style={{ width: "220px", flexShrink: 0 }}>
            <p style={{ color: "#eab308", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 10px 0" }}>Studio Overview</p>
            <div style={{ width: "32px", height: "2px", background: "#eab308", marginBottom: "14px" }} />
            <p style={{ color: "#555", fontSize: "11.5px", lineHeight: 1.7, margin: 0 }}>
              A curated portfolio shaped around premium visual storytelling, spatial clarity, and international-standard presentation.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
              Every room is a canvas. Every detail, a deliberate choice toward living beautifully.
            </h2>
          </div>
        </div>

        {/* Select Project */}
        <p style={{ color: "#eab308", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 12px 0" }}>Select Project</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid #2a2a2a", borderRadius: "20px", padding: "8px 18px", marginBottom: "20px", cursor: "pointer" }}>
          <span style={{ color: "#fff", fontSize: "12px", fontWeight: 600 }}>NNSEL CORPORATE OFFICE</span>
          <span style={{ background: "#eab308", color: "#000", fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "10px" }}>Office Interior</span>
        </div>

        {/* Project detail card */}
        <div style={{ display: "flex", border: "1px solid #1c1c1c", marginBottom: "0", background: "#0f0f0f" }}>
          {/* Image side */}
          <div style={{ position: "relative", width: "46%", flexShrink: 0 }}>
            <img src="/images/n7.jpg" alt="Office"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: "340px" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.78)", padding: "14px 20px" }}>
              <p style={{ color: "#eab308", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 4px 0" }}>Office Interior</p>
              <p style={{ color: "#fff", fontSize: "14px", fontWeight: 700, margin: 0 }}>NNSEL CORPORATE OFFICE</p>
            </div>
          </div>

          {/* Info side */}
          <div style={{ flex: 1, padding: "28px 32px" }}>
            {/* Location */}
            <div style={{ marginBottom: "16px" }}>
              <p style={{ color: "#444", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 6px 0" }}>Location</p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style={{ color: "#bbb", fontSize: "13px" }}>Banani, Dhaka</span>
              </div>
            </div>
            {/* Area */}
            <div style={{ marginBottom: "16px" }}>
              <p style={{ color: "#444", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 6px 0" }}>Area</p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <span style={{ color: "#bbb", fontSize: "13px" }}>1500 sqft</span>
              </div>
            </div>
            {/* About */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ color: "#444", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 6px 0" }}>About</p>
              <p style={{ color: "#777", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                Minimal luxury: blends clean architectural lines with premium materials like marble and walnut to create an atmosphere of effortless sophistication.
              </p>
            </div>
            {/* Highlights */}
            <div>
              <p style={{ color: "#444", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 10px 0" }}>Highlights</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                {[
                  "Grand Reception: A spacious and welcoming entrance designed in a sleek, modern lobby-style to create a lasting first impression.",
                  "High-Tech Meeting Hub: A dedicated 10-person conference room fully equipped with integrated multimedia facilities for seamless collaboration.",
                  "Biophilic Open Workspace: An expansive open-plan workstation area infused with lush greenery to promote a fresh and vibrant working atmosphere.",
                  "Sophisticated Private Offices: Elegant closed rooms featuring contemporary architecture and stylish modern ceiling lights for a premium finish.",
                ].map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: "7px" }}>
                    <span style={{ color: "#eab308", fontSize: "10px", marginTop: "2px", flexShrink: 0 }}>•</span>
                    <p style={{ color: "#777", fontSize: "11px", lineHeight: 1.6, margin: 0 }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3 — Project Gallery (big image + thumbnails + nav)
───────────────────────────────────────── */
const galleryImages = [
  "/images/n7.jpg", "/images/n8.jpg", "/images/n9.jpg", "/images/n10.jpg",
  "/images/n7.jpg", "/images/n8.jpg", "/images/n9.jpg", "/images/n10.jpg",
  "/images/n7.jpg", "/images/n8.jpg", "/images/n9.jpg",
];

function GallerySection() {
  const [active, setActive] = useState(0);
  const total = galleryImages.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section style={{ background: "#0a0a0a", color: "#fff", fontFamily: ff, padding: "72px 0 0 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px" }}>

        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px" }}>
          <div>
            <p style={{ color: "#eab308", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 8px 0" }}>Project Gallery</p>
            <h3 style={{ color: "#fff", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
              Spaces we<br />brought to life
            </h3>
          </div>
          <span style={{ color: "#fff", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 800, opacity: 0.1, lineHeight: 1 }}>
            {String(active + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Main featured image */}
        <div style={{ position: "relative", width: "100%", height: "380px", overflow: "hidden", marginBottom: "0" }}>
          <img
            src={galleryImages[active]}
            alt="Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s ease" }}
          />
          {/* Bottom-left label */}
          <div style={{ position: "absolute", bottom: 0, left: 0, background: "rgba(0,0,0,0.72)", padding: "14px 20px" }}>
            <p style={{ color: "#fff", fontSize: "13px", fontWeight: 700, margin: "0 0 4px 0" }}>NNSEL CORPORATE OFFICE</p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span style={{ color: "#888", fontSize: "11px" }}>Banani, Dhaka</span>
            </div>
          </div>
          {/* Right label card */}
          <div style={{ position: "absolute", bottom: 0, right: 0, background: "rgba(10,10,10,0.9)", padding: "14px 20px", minWidth: "120px" }}>
            <p style={{ color: "#555", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 4px 0" }}>Office</p>
            <p style={{ color: "#fff", fontSize: "12px", fontWeight: 700, margin: "0 0 4px 0" }}>NNSE...</p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span style={{ color: "#666", fontSize: "10px" }}>Banani,</span>
            </div>
          </div>
        </div>

        {/* Thumbnail strip — 2 rows */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px", marginTop: "4px", marginBottom: "0" }}>
          {galleryImages.slice(0, 6).map((src, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                height: "72px", overflow: "hidden", cursor: "pointer",
                border: active === i ? "2px solid #eab308" : "2px solid transparent",
                transition: "border 0.2s",
              }}
            >
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
          {galleryImages.slice(6, 11).map((src, i) => (
            <div
              key={i + 6}
              onClick={() => setActive(i + 6)}
              style={{
                height: "72px", overflow: "hidden", cursor: "pointer",
                border: active === i + 6 ? "2px solid #eab308" : "2px solid transparent",
                transition: "border 0.2s",
              }}
            >
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>

        {/* Nav row */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px", paddingBottom: "0" }}>
          <button onClick={prev} style={{ width: "32px", height: "32px", border: "1px solid #2a2a2a", borderRadius: "50%", background: "transparent", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>‹</button>
          <button onClick={next} style={{ width: "32px", height: "32px", border: "1px solid #2a2a2a", borderRadius: "50%", background: "transparent", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>›</button>
          {/* Progress bar */}
          <div style={{ flex: 1, height: "1px", background: "#1e1e1e", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, height: "1px", background: "#eab308", width: `${((active + 1) / total) * 100}%`, transition: "width 0.3s" }} />
          </div>
          <span style={{ color: "#555", fontSize: "11px" }}>{String(active + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4 — Studio Services accordion
───────────────────────────────────────── */
const services = [
  "Concept development and spatial storytelling",
  "Furniture, finish, and material curation",
  "Lighting design with ambience planning",
  "Joinery detailing and custom feature elements",
  "Execution guidance for premium residential interiors",
  "Styling and final handover presentation",
];

function ServicesSection() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ background: "#0a0a0a", color: "#fff", fontFamily: ff, padding: "80px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px", display: "flex", gap: "80px", alignItems: "flex-start" }}>

        {/* Left */}
        <div style={{ width: "240px", flexShrink: 0 }}>
          <p style={{ color: "#eab308", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 12px 0" }}>What We Deliver</p>
          <h3 style={{ color: "#fff", fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 20px 0" }}>
            Studio<br />Services
          </h3>
          <div style={{ width: "28px", height: "2px", background: "#eab308" }} />
        </div>

        {/* Right — accordion */}
        <div style={{ flex: 1 }}>
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                borderBottom: "1px solid #1e1e1e",
                padding: "18px 0",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ color: "#333", fontSize: "11px", fontWeight: 700, minWidth: "20px" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ color: open === i ? "#eab308" : "#bbb", fontSize: "13px", fontWeight: 500, transition: "color 0.2s" }}>{s}</span>
              </div>
              <span style={{ color: "#eab308", fontSize: "16px", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.2s" }}>+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — CTA card + Dream Home + Footer
───────────────────────────────────────── */
function FooterCol({ title, links }) {
  return (
    <div>
      <p style={{ color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 16px 0" }}>{title}</p>
      {links.map((l) => (
        <a key={l} href="#" style={{ display: "block", color: "#666", fontSize: "13px", textDecoration: "none", marginBottom: "10px" }}
          onMouseEnter={e => e.target.style.color = "#fff"}
          onMouseLeave={e => e.target.style.color = "#666"}
        >{l}</a>
      ))}
    </div>
  );
}

function SocialBtn({ children }) {
  return (
    <button style={{ width: "34px", height: "34px", borderRadius: "6px", border: "1px solid #222", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
    </button>
  );
}

function CTAAndFooter() {
  return (
    <section style={{ background: "#0a0a0a", color: "#fff", fontFamily: ff }}>

      {/* Ready to Find Your Dream Home */}
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "72px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #181818" }}>
        <h2 style={{ margin: 0, lineHeight: 1.15 }}>
          <span style={{ display: "block", color: "#fff", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", fontWeight: 700 }}>Ready to Find</span>
          <span style={{ display: "block", color: "#eab308", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", fontWeight: 700 }}>Your Dream Home?</span>
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ color: "#fff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Start Your Journey</span>
          <div style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #eab308", display: "flex", alignItems: "center", justifyContent: "center", color: "#eab308", fontSize: "18px", cursor: "pointer" }}>↗</div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ maxWidth: "1300px", margin: "0 auto", padding: "52px 48px 28px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.4fr", gap: "40px", marginBottom: "44px" }}>
          {/* Brand */}
          <div>
            <img src="/images/logo.png" alt="NNSEL" style={{ height: "36px", objectFit: "contain", marginBottom: "18px", display: "block" }} />
            <p style={{ color: "#555", fontSize: "12px", lineHeight: 1.7, margin: "0 0 18px 0" }}>
              Building exceptional living spaces since 2015. Where architectural vision meets uncompromising quality.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <SocialBtn><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></SocialBtn>
              <SocialBtn><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></SocialBtn>
              <SocialBtn><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></SocialBtn>
              <SocialBtn><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></SocialBtn>
            </div>
          </div>
          <FooterCol title="Navigate" links={["Home", "About", "Projects", "Team"]} />
          <FooterCol title="Connect" links={["News", "Contact", "Careers", "FAQ"]} />
          <FooterCol title="Legal" links={["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"]} />
          <div>
            <p style={{ color: "#fff", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 14px 0" }}>Newsletter</p>
            <p style={{ color: "#555", fontSize: "12px", lineHeight: 1.6, margin: "0 0 14px 0" }}>Subscribe for exclusive updates and insights.</p>
            <input
              placeholder="Your email"
              style={{ width: "100%", background: "transparent", border: "1px solid #222", color: "#fff", fontFamily: ff, fontSize: "12px", padding: "10px 14px", outline: "none", marginBottom: "8px", boxSizing: "border-box" }}
            />
            <button style={{ width: "100%", background: "#eab308", border: "none", color: "#000", fontFamily: ff, fontSize: "12px", fontWeight: 700, padding: "10px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>Subscribe</button>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #181818", paddingTop: "22px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ color: "#444", fontSize: "12px", margin: 0 }}>© 2026 NNSEL. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: "8px", background: "transparent", border: "none", color: "#666", fontFamily: ff, fontSize: "12px", cursor: "pointer" }}
          >
            Back to Top
            <span style={{ width: "28px", height: "28px", border: "1px solid #333", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "13px" }}>↑</span>
          </button>
        </div>
      </footer>
    </section>
  );
}

/* ─────────────────────────────────────────
   FULL PAGE EXPORT
───────────────────────────────────────── */
export default function InteriorDesignPage() {
  return (
    <>
      <HeroSection />
      <StudioSection />
      <GallerySection />
      <ServicesSection />
      <CTAAndFooter />
    </>
  );
}
