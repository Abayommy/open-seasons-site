import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <h4>The Open Seasons</h4>
            <p style={{ maxWidth: 260 }}>
              Local, systems-driven residential and Airbnb cleaning. Peachtree City, Georgia.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/#services">Standard Clean</Link>
            <Link href="/#services">Deep Clean</Link>
            <Link href="/#services">Move-In / Move-Out</Link>
            <Link href="/airbnb-turnovers">Airbnb Turnovers</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/#why">Why Us</Link>
            <Link href="/#areas">Service Area</Link>
            <Link href="/#quote">Get a Quote</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:4706832228">(470) 683-2228</a>
            <a href="mailto:abayomi.ajayi@theopenseasons.net">abayomi.ajayi@theopenseasons.net</a>
            <span style={{ display: 'block', marginBottom: 9 }}>Peachtree City, GA</span>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Open Seasons LLC. All rights reserved.</span>
          <span>Licensed &amp; Insured in the State of Georgia · $1M General Liability</span>
        </div>
      </div>
    </footer>
  );
}
