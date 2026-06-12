'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SEASONS = ['spring', 'summer', 'autumn', 'winter'];
const PHASE_MS = 3750; // 4 x 3.75s = 15s loop

const PARTICLES = {
  spring: { count: 13, up: false, style: () => {
    const s = 5 + Math.random() * 5;
    return { width: s, height: s * 0.72, borderRadius: '60% 40% 55% 45%', background: '#f3b8c4' };
  }},
  summer: { count: 11, up: true, style: () => {
    const s = 3 + Math.random() * 4;
    return { width: s, height: s, background: '#f0cf7e', boxShadow: '0 0 8px 2px rgba(240,207,126,.5)' };
  }},
  autumn: { count: 13, up: false, style: () => {
    const s = 6 + Math.random() * 6;
    return { width: s, height: s * 0.8, borderRadius: '0 65% 0 65%', background: Math.random() > 0.5 ? '#d98a4b' : '#c96f3b' };
  }},
  winter: { count: 16, up: false, style: () => {
    const s = 3 + Math.random() * 4.5;
    return { width: s, height: s, background: '#fff', boxShadow: '0 0 5px 1px rgba(180,200,215,.6)' };
  }},
};

function buildParticles(season) {
  const cfg = PARTICLES[season];
  return Array.from({ length: cfg.count }, (_, i) => {
    const dur = 6 + Math.random() * 5;
    const s = cfg.style();
    return {
      key: `${season}-${i}`,
      up: cfg.up,
      style: {
        ...s,
        width: `${s.width}px`,
        height: `${s.height}px`,
        left: `${Math.random() * 96}%`,
        '--sway': `${Math.random() * 70 - 35}px`,
        animationDuration: `${dur}s`,
        animationDelay: `${-Math.random() * dur}s`,
      },
    };
  });
}

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [particles, setParticles] = useState([]);
  const [reduced, setReduced] = useState(false);
  const wordRef = useRef(null);
  const season = SEASONS[idx];

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) return;
    setParticles(buildParticles(SEASONS[0]));
    const t = setInterval(() => setIdx((i) => (i + 1) % SEASONS.length), PHASE_MS);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (reduced) return;
    setParticles(buildParticles(season));
    const el = wordRef.current;
    if (el) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = 'wordIn .6s cubic-bezier(.2,.8,.3,1)';
    }
  }, [season, reduced]);

  return (
    <header className="hero" data-season={season}>
      <div className="wrap hero-grid">
        <div className="stagger">
          <span className="eyebrow">Peachtree City · Fayette &amp; Coweta Counties</span>
          <h1>
            A clean home for every{' '}
            <span className="season-word">
              <span className="word" ref={wordRef}>{reduced ? 'season' : season}</span>
            </span>
          </h1>
          <p className="lede">
            Professional residential and Airbnb turnover cleaning by a local, systems-driven
            team — not a franchise. Vetted cleaners, photo-documented quality, satisfaction
            guaranteed on every visit.
          </p>
          <div className="hero-ctas">
            <Link className="btn" href="/#quote">Get a Free Quote</Link>
            <a className="btn ghost" href="tel:4706832228">Call (470) 683-2228</a>
          </div>
          <div className="trust-strip">
            <span className="trust-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2.4"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>
              Licensed &amp; Insured · $1M GL
            </span>
            <span className="trust-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2.4"><path d="M20 6L9 17l-5-5"/></svg>
              Background-Checked
            </span>
            <span className="trust-item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2.4"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
              Replies Within Hours
            </span>
          </div>
          {!reduced && (
            <div className="season-dots" aria-hidden="true">
              {SEASONS.map((s, i) => (
                <span key={s} className={`sd${i === idx ? ' on' : ''}`} />
              ))}
              <span className="sd-label" style={{ color: 'var(--season-accent)' }}>{season}</span>
            </div>
          )}
        </div>

        <div className="scene" aria-hidden="true">
          <div className="glow" />
          <div className="particles">
            {particles.map((p) => (
              <span key={p.key} className={`p${p.up ? ' up' : ''}`} style={p.style} />
            ))}
          </div>
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="house-group">
              <ellipse cx="200" cy="318" rx="150" ry="14" fill="#16302a" opacity=".07"/>
              <rect x="120" y="190" width="160" height="120" rx="6" fill="#ffffff" stroke="#16302a" strokeWidth="3"/>
              <path d="M104 196 L200 118 L296 196" stroke="#16302a" strokeWidth="3" fill="#2e6b4f" fillOpacity=".92" strokeLinejoin="round"/>
              <path d="M118 192 L200 126 L282 192 Z" fill="#fff" opacity=".08"/>
              <rect x="246" y="138" width="20" height="40" rx="3" fill="#16302a"/>
              <rect x="184" y="244" width="34" height="66" rx="4" fill="#1d4a37"/>
              <circle cx="211" cy="278" r="2.6" fill="#d9a441"/>
              <rect className="window" x="140" y="214" width="32" height="32" rx="4" fill="#e7efe8" stroke="#16302a" strokeWidth="2.5"/>
              <rect className="window" x="228" y="214" width="32" height="32" rx="4" fill="#e7efe8" stroke="#16302a" strokeWidth="2.5"/>
              <path d="M156 214v32M140 230h32M244 214v32M228 230h32" stroke="#16302a" strokeWidth="1.6"/>
              <rect x="318" y="262" width="9" height="50" rx="4" fill="#5c4632"/>
              <circle className="tree-crown" cx="323" cy="240" r="33" fill="#7cb286"/>
              <circle className="tree-crown" cx="304" cy="256" r="20" fill="#7cb286"/>
              <circle className="tree-crown" cx="92" cy="298" r="20" fill="#7cb286"/>
              <circle className="tree-crown" cx="70" cy="304" r="14" fill="#7cb286"/>
              <g className="sparkle"><path d="M150 180 l3.5 8 8 3.5 -8 3.5 -3.5 8 -3.5 -8 -8 -3.5 8 -3.5 z" fill="#d9a441"/></g>
              <g className="sparkle s2"><path d="M262 200 l2.8 6.4 6.4 2.8 -6.4 2.8 -2.8 6.4 -2.8 -6.4 -6.4 -2.8 6.4 -2.8 z" fill="#d9a441"/></g>
              <g className="sparkle s3"><path d="M205 160 l2.4 5.4 5.4 2.4 -5.4 2.4 -2.4 5.4 -2.4 -5.4 -5.4 -2.4 5.4 -2.4 z" fill="#d9a441"/></g>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}
