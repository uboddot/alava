import './App.css';
import NavBar from './NavBar/NavBar';
import Offers from './Offers/Offers';
import Section from './Section/Section';
import { instagram } from './socials';

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Section id="intro">
          <h1 className="introTitle">Àlava</h1>
          <p className="introSubtitle">Vo mir für die mit Liebi & Pflanze</p>
        </Section>
        <Section id="about" title="About">
          <p>Alava is a modern platform designed to help users discover and explore amazing opportunities. Our mission is to connect people with experiences that matter and inspire growth.</p>
          <div className="imageCard" />
        </Section>
        <Section id="offers" title="Offers">
          <Offers />
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
