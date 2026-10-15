import './App.css';
import NavBar from './NavBar/NavBar';
import Offers from './Offers/Offers';
import Section from './Section/Section';

function App() {

  return (
    <>
      <NavBar />
      <main>
        <Section id="intro">
          <h1 className="introTitle">Alava</h1>
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
        </Section>
        <Section id="contact" title="Contact">
          <p>Place holder contact information.</p>
        </Section>
      </main>
    </>
  )
}

export default App
