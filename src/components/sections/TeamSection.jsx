import { useState } from 'react';

const F = {
  display:   "'Bebas Neue', sans-serif",
  condensed: "'Barlow Condensed', sans-serif",
  body:      "'Barlow', sans-serif",
};
const GOLD = '#d4a017';

const members = [
  {
    id: 1,
    name: 'Mst. Falguni Nupur',
    role: 'Managing Director',
    bio: 'Leads NN Service & Engineering Ltd. with strategic vision and strong governance. Drives sustainable growth through professionalism and technical excellence. Committed to delivering reliable, high-quality real estate and engineering solutions.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    linkedin: '#',
    email: 'mailto:md@nnsel.com',
  },
  {
    id: 2,
    name: 'S.M Zahidul Islam',
    role: 'General Manager',
    bio: 'As General Manager, leads overall operations with strategic direction and strong governance. Drives organizational performance through effective leadership and data-driven decisions. Committed to excellence, accountability, and sustainable business growth.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    linkedin: '#',
    email: 'mailto:gm@nnsel.com',
  },
  {
    id: 3,
    name: 'Fahmida Aziz',
    role: 'Assistant General Manager (Structural Engineer)',
    bio: 'A Structural Engineer with over eight years of experience in engineering design and research, specializing in high-rise RCC structures, seismic soil behavior, and code-compliant design.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    linkedin: '#',
    email: 'mailto:agm@nnsel.com',
  },
  {
    id: 4,
    name: 'A.H. Awpurbo',
    role: 'Assistant General Manager (Architect)',
    bio: 'Creative problem-solver who turns dreams into buildable reality—balancing imagination, function, and rules.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
    linkedin: '#',
    email: 'mailto:arch@nnsel.com',
  },
];

// ── Icons ──────────────────────────────────────────────────────────────────
function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function IconEmail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function IconChevLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}
function IconChevRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

// ── Social icon circle button ──────────────────────────────────────────────
function SocialCircle({ href, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? '_self' : '_blank'}
      rel="noreferrer"
      style={{
        width: '38px', height: '38px', borderRadius: '50%',
        border: `1px solid ${GOLD}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: GOLD, textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#000'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}
    >
      {children}
    </a>
  );
}

// ── Nav arrow button ───────────────────────────────────────────────────────
function NavBtn({ onClick, children, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '36px', height: '36px', borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.25)',
        background: 'transparent',
        color: disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: disabled ? 'default' : 'pointer',
        transition: 'all 0.2s',
        flexShrink: 0,
      }}
      onMouseEnter={e => { if (!disabled) { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.7)'; }}
    >
      {children}
    </button>
  );
}

// ── Thumbnail ──────────────────────────────────────────────────────────────
function Thumb({ member, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '120px', height: '80px',
        overflow: 'hidden', cursor: 'pointer', flexShrink: 0,
        border: isActive ? `2px solid ${GOLD}` : '2px solid transparent',
        transition: 'border-color 0.25s ease',
        borderRadius: '6px',
      }}
    >
      <img
        src={member.img}
        alt={member.name}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          filter: isActive ? 'none' : 'brightness(0.55)',
          transition: 'filter 0.25s ease',
        }}
      />
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
export default function TeamSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const changeTo = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 280);
  };

  const prev = () => changeTo((active - 1 + members.length) % members.length);
  const next = () => changeTo((active + 1) % members.length);

  const member = members[active];

  // Thumbnail grid — 3 per row
  const thumbRows = [members.slice(0, 3), members.slice(3)];

  return (
    <section
      id="team"
      style={{
        background: '#0f0f0f',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* "TEAM" watermark text — far right background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: F.display,
          fontSize: 'clamp(12rem, 20vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.02em',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        TEAM
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 3rem', position: 'relative', zIndex: 1 }}>

        {/* ── Section label: 03 ——— LEADERSHIP ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <span style={{
            fontFamily: F.display,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: GOLD,
            lineHeight: 1,
            fontWeight: 900,
          }}>03</span>
          <div style={{ width: '2.5rem', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
          <span style={{
            fontFamily: F.condensed,
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.45)',
            textTransform: 'uppercase',
          }}>LEADERSHIP</span>
        </div>

        {/* ── Main layout: Photo left | Info right ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* ── LEFT: Large photo + name overlay + arrows ── */}
          <div>
            {/* Photo card */}
            <div
              style={{
                position: 'relative',
                width: '70%',
                aspectRatio: '4/5',
                overflow: 'hidden',
                borderRadius: '4px',
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateX(-12px)' : 'translateX(0)',
                transition: 'opacity 0.28s ease, transform 0.28s ease',
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                }}
              />
              {/* Gradient overlay at bottom for name */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                padding: '2rem 1.5rem 1.5rem',
              }}>
                <h3 style={{
                  fontFamily: F.body, fontWeight: 700,
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                  color: '#fff', margin: '0 0 0.3rem',
                }}>{member.name}</h3>
                <p style={{
                  fontFamily: F.body, fontWeight: 400,
                  fontSize: '0.82rem', color: GOLD, margin: 0,
                }}>{member.role}</p>
              </div>
            </div>

            {/* ── Prev / Next + progress bar ── */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.25rem',
            }}>
              <NavBtn onClick={prev}><IconChevLeft /></NavBtn>

              {/* Progress bar */}
              <div style={{
                flex: 1, height: '2px', background: 'rgba(255,255,255,0.12)', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${((active + 1) / members.length) * 100}%`,
                  background: `linear-gradient(90deg, ${GOLD}, #f5c842)`,
                  transition: 'width 0.4s ease',
                }} />
              </div>

              <NavBtn onClick={next}><IconChevRight /></NavBtn>
            </div>
          </div>

          {/* ── RIGHT: Heading + bio + social + thumbnails + counter ── */}
          <div
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateX(12px)' : 'translateX(0)',
              transition: 'opacity 0.28s ease, transform 0.28s ease',
            }}
          >
            {/* Heading */}
            <h2 style={{
              fontFamily: F.body, fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              color: '#fff', lineHeight: 1.25,
              margin: '0 0 1.25rem',
            }}>
              Meet The<br />
              <span style={{ color: GOLD }}>Visionaries</span><br />
              Behind NNSEL
            </h2>

            {/* Bio */}
            <p style={{
              fontFamily: F.body, fontWeight: 300,
              fontSize: '0.86rem', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.82, margin: '0 0 1.5rem', maxWidth: '420px',
            }}>{member.bio}</p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '2rem' }}>
              <SocialCircle href={member.linkedin}><IconLinkedin /></SocialCircle>
              <SocialCircle href={member.email}><IconEmail /></SocialCircle>
            </div>

            {/* Thumbnail grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              {thumbRows.map((row, ri) => (
                <div key={ri} style={{ display: 'flex', gap: '0.6rem' }}>
                  {row.map((m) => (
                    <Thumb
                      key={m.id}
                      member={m}
                      isActive={m.id === member.id}
                      onClick={() => changeTo(members.indexOf(m))}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Counter: 01 / 04   Team Members */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              <span style={{
                fontFamily: F.display, fontSize: '1.5rem', color: GOLD, lineHeight: 1,
              }}>
                {String(active + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: F.body, fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
              }}>/ {String(members.length).padStart(2, '0')}</span>
              <span style={{
                fontFamily: F.body, fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.35)',
                marginLeft: '0.5rem', letterSpacing: '0.05em',
              }}>Team Members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}