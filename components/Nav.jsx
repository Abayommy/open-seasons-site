'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" onClick={close}>
          <span className="brand-dot" />
          The Open Seasons
        </Link>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16302a" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><Link href="/#services" onClick={close}>Services</Link></li>
          <li><Link href="/airbnb-turnovers" onClick={close}>Airbnb Turnovers</Link></li>
          <li><Link href="/#why" onClick={close}>Why Us</Link></li>
          <li><Link href="/#areas" onClick={close}>Service Area</Link></li>
          <li><Link className="btn" href="/#quote" onClick={close}>Get a Free Quote</Link></li>
        </ul>
      </div>
    </nav>
  );
}
