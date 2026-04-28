import { useState } from 'react';
import { useScrollTo } from "../../hooks/useScrollTo";

const F = { condensed: "'Barlow Condensed', sans-serif", body: "'Barlow', sans-serif" };
const GOLD = '#d4a017';


function IconLoc()  { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function IconPhone(){ return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>; }
function IconEmail(){ return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>; }
function IconTime(){ return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>; }
function IconSend(){ return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>; }
function IconCallSm(){ return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>; }
function IconMapPin(){ return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>; }
function IconExtLink(){ return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>; }
function IconArrowDiag(){ return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>; }

function Field({ label, name, value, onChange, type = 'text', multiline = false }) {
  const base = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    color: '#fff', fontFamily: F.body, fontSize: '0.88rem', fontWeight: 300,
    padding: '0.85rem 0', outline: 'none', transition: 'border-color 0.2s', resize: 'none',
  };
  return multiline
    ? <textarea name={name} value={value} onChange={onChange} rows={4} placeholder={label} style={base}
        onFocus={e => e.currentTarget.style.borderBottomColor = GOLD}
        onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.15)'} />
    : <input type={type} name={name} value={value} onChange={onChange} placeholder={label} style={base}
        onFocus={e => e.currentTarget.style.borderBottomColor = GOLD}
        onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.15)'} />;
}

function InfoCard({ icon, label, value }) {
  return (
    <div style={{ background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)', padding: '1.1rem 1.1rem' }}>
      <div style={{ marginBottom: '0.4rem' }}>{icon}</div>
      <div style={{ fontFamily: F.condensed, fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{label}</div>
      <div style={{ fontFamily: F.body, fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{value}</div>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const scrollTo = useScrollTo();

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* ── Contact Section ── */}
      <section id="contact" style={{ background: '#0f0f0f', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* (06) ——— CONTACT */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
            <span style={{ fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 500, color: GOLD, letterSpacing: '0.05em' }}>(06)</span>
            <div style={{ width: '2.5rem', height: '1px', background: GOLD, opacity: 0.7 }} />
            <span style={{ fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>CONTACT</span>
          </div>

          {/* Heading row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end', marginBottom: '3.5rem' }}>
            <h2 style={{ fontFamily: F.body, fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', lineHeight: 1.1, color: '#fff', margin: 0 }}>
              Let's Build<br /><span style={{ color: GOLD }}>Together</span>
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '0.88rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, textAlign: 'right', margin: 0 }}>
              Ready to start your journey to a dream home?<br />We're here to make it happen.
            </p>
          </div>

          {/* Form + Info grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Form */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <Field label="Full Name"     name="name"    value={form.name}    onChange={onChange} />
                <Field label="Email Address" name="email"   value={form.email}   onChange={onChange} type="email" />
                <Field label="Subject"       name="subject" value={form.subject} onChange={onChange} />
                <Field label="Your Message"  name="message" value={form.message} onChange={onChange} multiline />
              </div>
              <button onClick={onSubmit} style={{
                width: '100%', padding: '1.1rem', background: sent ? '#2d8a4e' : GOLD,
                color: '#000', fontFamily: F.condensed, fontSize: '0.82rem', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                transition: 'background 0.2s',
              }}>
                {sent ? 'MESSAGE SENT ✓' : <><span>SEND MESSAGE</span><IconSend /></>}
              </button>
            </div>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <InfoCard icon={<IconLoc />}   label="LOCATION" value="House 37, Road 15, Banani, Dhaka 1213" />
                <InfoCard icon={<IconPhone />}  label="PHONE"    value="+880 1805-047288" />
                <InfoCard icon={<IconEmail />}  label="EMAIL"    value="info@nnsel.com" />
                <InfoCard icon={<IconTime />}   label="HOURS"    value="Sat – Thurs: 10AM – 6PM" />
              </div>
              {/* Prefer a Call */}
              <div style={{
                background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.07)',
                padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.88rem', color: '#fff', margin: '0 0 0.2rem' }}>Prefer a Call?</p>
                  <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Schedule a consultation call</p>
                </div>
                <a href="tel:+8801805047288" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: GOLD, color: '#000', fontFamily: F.condensed,
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', padding: '0.6rem 1.1rem', textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                ><IconCallSm /> Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section style={{ background: '#0a0a0a', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Map header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(212,160,23,0.12)', border: `1px solid ${GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD }}>
                <IconMapPin />
              </div>
              <div>
                <p style={{ fontFamily: F.body, fontWeight: 700, fontSize: '0.9rem', color: '#fff', margin: 0 }}>NN Services &amp; Engineering Ltd.</p>
                <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>House 37, Road 15, Banani, Dhaka 1213</p>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Banani+Dhaka+Bangladesh" target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: F.condensed, fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff',
                textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)',
                padding: '0.55rem 1.1rem', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.color = GOLD; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
            ><IconExtLink /> Open in Google Maps →</a>
          </div>

          {/* Map iframe */}
          <div style={{ width: '100%', height: '340px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
            <iframe
              title="NNSEL Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5406303756684!2d90.39994!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f5de3df7%3A0x4b7b8a8b1234abcd!2sBanani%2C%20Dhaka%201213%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
              width="100%" height="340"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── Ready to Find Your Dream Home CTA ── */}
      <section style={{ background: '#0d0d0d', padding: '5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: GOLD, flexShrink: 0,
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = GOLD; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = GOLD; }}
            >
              <IconArrowDiag />
            </div>
          </button>
        </div>
      </section>
    </>
  );
}