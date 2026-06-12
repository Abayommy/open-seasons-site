import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.theopenseasons.net'),
  title: {
    default: 'The Open Seasons — Home & Airbnb Cleaning in Peachtree City, GA',
    template: '%s | The Open Seasons',
  },
  description:
    'Professional residential and Airbnb turnover cleaning serving Peachtree City, Fayetteville, Tyrone, Newnan, and the south Atlanta suburbs. Licensed, insured, satisfaction guaranteed. Get a free quote today.',
  keywords: [
    'house cleaning Peachtree City',
    'cleaning service Fayetteville GA',
    'Airbnb cleaning Peachtree City',
    'STR turnover cleaning Georgia',
    'home cleaning Tyrone GA',
    'residential cleaning Newnan',
    'maid service south Atlanta',
    'cleaning company Fayette County',
  ],
  openGraph: {
    siteName: 'The Open Seasons',
    title: 'The Open Seasons — Home & Airbnb Cleaning in Peachtree City, GA',
    description:
      'Local, systems-driven residential and Airbnb cleaning. Licensed, insured, satisfaction guaranteed.',
    url: 'https://www.theopenseasons.net',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
