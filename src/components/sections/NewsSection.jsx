import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from "../../data/articles";

const F = {
  display:   "'Bebas Neue', sans-serif",
  condensed: "'Barlow Condensed', sans-serif",
  body:      "'Barlow', sans-serif",
};
const GOLD = '#d4a017';
const TABS = ['All', 'Blogs', 'Event'];
const OUTER = '2rem';
const GAP   = '3rem';

// ── Icons ──────────────────────────────────────────────────────────────────
function IconClock() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconCal() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ── Pieces ─────────────────────────────────────────────────────────────────
function Badge({ label }) {
  return (
    <span style={{
      display: 'inline-block', background: GOLD, color: '#000',
      fontFamily: F.condensed, fontSize: '0.58rem', fontWeight: 700,
      letterSpacing: '0.12em', padding: '0.2rem 0.65rem', textTransform: 'uppercase',
    }}>{label}</span>
  );
}

function Meta({ date, readTime }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.6rem',
      color: 'rgba(255,255,255,0.38)', fontFamily: F.body, fontSize: '0.7rem',
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.28rem' }}><IconCal /> {date}</span>
      <span style={{ color: 'rgba(255,255,255,0.18)' }}>|</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '0.28rem' }}><IconClock /> {readTime}</span>
    </div>
  );
}

function ReadArticle({ slug }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to={`/blogs/${slug}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center',
        gap: hov ? '0.6rem' : '0.35rem',
        fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 700,
        letterSpacing: '0.18em', color: GOLD, textDecoration: 'none',
        textTransform: 'uppercase', transition: 'gap 0.22s ease',
      }}
    >
      READ ARTICLE <IconArrow />
    </Link>
  );
}

function ArticleImage({ src, alt }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ overflow: 'hidden', width: '100%', aspectRatio: '16/10' }}>
      <img src={src} alt={alt}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.55s ease',
        }}
      />
    </div>
  );
}

function ImageCell({ article, side }) {
  const isLeft = side === 'left';
  return (
    <div style={{
      paddingTop: '2rem', paddingBottom: '2rem',
      paddingLeft:  isLeft ? OUTER : `calc(${GAP} / 2)`,
      paddingRight: isLeft ? `calc(${GAP} / 2)` : OUTER,
    }}>
      <div style={{ marginBottom: '0.65rem' }}><Badge label={article.category} /></div>
      <ArticleImage src={article.img} alt={article.title} />
    </div>
  );
}

function TextCell({ article, side }) {
  const isLeft = side === 'left';
  return (
    <div style={{
      paddingTop: '2rem', paddingBottom: '2rem',
      paddingLeft:  isLeft ? OUTER : `calc(${GAP} / 2)`,
      paddingRight: isLeft ? `calc(${GAP} / 2)` : OUTER,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <Meta date={article.date} readTime={article.readTime} />
      <h3 style={{
        fontFamily: F.body, fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)',
        fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: '0.7rem 0 0.65rem',
      }}>{article.title}</h3>
      <p style={{
        fontFamily: F.body, fontSize: '0.8rem', fontWeight: 300,
        color: 'rgba(255,255,255,0.52)', lineHeight: 1.78, marginBottom: '1rem',
      }}>{article.excerpt}</p>
      <ReadArticle slug={article.slug} />
    </div>
  );
}

function ArticleRow({ article, isLast }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.07)',
      position: 'relative', minHeight: '260px',
    }}>
      {/* Center dot */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '11px', height: '11px', borderRadius: '50%',
        background: '#111', border: '2px solid rgba(255,255,255,0.22)', zIndex: 2,
      }} />
      {article.imageLeft ? (
        <><ImageCell article={article} side="left" /><TextCell article={article} side="right" /></>
      ) : (
        <><TextCell article={article} side="left" /><ImageCell article={article} side="right" /></>
      )}
    </div>
  );
}

// ── Main ───────────────────────────────────────────────────────────────────
export default function NewsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? articles
    : articles.filter(a => a.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="news" style={{ background: '#0a0a0a', padding: '5rem 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: `0 ${OUTER}` }}>

        {/* ── (04) ——— UPDATES label ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          marginBottom: '1.2rem',
        }}>
          <span style={{
            fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 500,
            color: GOLD, letterSpacing: '0.05em',
          }}>(04)</span>
          {/* line */}
          <div style={{ width: '2.5rem', height: '1px', background: GOLD, opacity: 0.7 }} />
          <span style={{
            fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.3em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
          }}>UPDATES</span>
        </div>

        {/* ── Header row ── */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem',
        }}>
          <h2 style={{
            fontFamily: F.body, fontWeight: 800,
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            lineHeight: 1.1, color: '#fff', margin: 0,
          }}>
            Latest<br />
            <span style={{ color: GOLD }}>Insights</span>
          </h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {TABS.map(tab => {
              const active = activeTab === tab;
              return (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  padding: '0.38rem 1.05rem', fontFamily: F.condensed,
                  fontSize: '0.76rem', fontWeight: 600, letterSpacing: '0.08em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  border: active ? 'none' : '1px solid rgba(255,255,255,0.18)',
                  background: active ? GOLD : 'transparent',
                  color: active ? '#000' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >{tab}</button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Articles ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical center line */}
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0,
          width: '1px', background: 'rgba(255,255,255,0.09)',
          transform: 'translateX(-50%)', zIndex: 0, pointerEvents: 'none',
        }} />
        {filtered.map((article, i) => (
          <ArticleRow key={article.id} article={article} isLast={i === filtered.length - 1} />
        ))}
      </div>
    </section>
  );
}