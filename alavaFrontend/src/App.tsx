import './App.css';
import AboutContent from './Section/About/AboutContent';
import Hero from './Hero/Hero';
import NavBar from './NavBar/NavBar';
import OffersContent from './Section/Offers/OffersContent';
import Section from './Section/Section';
import { instagram } from './socials';

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Section id="about" title="About">
          <AboutContent />
        </Section>
        <Section id="offers" title="Offers">
          <OffersContent />
        </Section>
        <Section id="impressions" title="Impressions">
          <p>Place holder impressions.</p>
          <a className="textLink" href={instagram.url} target="_blank" rel="noopener noreferrer">
            More on Instagram → {instagram.handle}
          </a>
        </Section>
        <Section id="contact" title="Contact">
          <p>Place holder contact information.</p>
          <p>
            Instagram:{' '}
            <a className="textLink" href={instagram.url} target="_blank" rel="noopener noreferrer">
              {instagram.handle}
            </a>
          </p>
        </Section>
      </main>
      <footer className="versionTag">{import.meta.env.VITE_APP_VERSION ?? 'devX.X'}</footer>
    </>
  )
}

export default App
