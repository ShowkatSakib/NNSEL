import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollTo } from '../../hooks/UseScrollTo';

const F = { condensed: "'Barlow Condensed', sans-serif", body: "'Barlow', sans-serif" };
const GOLD = '#d4a017';

function IconFB()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>; }
function IconIG()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>; }
function IconLI()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>; }
function IconYT()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#000"/></svg>; }
function IconUp()  { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>; }

function SocialBtn({ children, href }) {
  return (
    <a href={href || '#'} target="_blank" rel="noreferrer" style={{
      width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'all 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
    >{children}</a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);
  const scrollTo = useScrollTo();

  const handleSubscribe = () => {
    if (email.trim()) { setSubbed(true); setEmail(''); setTimeout(() => setSubbed(false), 3000); }
  };

  const navItem = (label, id) => (
    <button key={id} onClick={() => scrollTo(id)} style={{
      background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left',
      fontFamily: F.body, fontSize: '0.82rem', fontWeight: 300,
      color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s', display: 'block',
    }}
      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
    >{label}</button>
  );

  const extItem = (label, href) => (
    <a key={label} href={href} style={{
      fontFamily: F.body, fontSize: '0.82rem', fontWeight: 300,
      color: 'rgba(255,255,255,0.45)', textDecoration: 'none', display: 'block', transition: 'color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
    >{label}</a>
  );

  const col = (title) => (
    <p style={{ fontFamily: F.condensed, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', color: '#fff', textTransform: 'uppercase', marginBottom: '1.25rem' }}>{title}</p>
  );

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1.4fr', gap: '2.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60px', height: '46px' }}>
                <rect x="2"  y="4" width="14" height="52" rx="1" fill="#C8A84B"/>
                <rect x="33" y="4" width="14" height="52" rx="1" fill="#C8A84B"/>
                <polygon points="2,4 16,4 33,56 33,4 47,4 47,56 33,56 16,56" fill="rgba(200,168,75,0.15)"/>
                <rect x="58" y="4" width="18" height="52" rx="1" fill="#C8A84B" opacity="0.7"/>
                <polygon points="58,4 76,4 76,28 58,56" fill="rgba(0,0,0,0.45)"/>
              </svg>
            </div>
            <p style={{ fontFamily: F.body, fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: '220px', marginBottom: '1.5rem' }}>
              Building exceptional living spaces since 2015. Where architectural vision meets uncompromising quality.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <SocialBtn href="#"><IconFB /></SocialBtn>
              <SocialBtn href="#"><IconIG /></SocialBtn>
              <SocialBtn href="#"><IconLI /></SocialBtn>
              <SocialBtn href="#"><IconYT /></SocialBtn>
            </div>
          </div>

          {/* Navigate */}
          <div>
            {col('NAVIGATE')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navItem('Home',     'home')}
              {navItem('About',    'about')}
              {navItem('Projects', 'projects')}
              {navItem('Team',     'team')}
            </div>
          </div>

          {/* Connect */}
          <div>
            {col('CONNECT')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {navItem('News',    'news')}
              {navItem('Contact', 'contact')}
              {extItem('Careers', '#')}
              {extItem('FAQ',     '#')}
            </div>
          </div>

          {/* Legal */}
          <div>
            {col('LEGAL')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {extItem('Privacy Policy',   '#')}
              {extItem('Terms of Service', '#')}
              {extItem('Cookie Policy',    '#')}
              {extItem('Sitemap',          '#')}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            {col('NEWSLETTER')}
            <p style={{ fontFamily: F.body, fontSize: '0.8rem', fontWeight: 300, color: 'rgba(255,255,255,0.42)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Subscribe for exclusive updates and insights.
            </p>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
              placeholder="Your email"
              style={{
                width: '100%', padding: '0.7rem 0.85rem', boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff', fontFamily: F.body, fontSize: '0.8rem', outline: 'none',
                marginBottom: '0.5rem', transition: 'border-color 0.2s',
              }}
              onFocus={e => e.currentTarget.style.borderColor = GOLD}
              onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
            />
            <button onClick={handleSubscribe} style={{
              width: '100%', padding: '0.75rem',
              background: subbed ? '#2d8a4e' : GOLD,
              color: '#000', fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              border: 'none', cursor: 'pointer', transition: 'background 0.2s',
            }}>{subbed ? 'SUBSCRIBED ✓' : 'SUBSCRIBE'}</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: F.body, fontSize: '0.75rem', fontWeight: 300, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
            © 2026 NNSEL. All rights reserved.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none',
            cursor: 'pointer', fontFamily: F.condensed, fontSize: '0.7rem', fontWeight: 600,
            letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
          >
            Back to Top
            <div style={{ width: '30px', height: '30px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.4)' }}>
              <IconUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}