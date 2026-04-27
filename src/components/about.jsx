import React, { useEffect, useRef, useState } from "react";

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        width: "100%",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Onest', system-ui, sans-serif",
        padding: "60px 0 100px 0",
        overflow: "hidden",
      }}
    >
      {/* Max-width wrapper, left-biased padding to match screenshot */}
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

        {/* ════════════════════════════
            LEFT — Image stack
            ════════════════════════════ */}
        <div
          style={{
            /* Extra space on left for the yellow bracket, bottom for small image */
            position: "relative",
            flexShrink: 0,
            width: "320px",           /* main image width */
            marginLeft: "40px",       /* room for bracket that pokes left */
            marginBottom: "80px",     /* room for small image that pokes down */
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          {/* Yellow top-left bracket — outside the image top-left corner */}
          <div
            style={{
              position: "absolute",
              top: "-18px",
              left: "-18px",
              width: "52px",
              height: "52px",
              borderTop: "2px solid #eab308",
              borderLeft: "2px solid #eab308",
              zIndex: 3,
            }}
          />

          {/* Yellow bottom-right bracket — outside the image bottom-right corner */}
          <div
            style={{
              position: "absolute",
              bottom: "-18px",
              right: "-18px",
              width: "52px",
              height: "52px",
              borderBottom: "2px solid #eab308",
              borderRight: "2px solid #eab308",
              zIndex: 3,
            }}
          />

          {/* Main tall image */}
          <img
            src="/images/nn.jpg"
            alt="NNSEL Building Main"
            style={{
              display: "block",
              width: "100%",
              /* Tall portrait ratio matching screenshot */
              height: "420px",
              objectFit: "cover",
            }}
          />

          {/* Small overlapping image — bottom-left, poking below and to the left */}
          <div
            style={{
              position: "absolute",
              bottom: "-70px",      /* pokes below the main image */
              left: "-48px",        /* pokes left of the main image */
              width: "155px",
              height: "195px",
              border: "6px solid #0a0a0a",
              background: "#111",
              zIndex: 2,
            }}
          >
            <img
              src="/images/nn.jpg"
              alt="NNSEL Building Detail"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

        {/* ════════════════════════════
            RIGHT — Text content
            ════════════════════════════ */}
        <div
          style={{
            flex: 1,
            paddingTop: "0",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s 0.2s ease, transform 1s 0.2s ease",
          }}
        >
          {/* Eyebrow line */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <span style={{ display: "inline-block", width: "38px", height: "2px", background: "#eab308" }} />
            <span style={{ color: "#eab308", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(2rem, 3vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              margin: "0 0 24px 0",
              color: "#fff",
            }}
          >
            Crafting <br />
            <span style={{ color: "#eab308" }}>Quality Spaces</span> <br />
            Since 2015
          </h2>

          {/* Body paragraphs */}
          <div style={{ color: "#a0a0a0", fontSize: "13.5px", lineHeight: 1.75, marginBottom: "28px" }}>
            <p style={{ margin: "0 0 16px 0" }}>
              NN Services &amp; Engineering Ltd NNSEL is a pioneering real estate
              and development firm in Bangladesh, setting new benchmarks in
              architectural design, construction, and project delivery.
              Headquartered in Banani, a prominent corporate and commercial
              locale in Dhaka, NNSEL draws on the expertise of its in-house
              design professionals to craft projects that elevate the urban
              landscape.
            </p>
            <p style={{ margin: 0 }}>
              NNSEL's showcase of 14 distinguished properties across Banani,
              Bashundhara, Savar, and Gazipur reflects our unwavering
              commitment to creating environments that inspire and endure.
            </p>
          </div>

          {/* Stats row */}
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
  );
}
