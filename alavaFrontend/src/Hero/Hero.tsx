import './Hero.css';
import Section from '../Section/Section';

export default Hero;

function Hero() {
  return (
    <Section id="intro">
      <h1 className="introTitle">Àlava</h1>
      <p className="introSubtitle">Catering vo mir für die mit Liebi & Pflanze</p>
    </Section>
  );
}
