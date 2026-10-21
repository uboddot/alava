import './Hero.css';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsScrolled } from '@/hooks/useIsScrolled';
import Section from '../Section/Section';
import { sections } from '../sections';

export default Hero;

// the section right after the intro
const nextSectionId = sections[1].id;

function Hero() {
  const scrolled = useIsScrolled();

  return (
    <Section id="intro" className="hero">
      <h1 className="introTitle">Àlava</h1>
      <p className="introSubtitle">Catering vo mir für die mit Liebi & Pflanze</p>
      <Button asChild size="lg" className="heroContact">
        <a href="#contact">Contact</a>
      </Button>
      {/* scroll hint, fades out once the user scrolls; hidden from focus and screen readers while invisible */}
      <a
        href={`#${nextSectionId}`}
        className="heroScrollCue"
        data-hidden={scrolled}
        aria-label="Nach unten scrollen"
        aria-hidden={scrolled}
        tabIndex={scrolled ? -1 : undefined}
      >
        <ChevronDown />
      </a>
    </Section>
  );
}
