import './Hero.css';
import { Button } from '@/components/ui/button';
import Section from '../Section/Section';

export default Hero;

function Hero() {
  return (
    <Section id="intro" className="hero">
      <h1 className="introTitle">Àlava</h1>
      <p className="introSubtitle">Catering vo mir für die mit Liebi & Pflanze</p>
      <Button asChild size="lg" className="heroContact">
        <a href="#contact">Contact</a>
      </Button>
    </Section>
  );
}
