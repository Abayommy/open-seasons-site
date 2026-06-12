import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { Reveal } from '@/components/Anim';

export const metadata = {
  title: 'Airbnb & STR Turnover Cleaning — Peachtree City & South Atlanta',
  description:
    'Reliable Airbnb and short-term rental turnover cleaning near Peachtree City, Fayetteville, and the Atlanta airport corridor. Photo-documented, flat-rate, same-day capable. Available on Turno or direct.',
};

const CHECK = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d9a441" strokeWidth="2.4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function AirbnbTurnovers() {
  return (
    <main>
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Airbnb · VRBO · Short-Term Rentals</span>
          <h1>Turnover cleaning that protects your rating</h1>
          <p>
            Your reviews live and die on cleanliness. We turn your property to listing
            standard between every guest — photo-documented, flat-rate, and built for
            same-day checkout-to-check-in windows.
          </p>
          <Link className="btn light" href="#str-quote">Get Turnover Pricing</Link>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">How Every Turnover Works</span>
            <h2>A repeatable system, not a hopeful clean</h2>
          </Reveal>
          <div className="process-grid">
            <Reveal className="process-step">
              <div className="why-num">01</div>
              <h3>Strip &amp; assess</h3>
              <p>Linens stripped, property walked, and any guest damage or missing items reported to you immediately with photos.</p>
            </Reveal>
            <Reveal className="process-step">
              <div className="why-num">02</div>
              <h3>Clean to checklist</h3>
              <p>Room-by-room STR checklist covering kitchens, baths, floors, touchpoints, and the details guests mention in reviews.</p>
            </Reveal>
            <Reveal className="process-step">
              <div className="why-num">03</div>
              <h3>Stage &amp; restock</h3>
              <p>Beds made hotel-style, towels arranged, consumables restocked, and every room staged to match your listing photos.</p>
            </Reveal>
            <Reveal className="process-step">
              <div className="why-num">04</div>
              <h3>Photo confirmation</h3>
              <p>You get a photo set of the finished property before the next check-in — proof of guest-ready, every time.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="str">
        <div className="wrap str-grid">
          <Reveal>
            <span className="eyebrow">Pricing</span>
            <h2>Flat rates. Predictable costs per booking.</h2>
            <p>
              Hourly cleaning makes your costs unpredictable. Our flat per-turnover pricing
              means you know your cleaning cost on every booking before the guest even
              checks in.
            </p>
            <ul>
              <li>{CHECK}No contracts or minimum volume — we earn every turnover</li>
              <li>{CHECK}Same-day rush available when bookings run back-to-back</li>
              <li>{CHECK}Laundry handled in-unit or off-site, your choice</li>
              <li>{CHECK}Find us on Turno, or book direct and skip the platform fees</li>
            </ul>
            <Link className="btn light" href="#str-quote">Request a Walkthrough</Link>
          </Reveal>
          <Reveal className="str-panel">
            <h3>Per-turnover pricing</h3>
            <div className="str-row"><span>Studio / 1 Bedroom</span><b>$90–110</b></div>
            <div className="str-row"><span>2 Bedroom</span><b>$120–145</b></div>
            <div className="str-row"><span>3 Bedroom</span><b>$150–180</b></div>
            <div className="str-row"><span>4+ Bedroom</span><b>$190–250</b></div>
            <div className="str-row"><span>Laundry add-on</span><b>+$20–40</b></div>
            <div className="str-row"><span>Deep clean / reset</span><b>+50–100%</b></div>
            <div className="str-row"><span>Same-day rush</span><b>+20–25%</b></div>
            <p className="str-note">
              Exact rate confirmed after a brief walkthrough or video tour of your property.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>What hosts ask us</h2>
          </Reveal>
          <Reveal className="faq">
            <details>
              <summary>Can you handle same-day turnovers?</summary>
              <p>
                Yes — same-day checkout-to-check-in windows are our specialty, with a rush
                premium of 20–25%. Tell us your booking calendar and we&apos;ll plan around it.
              </p>
            </details>
            <details>
              <summary>Do you work through Turno?</summary>
              <p>
                We&apos;re an active Turno cleaning partner, so you can book us there if that&apos;s
                your workflow. Booking direct works too and avoids platform fees on both sides.
              </p>
            </details>
            <details>
              <summary>What about linens and restocking?</summary>
              <p>
                We strip, launder (in-unit or off-site), and remake beds hotel-style, and
                restock consumables like paper goods, soap, and coffee from your supply closet.
                Anything running low gets flagged to you with the photo report.
              </p>
            </details>
            <details>
              <summary>Are you insured for short-term rentals?</summary>
              <p>
                Yes — Open Seasons LLC carries $1M general liability coverage from an A++
                rated carrier, and we&apos;re licensed in Georgia.
              </p>
            </details>
            <details>
              <summary>What areas do you cover?</summary>
              <p>
                Peachtree City and a 30-mile radius: Fayetteville, Tyrone, Senoia, Newnan,
                and the airport corridor — College Park, East Point, Hapeville, and Union
                City, where STR demand runs strongest.
              </p>
            </details>
          </Reveal>
        </div>
      </section>

      <section id="str-quote">
        <div className="wrap">
          <Reveal className="quote-card">
            <div>
              <span className="eyebrow">Host Inquiry</span>
              <h2>Tell us about your property</h2>
              <p>
                Send the basics and we&apos;ll come back within hours with your flat turnover
                rate and availability.
              </p>
              <div className="phone-cta">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>
                Prefer to talk? <a href="tel:4706832228">(470) 683-2228</a>
              </div>
            </div>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
