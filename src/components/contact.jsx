import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    fontSize: "14px",
    padding: "16px 0",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Onest', system-ui, sans-serif",
  };

  const handleFocus = (e) => (e.target.style.borderBottomColor = "#eab308");
  const handleBlur = (e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.1)");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full bg-[#0a0a0a] text-white py-24 md:py-36"
      style={{ fontFamily: "'Onest', system-ui, sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Top Header / Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#eab308] font-medium" style={{ fontSize: "14px" }}>(05)</span>
          <span className="w-12 bg-[#eab308]" style={{ height: "1px" }} aria-hidden="true" />
          <span
            className="text-[#eab308] font-semibold uppercase"
            style={{ letterSpacing: "0.2em", fontSize: "11px" }}
          >
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT: Heading & Form */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              className="font-bold mb-12"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)", lineHeight: 1.1 }}
            >
              Let's Build <br />
              <span className="text-[#eab308]">Together</span>
            </h2>

            <div className="flex flex-col" style={{ gap: "0px" }}>
              <input
                type="text"
                placeholder="Full Name"
                style={{ ...inputStyle }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input
                type="email"
                placeholder="Email Address"
                style={{ ...inputStyle }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <input
                type="text"
                placeholder="Subject"
                style={{ ...inputStyle }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                style={{ ...inputStyle, resize: "none", marginTop: "8px" }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center justify-center gap-2 bg-[#eab308] text-black font-bold uppercase tracking-wider hover:bg-[#d9a306] transition-colors"
                style={{ marginTop: "32px", padding: "16px", fontSize: "13px", width: "100%", cursor: "pointer", border: "none" }}
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT: Info Cards */}
          <div
            className={`flex flex-col justify-between transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Subtext aligned right */}
            <div
              className="text-right ml-auto mb-12"
              style={{ color: "#888", fontSize: "13px", lineHeight: "1.6", maxWidth: "320px" }}
            >
              <p>Ready to start your journey to a dream home? We're here to make it happen.</p>
            </div>

            {/* Grid of Cards */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Location */}
              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Location"
                value="House 37, Road 15, Banani, Dhaka 1213"
              />

              {/* Phone */}
              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label="Phone"
                value="+880 1805-047288"
              />

              {/* Email */}
              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="Email"
                value="info@nnsel.com"
              />

              {/* Hours */}
              <ContactCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Hours"
                value="Sat - Thurs: 10AM - 6PM"
              />
            </div>

            {/* Prefer a Call Banner */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.05)",
                padding: "24px",
              }}
            >
              <div>
                <h4 className="text-white font-bold mb-1" style={{ fontSize: "15px" }}>
                  Prefer a Call?
                </h4>
                <p style={{ color: "#888", fontSize: "12px" }}>Schedule a consultation call</p>
              </div>
              <button
                className="bg-[#eab308] text-black font-bold uppercase flex items-center gap-2 hover:bg-[#d9a306] transition-colors"
                style={{
                  fontSize: "13px",
                  padding: "12px 24px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "'Onest', system-ui, sans-serif",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#111",
        padding: "24px",
        border: `1px solid ${hovered ? "rgba(234,179,8,0.3)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: "2px",
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ color: "#eab308", marginBottom: "16px" }}>{icon}</div>
      <h4
        style={{
          color: "#555",
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "8px",
        }}
      >
        {label}
      </h4>
      <p style={{ color: "#fff", fontSize: "14px", lineHeight: "1.4" }}>{value}</p>
    </div>
  );
}