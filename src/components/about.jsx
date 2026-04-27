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
      className="relative w-full bg-[#0a0a0a] text-white overflow-hidden"
      style={{ fontFamily: "'Onest', system-ui, sans-serif", minHeight: "100vh" }}
    >
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "100vh" }}>

        {/* LEFT: Full-bleed image — takes exactly 50% of the viewport width, no padding */}
        <div
          className={`relative w-full lg:w-1/2 transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ minHeight: "500px" }}
        >
          {/* Main image fills the entire left half edge-to-edge */}
          <img
            src="/images/nn.jpg"
            alt="NNSEL Building Main"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Yellow top-left bracket */}
          <div
            className="absolute z-10"
            style={{
              top: "32px",
              left: "32px",
              width: "64px",
              height: "64px",
              borderTop: "2px solid #eab308",
              borderLeft: "2px solid #eab308",
            }}
            aria-hidden="true"
          />

          {/* Yellow bottom-right bracket */}
          <div
            className="absolute z-10"
            style={{
              bottom: "120px",
              right: "32px",
              width: "64px",
              height: "64px",
              borderBottom: "2px solid #eab308",
              borderRight: "2px solid #eab308",
            }}
            aria-hidden="true"
          />

          {/* Smaller overlapping image — sits at bottom, slightly overlapping the right edge */}
          <div
            className="absolute z-20"
            style={{
              bottom: "40px",
              right: "-36px",
              width: "42%",
              aspectRatio: "3/4",
              border: "6px solid #0a0a0a",
              background: "#111",
            }}
          >
            <img
              src="/images/nn.jpg"
              alt="NNSEL Building Detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT: Text content — 50% width, content centered vertically with left padding */}
        <div
          className={`w-full lg:w-1/2 flex items-center transition-all duration-1000 delay-200 bg-[#0a0a0a] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ padding: "80px 60px 80px 80px" }}
        >
          <div className="w-full max-w-[520px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <span
                className="bg-[#eab308]"
                style={{ display: "inline-block", width: "48px", height: "2px" }}
                aria-hidden="true"
              />
              <span
                className="text-[#eab308] font-semibold uppercase"
                style={{ letterSpacing: "0.2em", fontSize: "12px" }}
              >
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-bold mb-8 text-white"
              style={{ fontSize: "clamp(2.2rem, 3vw, 3.6rem)", lineHeight: 1.1 }}
            >
              Crafting <br />
              <span className="text-[#eab308]">Quality Spaces</span> <br />
              Since 2015
            </h2>

            {/* Paragraphs */}
            <div className="mb-10" style={{ color: "#a0a0a0", fontSize: "15px", lineHeight: "1.75" }}>
              <p style={{ marginBottom: "24px" }}>
                NN Services &amp; Engineering Ltd NNSEL is a pioneering real estate
                and development firm in Bangladesh, setting new benchmarks in
                architectural design, construction, and project delivery.
                Headquartered in Banani, a prominent corporate and commercial
                locale in Dhaka, NNSEL draws on the expertise of its in-house
                design professionals to craft projects that elevate the urban
                landscape.
              </p>
              <p>
                NNSEL's showcase of 14 distinguished properties across Banani,
                Bashundhara, Savar, and Gazipur reflects our unwavering
                commitment to creating environments that inspire and endure.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center mb-10" style={{ gap: "32px" }}>
              <div>
                <p className="text-white font-bold" style={{ fontSize: "1.5rem" }}>14+</p>
                <p style={{ color: "#a0a0a0", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "4px" }}>
                  Projects
                </p>
              </div>
              <div style={{ width: "1px", height: "40px", background: "#333" }} />
              <div>
                <p className="text-white font-bold" style={{ fontSize: "1.5rem" }}>98%</p>
                <p style={{ color: "#a0a0a0", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "4px" }}>
                  Satisfaction
                </p>
              </div>
              <div style={{ width: "1px", height: "40px", background: "#333" }} />
              <div className="flex items-center">
                <img src="/images/rehab.jpg" alt="REHAB" style={{ height: "40px", objectFit: "contain" }} />
              </div>
            </div>

            {/* Certifications Row */}
            <div className="flex items-center" style={{ gap: "24px" }}>
              {["iso", "iaf", "bqc", "ias"].map((cert) => (
                <img
                  key={cert}
                  src={`/images/${cert}.jpg`}
                  alt={cert.toUpperCase()}
                  style={{ height: "32px", objectFit: "contain", opacity: 0.7, transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
