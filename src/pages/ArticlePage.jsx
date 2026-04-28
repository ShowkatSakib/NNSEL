import { useParams, Link } from 'react-router-dom';
import { useScrollTo } from '../hooks/UseScrollTo';
import { useEffect } from 'react';
import { articles } from '../data/articles';
import Footer from '../components/Footer';

const F = { display: "'Bebas Neue', sans-serif", condensed: "'Barlow Condensed', sans-serif", body: "'Barlow', sans-serif" };
const GOLD = '#d4a017';

function IconClock() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function IconCal()   { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>; }
function IconBack()  { return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>; }
function IconFB()    { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>; }
function IconTW()    { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>; }
function IconLI()    { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>; }
function IconShare() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>; }
function IconArrowR(){ return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>; }
function IconDiag()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>; }

function ShareBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      width: '36px', height: '36px', borderRadius: '50%',
      background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
      color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', transition: 'all 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = GOLD; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
    >{children}</button>
  );
}

function Sidebar({ currentId }) {
  const others = articles.filter(a => a.id !== currentId).slice(0, 4);
  return (
    <div>
      <h3 style={{ fontFamily: F.body, fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: `2px solid ${GOLD}`, display: 'inline-block' }}>Latest Updates</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '0.5rem' }}>
        {others.map(a => (
          <Link key={a.id} to={`/blogs/${a.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ cursor: 'pointer' }}
              onMouseEnter={e => { const p = e.currentTarget.querySelector('p'); if (p) p.style.color = GOLD; }}
              onMouseLeave={e => { const p = e.currentTarget.querySelector('p'); if (p) p.style.color = '#fff'; }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '16/9', marginBottom: '0.6rem' }}>
                <img src={a.img} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <p style={{ fontFamily: F.body, fontSize: '0.83rem', fontWeight: 700, color: '#fff', lineHeight: 1.4, margin: '0 0 0.3rem', transition: 'color 0.2s' }}>{a.title}</p>
              <span style={{ fontFamily: F.body, fontSize: '0.68rem', color: 'rgba(255,255,255,0.38)' }}>{a.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── Smart section renderer ─────────────────────────────────────────────────
function SectionBlock({ sec }) {
  // Type A: has bullets array → heading + optional intro + bullet list
  if (sec.bullets) {
    return (
      <div style={{ marginBottom: '0.25rem' }}>
        {sec.heading && (
          <h2 style={{ fontFamily: F.body, fontWeight: 700, fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: '#fff', lineHeight: 1.3, margin: '0 0 0.65rem' }}>
            {sec.heading}
          </h2>
        )}
        {sec.intro && (
          <p style={{ fontFamily: F.body, fontSize: '0.86rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, margin: '0 0 0.75rem' }}>{sec.intro}</p>
        )}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {sec.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
              <span style={{ color: GOLD, fontSize: '0.55rem', marginTop: '0.42rem', flexShrink: 0 }}>◆</span>
              <p style={{ fontFamily: F.body, fontSize: '0.86rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, margin: 0 }}>
                {b.label && <strong style={{ color: GOLD, fontWeight: 700 }}>{b.label}: </strong>}
                {b.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Type B: numbered section with heading
  if (sec.number && sec.heading) {
    return (
      <div>
        <h2 style={{ fontFamily: F.body, fontWeight: 700, fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: '#fff', lineHeight: 1.3, margin: '0 0 0.7rem' }}>
          {sec.number}. {sec.heading}
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '0.86rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, margin: 0 }}>{sec.body}</p>
      </div>
    );
  }

  // Type C: heading only (no number) — e.g. Conclusion in article 4
  if (sec.heading && !sec.number) {
    return (
      <div>
        <h2 style={{ fontFamily: F.body, fontWeight: 700, fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: '#fff', lineHeight: 1.3, margin: '0 0 0.7rem' }}>
          {sec.heading}
        </h2>
        <p style={{ fontFamily: F.body, fontSize: '0.86rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, margin: 0 }}>{sec.body}</p>
      </div>
    );
  }

  // Type D: plain paragraph only (articles 2 & 5 first section, etc.)
  return (
    <p style={{ fontFamily: F.body, fontSize: '0.86rem', fontWeight: 300, color: 'rgba(255,255,255,0.58)', lineHeight: 1.88, margin: 0 }}>{sec.body}</p>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const scrollTo = useScrollTo();
  const article = articles.find(a => a.slug === slug);
  const currentIndex = articles.findIndex(a => a.slug === slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [slug]);

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
        <button onClick={() => scrollTo('home')} style={{ color: GOLD, background: 'none', border: 'none', cursor: 'pointer', fontFamily: F.condensed, letterSpacing: '0.2em' }}>← BACK TO HOME</button>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '80px' }}>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(280px, 38vw, 420px)', overflow: 'hidden' }}>
        <img src={article.img} alt={article.title} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', display: 'block',
          filter: 'blur(4px)', transform: 'scale(1.08)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.92) 100%)' }} />

        <div style={{
          position: 'relative', zIndex: 1, height: '100%',
          maxWidth: '1100px', margin: '0 auto', padding: '0 2rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '2.5rem',
        }}>
          <button onClick={() => scrollTo('news')} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: F.condensed, fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase', marginBottom: '1.25rem', padding: 0,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = GOLD}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          ><IconBack /> BACK TO INSIGHTS</button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span style={{ background: GOLD, color: '#000', fontFamily: F.condensed, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', padding: '0.2rem 0.7rem', textTransform: 'uppercase' }}>{article.category}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: F.body, fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}><IconCal /> {article.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: F.body, fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)' }}><IconClock /> {article.readTime}</span>
          </div>

          <h1 style={{ fontFamily: F.body, fontWeight: 800, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', color: '#fff', lineHeight: 1.2, maxWidth: '680px', margin: 0 }}>{article.title}</h1>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 2rem',
        display: 'grid', gridTemplateColumns: '1fr 280px', gap: '4rem', alignItems: 'start',
      }}>

        {/* Left */}
        <div style={{ position: 'relative' }}>

          {/* SHARE column */}
          <div style={{ position: 'absolute', left: '-3.8rem', top: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ fontFamily: F.condensed, fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', marginBottom: '0.35rem' }}>SHARE</span>
            <ShareBtn onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}><IconFB /></ShareBtn>
            <ShareBtn onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank')}><IconTW /></ShareBtn>
            <ShareBtn onClick={() => window.open(`https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}`, '_blank')}><IconLI /></ShareBtn>
            <ShareBtn onClick={() => navigator.share?.({ title: article.title, url: shareUrl })}><IconShare /></ShareBtn>
          </div>

          {/* Pull quote */}
          <blockquote style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: '1.5rem', margin: '0 0 2.25rem' }}>
            <p style={{ fontFamily: F.body, fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', fontWeight: 400, color: 'rgba(255,255,255,0.78)', lineHeight: 1.9, fontStyle: 'italic', margin: 0 }}>{article.excerpt}</p>
          </blockquote>

          {/* Intro */}
          <p style={{ fontFamily: F.body, fontSize: '0.88rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '2rem' }}>{article.intro}</p>

          {/* Sections — smart rendering */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {article.sections.map((sec, i) => (
              <SectionBlock key={i} sec={sec} />
            ))}
          </div>

          {/* Author card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
            <img src={article.author.avatar} alt={article.author.name} style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: F.body, fontSize: '0.9rem', fontWeight: 700, color: '#fff', margin: '0 0 0.22rem' }}>Written by {article.author.name}</p>
              <p style={{ fontFamily: F.condensed, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', color: GOLD, textTransform: 'uppercase', margin: '0 0 0.55rem' }}>{article.author.role}</p>
              <p style={{ fontFamily: F.body, fontSize: '0.78rem', fontWeight: 300, color: 'rgba(255,255,255,0.48)', lineHeight: 1.7, margin: 0 }}>{article.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ position: 'sticky', top: '100px' }}>
          <Sidebar currentId={article.id} />
        </div>
      </div>

      {/* ── READ NEXT ── */}
      <div style={{ background: '#1a2235', padding: '3.5rem 2rem', textAlign: 'center' }}>
        <p style={{ fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.3em', color: GOLD, textTransform: 'uppercase', marginBottom: '0.75rem' }}>READ NEXT</p>
        <h3 style={{ fontFamily: F.body, fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.3 }}>{nextArticle.title}</h3>
        <Link to={`/blogs/${nextArticle.slug}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          fontFamily: F.condensed, fontSize: '0.78rem', fontWeight: 700,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.4)', padding: '0.75rem 2rem', transition: 'all 0.25s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = GOLD; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
        >CONTINUE READING <IconArrowR /></Link>
      </div>

      {/* ── READY TO FIND YOUR DREAM HOME ── */}
      <div style={{ background: '#0d0d0d', padding: '5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
        }}>
          <h2 style={{ fontFamily: F.body, fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', lineHeight: 1.2, margin: 0 }}>
            Ready to Find<br /><span style={{ color: GOLD }}>Your Dream Home?</span>
          </h2>
          <button onClick={() => scrollTo('contact')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1.25rem', padding: 0 }}>
            <span style={{ fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>START YOUR JOURNEY</span>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%', border: `2px solid ${GOLD}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, flexShrink: 0, transition: 'all 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}
            ><IconDiag /></div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}