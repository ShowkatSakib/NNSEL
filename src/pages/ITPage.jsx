import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const F = {
  display:   "'Bebas Neue', sans-serif",
  condensed: "'Barlow Condensed', sans-serif",
  body:      "'Barlow', sans-serif",
};
const GOLD = '#d4a017';

// ── Helpers ────────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1rem' }}>
      <div style={{ width: '2rem', height: '1px', background: GOLD }} />
      <span style={{ fontFamily: F.condensed, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase' }}>{children}</span>
      <div style={{ width: '2rem', height: '1px', background: GOLD }} />
    </div>
  );
}

function SectionLabelLeft({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <div style={{ width: '2rem', height: '1px', background: GOLD }} />
      <span style={{ fontFamily: F.condensed, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase' }}>{children}</span>
    </div>
  );
}

function CheckIcon({ color = GOLD }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function BulletDot({ color = GOLD }) {
  return <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0, marginTop: '6px' }} />;
}

// ── 1. HERO ────────────────────────────────────────────────────────────────
function ITHero({ onExplore, onContact }) {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80"
        alt="IT background"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))' }} />

      <div style={{
        position: 'relative', zIndex: 1, height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 1.5rem', paddingTop: '80px',
      }}>
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '2.5rem', height: '1px', background: GOLD }} />
          <span style={{ fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase' }}>IT SERVICES &amp; SOFTWARE DEVELOPMENT</span>
          <div style={{ width: '2.5rem', height: '1px', background: GOLD }} />
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', color: '#fff', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
          NN-<span style={{ color: GOLD }}>Technologies</span>
        </h1>

        {/* Description */}
        <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.75)', maxWidth: '560px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          Practical, scalable, and affordable digital solutions — from industry-specific ERP systems to SaaS HR platforms. Built from real domain knowledge. Delivered globally.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={onExplore} style={{
            background: GOLD, color: '#000', border: 'none', cursor: 'pointer',
            fontFamily: F.condensed, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.15em',
            padding: '0.9rem 1.8rem', textTransform: 'uppercase',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Explore Our Products ↗
          </button>
          <button onClick={onContact} style={{
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.35)',
            cursor: 'pointer', fontFamily: F.condensed, fontSize: '0.82rem', fontWeight: 600,
            letterSpacing: '0.15em', padding: '0.9rem 1.8rem', textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; e.currentTarget.style.color = '#fff'; }}
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <p style={{ fontFamily: F.condensed, fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }}>SCROLL</p>
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.25)', margin: '0 auto' }} />
        </div>
      </div>
    </section>
  );
}

