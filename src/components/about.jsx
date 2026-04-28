import React, { useEffect, useRef, useState } from "react";

const values = [
  { num: "01", icon: "○", title: "Trust & Integrity", desc: "Building relationships on a foundation of honesty and transparency." },
  { num: "02", icon: "◇", title: "Premium Quality", desc: "Uncompromising standards in materials, design, and execution." },
  { num: "03", icon: "◎", title: "Client Focus", desc: "Your vision drives every decision we make." },
  { num: "04", icon: "□", title: "Excellence", desc: "15 years of award-winning developments." },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const sectionRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    const obs2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setValuesVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs1.observe(sectionRef.current);
    if (valuesRef.current) obs2.observe(valuesRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <>
      {/* ── Who We Are ── */}
      <section
        id="about"
        ref={sectionRef}
        style={{
          width: "100%",
          background: "#0a0a0a",
          color: "#fff",
          fontFamily: "'Onest', system-ui, sans-serif",
          padding: "60px 0 80px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            gap: "56px",
          }}
        >
          {/* LEFT — Image stack */}
          <div
            style={{
              position: "relative",
              flexShrink: 0,
              width: "320px",
              marginLeft: "40px",
              marginBottom: "80px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity 1s ease, transform 1s ease",
            }}
          >
            {/* Yellow top-left bracket */}
            <div style={{ position: "absolute", top: "-18px", left: "-18px", width: "52px", height: "52px", borderTop: "2px solid #eab308", borderLeft: "2px solid #eab308", zIndex: 3 }} />
            {/* Yellow bottom-right bracket */}
            <div style={{ position: "absolute", bottom: "-18px", right: "-18px", width: "52px", height: "52px", borderBottom: "2px solid #eab308", borderRight: "2px solid #eab308", zIndex: 3 }} />

            {/* Main image */}
            <img
              src="/images/nn.jpg"
              alt="NNSEL Building Main"
              style={{ display: "block", width: "100%", height: "420px", objectFit: "cover" }}
            />

            {/* Small overlapping image */}
            <div
              style={{
                position: "absolute",
                bottom: "-70px",
                left: "-48px",
                width: "155px",
                height: "195px",
                border: "6px solid #0a0a0a",
                background: "#111",
                zIndex: 2,
              }}
            >
              <img src="/images/nn.jpg" alt="NNSEL Building Detail" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>

          {/* RIGHT — Text content */}
          <div
            style={{
              flex: 1,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 1s 0.2s ease, transform 1s 0.2s ease",
            }}
          >
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <span style={{ display: "inline-block", width: "38px", height: "2px", background: "#eab308" }} />
              <span style={{ color: "#eab308", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 800, lineHeight: 1.12, margin: "0 0 24px 0", color: "#fff" }}>
              Crafting <br />
              <span style={{ color: "#eab308" }}>Quality Spaces</span> <br />
              Since 2015
            </h2>

            {/* Body */}
            <div style={{ color: "#a0a0a0", fontSize: "13.5px", lineHeight: 1.75, marginBottom: "28px" }}>
              <p style={{ margin: "0 0 16px 0" }}>
                NN Services &amp; Engineering Ltd NNSEL is a pioneering real estate and development firm in Bangladesh,
                setting new benchmarks in architectural design, construction, and project delivery. Headquartered in Banani,
                a prominent corporate and commercial locale in Dhaka, NNSEL draws on the expertise of its in-house design
                professionals to craft projects that elevate the urban landscape.
              </p>
              <p style={{ margin: 0 }}>
                NNSEL's showcase of 14 distinguished properties across Banani, Bashundhara, Savar, and Gazipur reflects our
                unwavering commitment to creating environments that inspire and endure.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
              <div>
                <p style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, margin: 0 }}>14+</p>
                <p style={{ color: "#a0a0a0", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", margin: "3px 0 0 0" }}>Projects</p>
              </div>
              <div style={{ width: "1px", height: "34px", background: "#333" }} />
              <div>
                <p style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, margin: 0 }}>98%</p>
                <p style={{ color: "#a0a0a0", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", margin: "3px 0 0 0" }}>Satisfaction</p>
              </div>
              <div style={{ width: "1px", height: "34px", background: "#333" }} />
              <img src="/images/rehab.jpg" alt="REHAB" style={{ height: "36px", objectFit: "contain" }} />
            </div>

            {/* Certification logos */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              {["iso", "iaf", "bqc", "ias"].map((cert) => (
                <img
                  key={cert}
                  src={`/images/${cert}.jpg`}
                  alt={cert.toUpperCase()}
                  style={{ height: "28px", objectFit: "contain", opacity: 0.7, transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Built on Values ── */}
      <section
        ref={valuesRef}
        style={{
          width: "100%",
          background: "#0a0a0a",
          color: "#fff",
          fontFamily: "'Onest', system-ui, sans-serif",
          padding: "0 0 80px 0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>

          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "#eab308", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 12px 0" }}>
              Our Foundation
            </p>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 700, margin: 0 }}>
              Built on <span style={{ color: "#eab308" }}>Values</span>
            </h2>
          </div>

          {/* Values cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {values.map((v, i) => (
              <div
                key={v.num}
                style={{
                  background: "#111",
                  border: "1px solid #1e1e1e",
                  padding: "28px 24px",
                  position: "relative",
                  opacity: valuesVisible ? 1 : 0,
                  transform: valuesVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.7s ${i * 0.1}s ease, transform 0.7s ${i * 0.1}s ease`,
                }}
              >
                {/* Faint number top-right */}
                <span style={{ position: "absolute", top: "20px", right: "20px", color: "#222", fontSize: "1.8rem", fontWeight: 800, lineHeight: 1 }}>
                  {v.num}
                </span>
                {/* Icon */}
                <div style={{ color: "#eab308", fontSize: "22px", marginBottom: "16px", lineHeight: 1 }}>{v.icon}</div>
                {/* Title */}
                <h4 style={{ color: "#eab308", fontSize: "14px", fontWeight: 700, margin: "0 0 10px 0" }}>{v.title}</h4>
                {/* Desc */}
                <p style={{ color: "#666", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
