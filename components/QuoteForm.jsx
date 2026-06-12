'use client';
import { useState } from 'react';

// 1. Create a free form at https://formspree.io (sign up with your business email)
// 2. Replace YOUR_FORM_ID below with the ID Formspree gives you (e.g. xqkrpyzw)
//    — or set NEXT_PUBLIC_FORMSPREE_ID in Vercel project settings.
const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID';

export default function QuoteForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('ok');
        e.target.reset();
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your name" required />
      <input type="tel" name="phone" placeholder="Phone number" required />
      <input type="email" name="email" placeholder="Email (optional)" />
      <select name="service" required defaultValue="">
        <option value="" disabled>What do you need?</option>
        <option>Standard clean</option>
        <option>Deep clean</option>
        <option>Move-in / move-out</option>
        <option>Airbnb / STR turnover</option>
        <option>One-time clean</option>
      </select>
      <input type="text" name="details" placeholder="City + approximate square footage" />
      <button className="btn" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request My Free Quote'}
      </button>
      {status === 'ok' && (
        <span className="form-status ok">Got it — we&apos;ll get back to you within hours.</span>
      )}
      {status === 'err' && (
        <span className="form-status err">
          Something went wrong. Please call or text (470) 683-2228 instead.
        </span>
      )}
    </form>
  );
}
