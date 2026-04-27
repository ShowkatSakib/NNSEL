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
      className="relative w-full bg-[#0a0a0a] text-white overflow-hidden py-24 md:py-36"
      style={{ fontFamily: "'Onest', system-ui, sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Images */}
          <div
            className={`relative transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-[450px] mx-auto lg:ml-auto" style={{ aspectRatio: "4/5" }}>
              {/* Top Left Yellow Bracket */}
              <div
                className="absolute -top-6 -left-6 w-20 h-20"
                style={{ borderTop: "2px solid #eab308", borderLeft: "2px solid #eab308" }}
                aria-hidden="true"
              />
              {/* Bottom Right Yellow Bracket */}
              <div
                className="absolute -bottom-6 -right-6 w-20 h-20"
                style={{ borderBottom: "2px solid #eab308", borderRight: "2px solid #eab308" }}
                aria-hidden="true"
              />

              {/* Main Building Image */}
              <img
                src="/images/nn.jpg"
                alt="NNSEL Building Main"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Smaller Overlapping Image */}
              <div
                className="absolute z-20 bg-[#111]"
                style={{
                  bottom: "-48px",
                  left: "-64px",
                  width: "55%",
                  aspectRatio: "3/4",
                  border: "8px solid #0a0a0a",
                }}
              >
                <img
                  src="/images/nn.jpg"
                  alt="NNSEL Building Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 bg-[#eab308]" style={{ height: "2px" }} aria-hidden="true" />
              <span
                className="text-[#eab308] font-semibold uppercase"
                style={{ letterSpacing: "0.2em", fontSize: "12px" }}
              >
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-bold mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
            >
              Crafting <br />
              <span className="text-[#eab308]">Quality Spaces</span> <br />
              Since 2015
            </h2>

            {/* Paragraphs */}
            <div
              className="space-y-6 mb-10"
              style={{ color: "#a0a0a0", fontSize: "15px", lineHeight: "1.7" }}
            >
              <p>
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

            {/* Stats */}
            <div className="flex items-center gap-8 mb-10">
              <div>
                <p className="text-white font-bold" style={{ fontSize: "1.5rem" }}>14+</p>
                <p
                  className="mt-1 uppercase"
                  style={{ color: "#a0a0a0", fontSize: "11px", letterSpacing: "0.12em" }}
                >
                  Projects
                </p>
              </div>
              <div className="w-px h-10 bg-[#333]" />
              <div>
                <p className="text-white font-bold" style={{ fontSize: "1.5rem" }}>98%</p>
                <p
                  className="mt-1 uppercase"
                  style={{ color: "#a0a0a0", fontSize: "11px", letterSpacing: "0.12em" }}
                >
                  Satisfaction
                </p>
              </div>
              <div className="w-px h-10 bg-[#333]" />
              {/* Rehab Logo */}
              <div className="flex items-center">
                <img src="/images/rehab.jpg" alt="REHAB" className="object-contain" style={{ height: "40px" }} />
              </div>
            </div>

            {/* Certifications Row */}
            <div className="flex items-center gap-6">
              <img
                src="/images/iso.jpg"
                alt="ISO"
                className="object-contain"
                style={{ height: "32px", opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={e => (e.currentTarget.style.opacity = 0.7)}
              />
              <img
                src="/images/iaf.jpg"
                alt="IAF"
                className="object-contain"
                style={{ height: "32px", opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={e => (e.currentTarget.style.opacity = 0.7)}
              />
              <img
                src="/images/bqc.jpg"
                alt="BQC"
                className="object-contain"
                style={{ height: "32px", opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={e => (e.currentTarget.style.opacity = 0.7)}
              />
              <img
                src="/images/ias.jpg"
                alt="IAS"
                className="object-contain"
                style={{ height: "32px", opacity: 0.7, transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={e => (e.currentTarget.style.opacity = 0.7)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
