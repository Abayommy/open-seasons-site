import Link from 'next/link';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import Reviews from '@/components/Reviews';
import { Reveal, CountUp } from '@/components/Anim';

const CHECK = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#d9a441" strokeWidth="2.4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <Hero />

      {/* ---------- Services ---------- */}
      <section className="services" id="services">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Cleaning that fits how you live</h2>
            <p>
              Every home is different, so every quote is custom. Pricing below reflects
              typical starting points — final quotes depend on size and condition.
            </p>
          </Reveal>
          <div className="svc-grid">
            <Reveal className="svc-card">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>
              </div>
              <h3>Standard Clean</h3>
              <div className="price">From $140 <span>/ visit</span></div>
              <p>Recurring weekly or bi-weekly maintenance that keeps every room fresh — floors, surfaces, kitchens, baths.</p>
              <Link href="/#quote">Get a quote</Link>
            </Reveal>
            <Reveal className="svc-card">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2"><path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M5.6 18.4l2.1-2.1M12 21v-3M18.4 18.4l-2.1-2.1M21 12h-3M18.4 5.6l-2.1 2.1"/><circle cx="12" cy="12" r="3.2"/></svg>
              </div>
              <h3>Deep Clean</h3>
              <div className="price">From $280 <span>/ visit</span></div>
              <p>Top-to-bottom detail work for first-time clients or seasonal resets. Baseboards, blinds, fixtures — every corner.</p>
              <Link href="/#quote">Get a quote</Link>
            </Reveal>
            <Reveal className="svc-card">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2"><path d="M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
              </div>
              <h3>Move-In / Move-Out</h3>
              <div className="price">From $350 <span>/ home</span></div>
              <p>Empty-home detail cleaning that protects deposits and impresses buyers. Final price based on size and condition.</p>
              <Link href="/#quote">Get a quote</Link>
            </Reveal>
            <Reveal className="svc-card">
              <div className="svc-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e6b4f" strokeWidth="2"><path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4L12 2z"/></svg>
              </div>
              <h3>One-Time Clean</h3>
              <div className="price">From $130 <span>/ visit</span></div>
              <p>Hosting guests or catching up after a busy season? One visit, no contract, custom-quoted to your home.</p>
              <Link href="/#quote">Get a quote</Link>
            </Reveal>
          </div>
          <Reveal as="p" className="svc-anchor">
            Most 3-bedroom homes in our area run <strong>$200–280</strong> per standard visit.
            Every quote is custom — no surprises on cleaning day.
          </Reveal>
        </div>
      </section>

      {/* ---------- STR band ---------- */}
      <section className="str" id="airbnb">
        <div className="wrap str-grid">
          <Reveal>
            <span className="eyebrow">For Airbnb &amp; VRBO Hosts</span>
            <h2>Turnovers your guests rate five stars</h2>
            <p>
              We clean short-term rentals to listing standard — not house standard. Every
              turnover is photo-documented, every linen change verified, every restock
              confirmed before we lock up.
            </p>
            <ul>
              <li>{CHECK}Photo documentation on every turnover, sent before checkout</li>
              <li>{CHECK}Fresh linens, restocking, and staging to your listing photos</li>
              <li>{CHECK}Same-day turnarounds with backup coverage</li>
              <li>{CHECK}Available on Turno — or work with us directly</li>
            </ul>
            <Link className="btn light" href="/airbnb-turnovers">See Turnover Details &amp; Pricing</Link>
          </Reveal>
          <Reveal className="str-panel">
            <h3>Flat per-turnover pricing</h3>
            <div className="str-row"><span>Studio / 1 Bedroom</span><b>$90–110</b></div>
            <div className="str-row"><span>2 Bedroom</span><b>$120–145</b></div>
            <div className="str-row"><span>3 Bedroom</span><b>$150–180</b></div>
            <div className="str-row"><span>4+ Bedroom</span><b>$190–250</b></div>
            <div className="str-row"><span>Laundry add-on</span><b>+$20–40</b></div>
            <div className="str-row"><span>Same-day rush</span><b>+20–25%</b></div>
            <p className="str-note">Flat rates, never hourly — so your cleaning cost per booking is predictable.</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why ---------- */}
      <section id="why">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Why The Open Seasons</span>
            <h2>We&apos;re not a franchise — and that&apos;s the point</h2>
            <p>
              We&apos;re a local, systems-driven cleaning company. The owners check the work,
              answer the phone, and stand behind every visit.
            </p>
          </Reveal>
          <div className="why-grid">
            <Reveal className="why-item">
              <div className="why-num">01</div>
              <h3>A checklist, not a vibe</h3>
              <p>Every clean follows our room-by-room quality checklist. Same standard, every visit — verified by an owner walkthrough.</p>
            </Reveal>
            <Reveal className="why-item">
              <div className="why-num">02</div>
              <h3>Fully covered</h3>
              <p>Georgia LLC, licensed and insured with $1M general liability coverage from an A++ rated carrier. Your home is protected.</p>
            </Reveal>
            <Reveal className="why-item">
              <div className="why-num">03</div>
              <h3>No contracts</h3>
              <p>We earn your business one clean at a time. Pause, adjust, or cancel anytime — satisfaction guaranteed on every visit.</p>
            </Reveal>
            <Reveal className="why-item">
              <div className="why-num">04</div>
              <h3>Fast, human answers</h3>
              <p>Quote requests answered within hours by an owner — not a call center. Text, call, or email, whatever works for you.</p>
            </Reveal>
          </div>
          <Reveal className="stats">
            <div className="stat"><CountUp target={100} /><span>% satisfaction guarantee</span></div>
            <div className="stat"><CountUp target={30} /><span>mile service radius</span></div>
            <div className="stat"><CountUp target={2} /><span>hour average response time</span></div>
          </Reveal>
        </div>
      </section>

      <Reviews />

      {/* ---------- Service area ---------- */}
      <section className="area" id="areas">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Service Area</span>
            <h2>Proudly serving the south Atlanta suburbs</h2>
            <p>
              Home base in Peachtree City with a 30-mile service radius across Fayette,
              Coweta, and the airport corridor.
            </p>
          </Reveal>
          <Reveal className="chips">
            {['Peachtree City','Fayetteville','Tyrone','Senoia','Sharpsburg','Newnan','Brooks','College Park','East Point','Hapeville','Union City'].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section id="quote">
        <div className="wrap">
          <Reveal className="quote-card">
            <div>
              <span className="eyebrow">Free Quote</span>
              <h2>Ready for a home that feels brand new?</h2>
              <p>Tell us about your space and we&apos;ll get back to you within hours with a no-obligation estimate.</p>
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
