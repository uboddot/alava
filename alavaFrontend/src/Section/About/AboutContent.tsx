import './AboutContent.css';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { aboutBlocks, type AboutBlock } from './aboutBlocks';

export default AboutContent;

function AboutContent() {
  const [open, setOpen] = useState(false);
  // matches the NavBar, which switches to its mobile layout at max-width: 768px
  const isDesktop = useMediaQuery('(min-width: 769px)');
  const [teaser, ...moreBlocks] = aboutBlocks;

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    // when collapsing, bring the section back into view if its top was scrolled past
    const section = document.getElementById('about');
    if (!nextOpen && section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView();
    }
  }

  return (
    <div className="about">
      <AboutRow block={teaser} reversed={false} />

      {/* on desktop there is room for everything, so the text is always expanded */}
      <Collapsible className="aboutMore" open={isDesktop || open} onOpenChange={handleOpenChange}>
        <CollapsibleContent className="aboutMoreContent">
          {moreBlocks.map((block, index) => (
            // index + 1 because the teaser is row 0, so the zig-zag continues across the collapsible
            <AboutRow key={block.text} block={block} reversed={(index + 1) % 2 === 1} />
          ))}
        </CollapsibleContent>
        {!isDesktop && (
          <CollapsibleTrigger asChild>
            <Button variant="link" className="aboutMoreTrigger">
              {open ? 'Weniger anzeigen' : 'Mehr lesen'}
              <ChevronDown className="aboutMoreChevron" />
            </Button>
          </CollapsibleTrigger>
        )}
      </Collapsible>
    </div>
  );
}

function AboutRow({ block, reversed }: { block: AboutBlock; reversed: boolean }) {
  return (
    <div className={reversed ? 'aboutRow aboutRowReversed' : 'aboutRow'}>
      <p>{block.text}</p>
      <img className="aboutRowImage" src={block.image.src} alt={block.image.alt} loading="lazy" />
    </div>
  );
}
