const GOLD = '#d4a017';
const F = { condensed: "'Barlow Condensed', sans-serif", body: "'Barlow', sans-serif" };

const values = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Trust & Integrity',
    desc: 'Building relationships on a foundation of honesty and transparency.',
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Premium Quality',
    desc: 'Uncompromising standards in materials, design, and execution.',
  },
  {
    number: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: 'Client Focus',
    desc: 'Your vision drives every decision we make.',
  },
  {
    number: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'Excellence',
    desc: '15 years of award-winning developments.',
  },
];

export default function ValuesSection() {
  return (
    <section style={{
      background: '#0a0a0a',
      padding: '6rem 2rem',
      textAlign: 'center',
    }}>
      {/* Header */}
      <p style={{
        fontFamily: F.condensed,
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.3em',
        color: GOLD,
        textTransform: 'uppercase',
        marginBottom: '0.75rem',
      }}>Our Foundation</p>

      <h2 style={{
        fontFamily: F.body,
        fontWeight: 800,
        fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
        color: '#fff',
        margin: '0 0 3.5rem',
        lineHeight: 1.2,
      }}>
        Built on <span style={{ color: GOLD }}>Values</span>
      </h2>

      {/* Cards grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
      }}>
        {values.map((v, i) => (
          <div
            key={i}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              padding: '2rem 1.75rem 2.25rem',
              textAlign: 'left',
              position: 'relative',
              overflow: 'hidden',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
          >
            {/* Large background number */}
            <span style={{
              position: 'absolute',
              top: '1rem',
              right: '1.25rem',
              fontFamily: F.body,
              fontWeight: 800,
              fontSize: '4.5rem',
              color: 'rgba(255,255,255,0.06)',
              lineHeight: 1,
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}>{v.number}</span>

            {/* Icon circle */}
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'rgba(212,160,23,0.12)',
              border: `1px solid rgba(212,160,23,0.25)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.75rem',
            }}>
              {v.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: F.body,
              fontWeight: 700,
              fontSize: '1.05rem',
              color: '#fff',
              margin: '0 0 0.65rem',
              lineHeight: 1.3,
            }}>{v.title}</h3>

            {/* Description */}
            <p style={{
              fontFamily: F.body,
              fontSize: '0.83rem',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.75,
              margin: 0,
            }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}