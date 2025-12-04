import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Introduction } from './components/Introduction';
import { Gallery } from './components/Gallery';
import { RoyalPatronage } from './components/RoyalPatronage';
import { Diplomats } from './components/Diplomats';
import { ArtistsWriters } from './components/ArtistsWriters';
import { MilitarySociety } from './components/MilitarySociety';
import { ReligiousMasonic } from './components/ReligiousMasonic';
import { SocialEvents } from './components/SocialEvents';
import { Decline } from './components/Decline';
import { Appendix } from './components/Appendix';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'introduction', 'gallery', 'royal', 'diplomats', 'artists', 'military', 'religious', 'social', 'decline', 'appendix'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Introduction />
      <Gallery />
      <RoyalPatronage />
      <Diplomats />
      <ArtistsWriters />
      <MilitarySociety />
      <ReligiousMasonic />
      <SocialEvents />
      <Decline />
      <Appendix />
      <Footer />
    </div>
  );
}