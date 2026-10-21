import './AboutContent.css';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { aboutBlocks, aboutValues, type AboutBlock, type AboutValue } from './aboutBlocks';

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

      <AboutValues isDesktop={isDesktop} />
    </div>
  );
}

// always visible, also on mobile when the text above is collapsed
function AboutValues({ isDesktop }: { isDesktop: boolean }) {
  return (
    <div className="aboutValues">
      <h3 className="aboutValuesTitle">Werte</h3>
      {isDesktop ? (
        <ul className="aboutValuesList">
          {aboutValues.map((value) => (
            <li key={value.title} className="aboutValue">
              <AboutValueCard value={value} />
            </li>
          ))}
        </ul>
      ) : (
        <AboutValuesCarousel />
      )}
    </div>
  );
}

// mobile: one card at a time, swipeable, with dots showing and selecting the current card
function AboutValuesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <Carousel opts={{ align: 'center' }} setApi={setApi} className="aboutValuesCarousel">
      <div className="aboutValuesDots">
        {aboutValues.map((value, index) => (
          <button
            key={value.title}
            type="button"
            className="aboutValuesDot"
            aria-label={`${value.title} anzeigen`}
            aria-current={index === selected}
            onClick={() => api?.scrollTo(index)}
          >
            <value.icon className="aboutValuesDotIcon" aria-hidden="true" />
          </button>
        ))}
      </div>
      <CarouselContent className="aboutValuesTrack">
        {aboutValues.map((value) => (
          <CarouselItem key={value.title} className="aboutValuesSlide">
            <AboutValueCard value={value} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function AboutValueCard({ value }: { value: AboutValue }) {
  return (
    <Card className="aboutValueCard">
      <div className="aboutValueHeader">
        <value.icon className="aboutValueIcon" />
        <h4 className="aboutValueTitle">{value.title}</h4>
      </div>
      <p className="aboutValueText">{value.text}</p>
    </Card>
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
