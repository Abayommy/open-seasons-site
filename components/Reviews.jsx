import { Reveal } from '@/components/Anim';

const STARS = (
  <span className="rv-stars" aria-label="5 out of 5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#d9a441">
        <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
      </svg>
    ))}
  </span>
);

export default function Reviews() {
  return (
    <section className="reviews-sec" id="reviews">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Reviews</span>
          <h2>What people say about our work</h2>
          <p>
            Rated 5.0 on Google and 5.0 on Turno — and we intend to keep it that way,
            one clean at a time.
          </p>
        </Reveal>
        <div className="rv-grid">
          <Reveal className="rv-card">
            {STARS}
            <p className="rv-text">
              &ldquo;The quality and professional nature of the service was top notch!
              I highly recommend their services for anyone trying to get real value
              for money!&rdquo;
            </p>
            <div className="rv-meta">
              <span className="rv-name">Akinsola A.</span>
              <span className="rv-src">
                <svg width="14" height="14" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.96 10.96 0 0 0 1 12c0 1.77.43 3.45 1.18 4.94l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                Google review
              </span>
            </div>
          </Reveal>
          <Reveal className="rv-card">
            {STARS}
            <p className="rv-text">
              &ldquo;Dependable, punctual, and responsive to any special requests.
              I was always impressed by the thoroughness, efficiency, and dedication
              to delivering excellent results. I would confidently recommend Abayomi
              to anyone seeking a reliable, trustworthy, and hardworking cleaning
              professional.&rdquo;
            </p>
            <div className="rv-meta">
              <span className="rv-name">Benedict O.</span>
              <span className="rv-src">
                <span className="rv-dot" />
                Turno review · 5.0
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