// ── 2. STATS BAR ───────────────────────────────────────────────────────────
function ITStats() {
  const stats = [
    { icon: '🖥', value: '2', label: 'PRODUCTION SYSTEMS DEPLOYED' },
    { icon: '🌐', value: '5+', label: 'INTERNATIONAL CLIENTS' },
    { icon: '🎯', value: '3', label: 'CONTINENTS SERVED' },
  ];
  return (
    <section style={{ background: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr', alignItems: 'center', gap: 0 }}>
        {stats.map((s, i) => (
          <>
            <div key={s.label} style={{ textAlign: 'center', padding: '0 2rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{ fontFamily: F.display, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: GOLD, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: F.condensed, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
            {i < 2 && <div key={`div-${i}`} style={{ width: '1px', height: '60px', background: 'rgba(255,255,255,0.12)', margin: '0 auto' }} />}
          </>
        ))}
      </div>
    </section>
  );
}

// ── 3. ABOUT NN-TECHNOLOGIES ───────────────────────────────────────────────
function ITAbout() {
  const leftBullets = ['Industry-specific ERP systems', 'AI-powered workflow tools', 'IT consulting for SMEs'];
  const rightBullets = ['SaaS-based HR automation', 'Custom web & mobile apps', 'Micro-SaaS niche tools'];

  return (
    <section style={{ background: '#0a0a0a', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        {/* Left */}
        <div>
          <SectionLabelLeft>ABOUT NN-TECHNOLOGIES</SectionLabelLeft>
          <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 1.5rem' }}>
            Built from Real <span style={{ color: GOLD }}>Domain<br />Knowledge</span>
          </h2>
          <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1rem' }}>
            NNSEL is an emerging technology and software development company with roots in the construction, engineering, and business services sector. Unlike most IT startups building from abstract assumptions, NNSEL builds from lived experience of how real businesses actually operate.
          </p>
          <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: '1.75rem' }}>
            We sit at the intersection of bespoke IT services and vertical software product development — serving immediate client needs through custom development while simultaneously building scalable SaaS products for long-term recurring revenue.
          </p>

          {/* Bullet grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem 2rem' }}>
            {leftBullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <BulletDot /><span style={{ fontFamily: F.body, fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>{b}</span>
              </div>
            ))}
            {rightBullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <BulletDot /><span style={{ fontFamily: F.body, fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image stack */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
            {/* 3 Continents badge */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.8)', border: `1px solid ${GOLD}`, borderRadius: '4px', padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: GOLD }} />
              <span style={{ fontFamily: F.body, fontSize: '0.72rem', fontWeight: 600, color: '#fff' }}>3 Continents</span>
              <span style={{ fontFamily: F.body, fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)' }}>Delivered globally</span>
            </div>
          </div>
          {/* Mission card */}
          <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1rem', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1rem 1.25rem', maxWidth: '220px' }}>
            <div style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', color: GOLD, textTransform: 'uppercase', marginBottom: '0.5rem' }}>MISSION</div>
            <p style={{ fontFamily: F.body, fontSize: '0.75rem', fontWeight: 300, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>
              Deliver practical, scalable, affordable digital solutions that help businesses automate and grow efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 4. COMPLETED SOFTWARE SYSTEMS ─────────────────────────────────────────
function ITProducts() {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      tab: 'Construction ERP System',
      badge: 'ENTERPRISE SOFTWARE',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
      name: 'Construction ERP System',
      subtitle: 'Odoo-Based · Production Deployed',
      tags: [{ label: 'Odoo', color: '#7C3AED' }, { label: 'Python', color: '#2563EB' }, { label: 'PostgreSQL', color: '#059669' }, { label: 'OWeb', color: '#0891B2' }],
      description: 'A fully integrated ERP designed specifically for construction SMEs in South Asia — replacing disconnected spreadsheets with a unified, real-time digital operations hub.',
      features: ['Customer & Sales Management (CRM, pipeline, email marketing)', 'Project & Work Order Operations', 'Procurement & Supply Chain Control', 'Financial Accounting & Expense Management', 'Human Resources & Payroll', 'Business Intelligence Dashboards', 'Integrated Internal messaging & e-signatures'],
      impacts: ['Eliminated paper-based approvals', 'Real-time dashboards replaced days-old reports', 'Centralized financial visibility across projects', 'Direct blueprint for future Construction SaaS'],
    },
    {
      tab: 'HRM SaaS Platform',
      badge: 'SAAS PRODUCT',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
      name: 'HRM SaaS Platform',
      subtitle: 'Multi-Tenant · Cloud-Native',
      tags: [{ label: 'Next.js', color: '#fff' }, { label: 'Express.js', color: '#22C55E' }, { label: 'PostgreSQL', color: '#3B82F6' }, { label: 'Docker', color: '#06B6D4' }],
      description: 'A ground-up multi-tenant HR management platform built for SMEs — subscription-ready with full data isolation, payroll, attendance, and workforce analytics.',
      features: ['Core HR & Employee Lifecycle Management', 'Attendance, Shift & Roster Automation', 'Leave, Time Off & Policy Enforcement', 'Payroll Operations & Salary Intelligence', 'Workforce Analytics & Executive Dashboarding', 'Compliance, Security & Role-Based Access', 'Scalable Multi-Module SaaS Architecture'],
      impacts: ['Commercially licensable SaaS with immediate subscription potential', 'Supports thousands of concurrent tenants', 'React Native mobile app planned next', 'Positions NNSEL in global HR Tech market'],
    },
  ];

  const p = products[activeTab];

  return (
    <section id="products" style={{ background: '#0f0f0f', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>PRODUCTION-DEPLOYED</SectionLabel>
        <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', textAlign: 'center', margin: '0 0 0.75rem' }}>Completed Software Systems</h2>
        <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '520px', margin: '0 auto 3rem', lineHeight: 1.75 }}>
          Not proof-of-concept demos — fully operational systems solving active business problems. Two production-grade products already delivering value.
        </p>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
          {products.map((prod, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              fontFamily: F.condensed, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em',
              padding: '0.7rem 1.8rem', border: 'none', cursor: 'pointer',
              background: activeTab === i ? GOLD : 'transparent',
              color: activeTab === i ? '#000' : 'rgba(255,255,255,0.6)',
              outline: activeTab === i ? 'none' : '1px solid rgba(255,255,255,0.2)',
              borderRadius: '2rem', transition: 'all 0.2s',
            }}>
              {prod.tab}
            </button>
          ))}
        </div>

        {/* Product detail */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
          {/* Left: screenshot card */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', background: '#1a1a1a' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 1, background: 'rgba(0,0,0,0.7)', border: `1px solid ${GOLD}`, borderRadius: '4px', padding: '0.25rem 0.7rem' }}>
              <span style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: GOLD, textTransform: 'uppercase' }}>{p.badge}</span>
            </div>
            <img src={p.img} alt={p.name} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
              <h3 style={{ fontFamily: F.body, fontWeight: 700, fontSize: '1.2rem', color: '#fff', margin: '0 0 0.25rem' }}>{p.name}</h3>
              <p style={{ fontFamily: F.body, fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', margin: '0 0 0.75rem' }}>{p.subtitle}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {p.tags.map(t => (
                  <span key={t.label} style={{ fontFamily: F.condensed, fontSize: '0.65rem', fontWeight: 700, color: t.color === '#fff' ? '#000' : '#fff', background: t.color, padding: '0.2rem 0.6rem', borderRadius: '3px' }}>{t.label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: features */}
          <div>
            <p style={{ fontFamily: F.body, fontSize: '0.9rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.75rem' }}>{p.description}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>🔄</span>
                  <span style={{ fontFamily: F.condensed, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', color: GOLD, textTransform: 'uppercase' }}>KEY FEATURES</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckIcon /><span style={{ fontFamily: F.body, fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.9rem' }}>📈</span>
                  <span style={{ fontFamily: F.condensed, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', color: '#22C55E', textTransform: 'uppercase' }}>BUSINESS IMPACT</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {p.impacts.map(im => (
                    <div key={im} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
                      </svg>
                      <span style={{ fontFamily: F.body, fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{im}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 5. GLOBAL DELIVERY TRACK RECORD ───────────────────────────────────────
function ITPortfolio() {
  const projects = [
    { code: 'BE', name: 'Onplo', category: 'DIGITAL PLATFORM / SAAS', location: 'Harelbeke, Belgium', desc: 'High-performance personal website with interactive UI, multi-language support, and integrated contact management.', service: 'CUSTOM WEBSITE DEVELOPMENT' },
    { code: 'BE', name: 'Ozivon', category: 'REAL ESTATE & CONSTRUCTION', location: 'Harelbeke, Belgium', desc: 'Refactored a construction platform with updated SVG assets, improved UI functionality, and full multi-language support.', service: 'WEBSITE REDESIGN & ENHANCEMENT' },
    { code: 'BE', name: 'Jonas Van Hastel', category: 'BUSINESS CONSULTING', location: 'Belgium', desc: 'End-to-end strategic advisory covering tech stack selection, product roadmap guidance, feature prioritization, and recruitment.', service: 'TECHNOLOGY STRATEGY & TALENT CONSULTING' },
    { code: 'BD', name: 'Wiexon (Karbari App)', category: 'MOBILE / E-COMMERCE', location: 'Dhaka, Bangladesh', desc: 'Built the complete web presence for the Karbari marketplace platform — product listing, search, and user management from the ground up.', service: 'FULL-STACK WEB APPLICATION' },
    { code: 'IN', name: 'Mohammad Imtiaz Uddin', category: 'MOBILITY / TRANSPORT TECH', location: 'India', desc: 'Full-featured bike rental platform with smart search, fleet management, real-time dashboards, and comprehensive admin control.', service: 'BIKE RENTAL PLATFORM (3-MONTH BUILD)' },
  ];

  return (
    <section style={{ background: '#0a0a0a', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>CLIENT PORTFOLIO</SectionLabel>
        <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', textAlign: 'center', margin: '0 0 1rem' }}>Global Delivery Track Record</h2>
        <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '540px', margin: '0 auto 3.5rem', lineHeight: 1.75 }}>
          Projects delivered across three continents — demonstrating the capacity to serve international clients, navigate cross-cultural engagements, and ship production-grade software.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }}>
          {projects.slice(0, 3).map(p => <ProjectCard key={p.name} p={p} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', marginBottom: '2rem', maxWidth: '66.6%' }}>
          {projects.slice(3).map(p => <ProjectCard key={p.name} p={p} />)}
        </div>

        {/* Geographic reach banner */}
        <div style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.5rem 2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>🌐</div>
          <p style={{ fontFamily: F.body, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0 }}>
            <span style={{ color: GOLD, fontWeight: 700 }}>Geographic Reach:</span> NNSEL has successfully delivered projects across <strong style={{ color: '#fff' }}>three continents</strong> — Europe (Belgium), South Asia (Bangladesh), and the Indian Subcontinent — demonstrating the team's capacity to operate globally from day one.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <div style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: F.body, fontWeight: 900, fontSize: '1.6rem', color: 'rgba(255,255,255,0.15)', lineHeight: 1 }}>{p.code}</span>
        <span style={{ fontFamily: F.condensed, fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', color: '#22C55E', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', padding: '0.15rem 0.5rem', borderRadius: '2rem' }}>COMPLETED</span>
      </div>
      <h4 style={{ fontFamily: F.body, fontWeight: 700, fontSize: '1rem', color: '#fff', margin: 0 }}>{p.name}</h4>
      <span style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', color: GOLD, textTransform: 'uppercase' }}>{p.category}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
        <span style={{ color: '#ef4444', fontSize: '0.7rem' }}>📍</span>
        <span style={{ fontFamily: F.body, fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{p.location}</span>
      </div>
      <p style={{ fontFamily: F.body, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: '0.25rem 0 0' }}>{p.desc}</p>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem', marginTop: 'auto' }}>
        <span style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' }}>{p.service}</span>
      </div>
    </div>
  );
}

// ── 6. SERVICES & REVENUE STREAMS ─────────────────────────────────────────
function ITServices() {
  const services = [
    { icon: '🗄', title: 'Odoo ERP Implementation', desc: 'Custom Odoo deployment for construction, manufacturing, and trading SMEs.', priority: 'HIGH' },
    { icon: '👥', title: 'HRM SaaS Licensing', desc: 'Subscription-based HR platform with full data isolation. Ready to deploy immediately.', priority: 'HIGH' },
    { icon: '</', title: 'Custom Django / React Apps', desc: 'Full-stack web development with Django backend and React frontend.', priority: 'HIGH' },
    { icon: '⊙', title: 'AI Workflow Automation', desc: 'Embed AI in your workflows — smart reports, document extraction, chatbots.', priority: 'MEDIUM' },
    { icon: '📱', title: 'Mobile App Development', desc: 'Cross-platform iOS & Android apps with React Native.', priority: 'MEDIUM' },
    { icon: '🎯', title: 'IT Consulting for SMEs', desc: 'Strategic tech advisory, stack selection, product roadmap, and digital transformation.', priority: 'MEDIUM' },
  ];

  const priorityColor = { HIGH: GOLD, MEDIUM: 'rgba(255,255,255,0.45)' };

  return (
    <section style={{ background: '#0f0f0f', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>WHAT WE OFFER</SectionLabel>
        <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', textAlign: 'center', margin: '0 0 1rem' }}>Services & Revenue Streams</h2>
        <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '480px', margin: '0 auto 3.5rem', lineHeight: 1.75 }}>
          Revenue-generating services you can engage today, alongside a growing SaaS product portfolio for recurring income.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {services.map(s => (
            <div key={s.title} style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '1.75rem', position: 'relative', transition: 'border-color 0.2s', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}50`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <span style={{ fontFamily: F.condensed, fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', color: priorityColor[s.priority], border: `1px solid ${priorityColor[s.priority]}50`, padding: '0.15rem 0.5rem', borderRadius: '2rem' }}>{s.priority}</span>
              </div>
              <div style={{ fontSize: '1.4rem', marginBottom: '1rem', color: GOLD }}>{s.icon}</div>
              <h4 style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.95rem', color: '#fff', margin: '0 0 0.6rem' }}>{s.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: '0 0 1.25rem' }}>{s.desc}</p>
              <div style={{ color: GOLD, fontSize: '0.75rem' }}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 7. MARKET ANALYSIS ────────────────────────────────────────────────────
function ITMarket() {
  const metrics = [
    { value: '$142B', label: 'AI SAAS MARKET', sublabel: '39.6% CAGR', color: '#7C3AED' },
    { value: '$164B', label: 'VERTICAL SAAS', sublabel: '18-22% CAGR', color: '#3B82F6' },
    { value: '$35B+', label: 'HR TECH GLOBAL', sublabel: 'by 2030', color: '#059669' },
    { value: '60%', label: 'SME AUTOMATION', sublabel: 'adoption rate', color: '#8B5CF6' },
  ];
  const points = [
    { title: 'AI is now baseline SaaS infrastructure', desc: '80%+ companies deploying AI apps by end of 2026' },
    { title: 'Vertical SaaS growing 18–22% CAGR', desc: '3× higher retention than horizontal alternatives' },
    { title: 'SME automation adoption accelerating', desc: '60% of small businesses rely on vertical SaaS daily' },
    { title: 'Security is now a purchasing requirement', desc: 'SOC 2, ISO 27001, GDPR — entry tickets to US/EU markets' },
  ];

  return (
    <section style={{ background: '#0a0a0a', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <SectionLabelLeft>MARKET ANALYSIS · APRIL 2026</SectionLabelLeft>
          <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 1.5rem' }}>
            The Market Is Moving<br /><span style={{ color: GOLD }}>Our Way</span>
          </h2>
          <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>
            The global IT software market is undergoing a decisive structural shift. The era of generic, one-size-fits-all platforms is giving way to specialized, AI-embedded, industry-specific solutions — precisely what NNSEL is building.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {points.map(pt => (
              <div key={pt.title} style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px', padding: '0.9rem 1.1rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <BulletDot color='#7C3AED' />
                <div>
                  <div style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.82rem', color: '#fff', marginBottom: '0.2rem' }}>{pt.title}</div>
                  <div style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)' }}>{pt.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {metrics.map(m => (
              <div key={m.label} style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontFamily: F.body, fontWeight: 900, fontSize: '2rem', color: m.color, lineHeight: 1, marginBottom: '0.35rem' }}>{m.value}</div>
                <div style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: m.color, textTransform: 'uppercase', marginBottom: '0.25rem' }}>{m.sublabel}</div>
                <div style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{m.label}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#141414', border: `1px solid ${GOLD}30`, borderRadius: '8px', padding: '1rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: GOLD, flexShrink: 0, marginTop: '4px' }} />
            <p style={{ fontFamily: F.body, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: 0 }}>
              <span style={{ color: GOLD, fontWeight: 700 }}>NN-Technologies:</span> Two high-demand verticals already delivered. The fastest path to defensible market position is to go <strong style={{ color: '#fff' }}>deeper</strong>, not broader.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 8. STRATEGIC ROADMAP ──────────────────────────────────────────────────
function ITRoadmap() {
  const phases = [
    {
      phase: 'Phase 1', label: 'Stabilize & Win First Clients', color: GOLD, dot: GOLD,
      timeline: '0–6 MONTHS',
      items: ['Odoo ERP Implementation & customization for SMEs', 'HRM SaaS commercial licensing — first paying subscribers', 'Custom web application development', 'Business workflow automation tools', 'IT consulting for local SMEs'],
    },
    {
      phase: 'Phase 2', label: 'Build & Scale', color: '#3B82F6', dot: '#3B82F6',
      timeline: '6–18 MONTHS',
      items: ['React Native mobile app for HRM (iOS + Android)', 'Standalone Construction SaaS product development', 'AI features: smart leave forecasting, payroll alerts', 'Payroll Micro-SaaS product launch', 'First team hire: junior full-stack developer'],
    },
    {
      phase: 'Phase 3', label: 'Scale & Own the Niche', color: '#22C55E', dot: '#22C55E',
      timeline: '2–3 YEARS',
      items: ['Performance marketing targeting US & European SMEs', 'SOC 2 Type II compliance certification', 'Self-service onboarding — zero human intervention', 'AI Analytics Layer across all products', 'Integration Marketplace: QuickBooks, Xero, Slack'],
    },
  ];

  return (
    <section style={{ background: '#0f0f0f', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>STRATEGIC ROADMAP</SectionLabel>
        <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', textAlign: 'center', margin: '0 0 1rem' }}>Three Phases to Market Leadership</h2>
        <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 3.5rem', lineHeight: 1.75 }}>
          Survival-first, scale-second. Every phase is tied to specific, measurable outcomes with clear success criteria.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {phases.map(ph => (
            <div key={ph.phase} style={{ background: '#141414', border: `1px solid ${ph.dot}25`, borderRadius: '10px', padding: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: ph.dot }} />
                <span style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>{ph.timeline}</span>
              </div>
              <h3 style={{ fontFamily: F.body, fontWeight: 900, fontSize: '1.3rem', color: '#fff', margin: '0 0 0.4rem' }}>{ph.phase}</h3>
              <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.82rem', color: ph.color, margin: '0 0 1.25rem' }}>{ph.label}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {ph.items.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <CheckIcon color={ph.dot} />
                    <span style={{ fontFamily: F.body, fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 9. DIFFERENTIATORS ────────────────────────────────────────────────────
function ITDifferentiators() {
  const items = [
    { n: '01', icon: '👤', title: 'Proven Execution at the Earliest Stage', desc: 'NNSEL has deployed real, production-grade systems for real clients. The ERP and HRM projects are proof, not promises.' },
    { n: '02', icon: '📈', title: 'Operating in the Highest-Growth Segment', desc: 'Vertical SaaS growing at 18–22% CAGR is precisely the space NNSEL occupies — before that was even the explicit strategy.' },
    { n: '03', icon: '🔒', title: 'Domain Credibility From Day One', desc: 'Construction and engineering heritage means NNSEL builds software with actual industry understanding — a most purely technical startups can\'t replicate.' },
    { n: '04', icon: '📦', title: 'Hybrid Model Built for Survival & Scale', desc: 'Services fund operations; products fund the future. This reduces funding dependency and builds market knowledge through direct client relationships.' },
    { n: '05', icon: '📊', title: 'Emerging-Market Cost Advantage', desc: 'Enterprise-grade software at 40–60% the cost of US or European equivalents — highly competitive for international outsourcing.' },
    { n: '06', icon: '☁', title: 'Future-Ready Architecture', desc: 'Cloud-native, API-first, containerized infrastructure — ready for AI integration, mobile extension, and multi-market deployment without rebuilding.' },
  ];

  return (
    <section style={{ background: '#0a0a0a', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionLabel>DIFFERENTIATORS</SectionLabel>
        <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', textAlign: 'center', margin: '0 0 1rem' }}>Why NN-Technologies Is Different</h2>
        <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 3.5rem', lineHeight: 1.75 }}>
          What separates NN-Technologies from generic development agencies and oversized enterprise vendors.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '4rem' }}>
          {items.map(item => (
            <div key={item.n} style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '1.75rem', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${GOLD}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontFamily: F.body, fontWeight: 900, fontSize: '1.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1 }}>{item.n}</span>
                <span style={{ fontSize: '1rem', color: GOLD }}>{item.icon}</span>
              </div>
              <h4 style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.88rem', color: '#fff', margin: '0 0 0.65rem', lineHeight: 1.35 }}>{item.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ width: '2rem', height: '2px', background: GOLD, margin: '0 auto 2rem' }} />
          <blockquote style={{ fontFamily: F.body, fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            "NN-Technologies is the affordable, domain-expert alternative to both oversized enterprise vendors and generic development agencies."
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ fontFamily: F.condensed, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>NN-TECHNOLOGIES POSITIONING STATEMENT, APRIL 2026</span>
            <div style={{ width: '2rem', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 10. PATH FORWARD + CTA ────────────────────────────────────────────────
function ITPathForward({ onContact }) {
  const steps = [
    { when: 'NOW', icon: '🚀', title: 'Sell services for revenue', desc: 'Stabilize the business with immediate client engagements.' },
    { when: 'NEXT', icon: '📦', title: 'Productize repeated solutions', desc: 'Create recurring income from existing SaaS assets.' },
    { when: 'THEN', icon: '📈', title: 'Scale one niche SaaS offering', desc: 'Build enterprise value with mobile and AI extensions.' },
  ];
  const whenColor = { NOW: GOLD, NEXT: '#3B82F6', THEN: '#22C55E' };

  return (
    <>
      <section style={{ background: '#0f0f0f', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', textAlign: 'center', margin: '0 0 1rem' }}>The Path Forward</h2>
          <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', maxWidth: '440px', margin: '0 auto 3.5rem', lineHeight: 1.75 }}>
            A disciplined three-step progression designed for bootstrapped growth and sustainable scale.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {steps.map(s => (
              <div key={s.when} style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <div style={{ fontFamily: F.condensed, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.25em', color: whenColor[s.when], textTransform: 'uppercase', marginBottom: '0.75rem' }}>{s.when}</div>
                <h4 style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.92rem', color: '#fff', margin: '0 0 0.6rem' }}>{s.title}</h4>
                <p style={{ fontFamily: F.body, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80" alt="office"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '2rem', height: '1px', background: GOLD }} />
            <span style={{ fontFamily: F.condensed, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase' }}>LET'S BUILD TOGETHER</span>
            <div style={{ width: '2rem', height: '1px', background: GOLD }} />
          </div>
          <h2 style={{ fontFamily: F.body, fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', lineHeight: 1.15, margin: '0 0 1rem' }}>
            Ready to Digitize Your<br /><span style={{ color: GOLD }}>Business?</span>
          </h2>
          <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Whether you need an ERP implementation, a custom web application, or want to explore our HRM SaaS — our team is ready to deliver measurable results for your organization.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onContact} style={{
              background: GOLD, color: '#000', border: 'none', cursor: 'pointer',
              fontFamily: F.condensed, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em',
              padding: '0.9rem 1.8rem', borderRadius: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Schedule a Discovery Call ↗
            </button>
            <a href="mailto:info@nnsel.com" style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              fontFamily: F.condensed, fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.12em',
              padding: '0.9rem 1.8rem', borderRadius: '2rem', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff'; }}
            >
              info@nnsel.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────────────────────
export default function ITPage() {
  const navigate = useNavigate();

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goToContact = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 380);
  };

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '0' }}>
      <ITHero onExplore={scrollToProducts} onContact={goToContact} />
      <ITStats />
      <ITAbout />
      <ITProducts />
      <ITPortfolio />
      <ITServices />
      <ITMarket />
      <ITRoadmap />
      <ITDifferentiators />
      <ITPathForward onContact={goToContact} />
      <Footer />
    </div>
  );
}