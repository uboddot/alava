import './OffersContent.css';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { offers, type Offer } from './offerBlocks';

export default OffersContent;

function OffersContent() {
  // matches the NavBar, which switches to its mobile layout at max-width: 768px
  const isDesktop = useMediaQuery('(min-width: 769px)');

  if (!isDesktop) return <OffersMobile />;

  return (
    <ul className="offers">
      {offers.map((offer) => (
        <li key={offer.title}>
          <OfferCardDesktop offer={offer} />
        </li>
      ))}
    </ul>
  );
}

// mobile: only the first few offers are shown, the rest slide in behind "Mehr anzeigen"
const MOBILE_VISIBLE_OFFERS = 2;

function OffersMobile() {
  const [open, setOpen] = useState(false);
  const visible = offers.slice(0, MOBILE_VISIBLE_OFFERS);
  const more = offers.slice(MOBILE_VISIBLE_OFFERS);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    // when collapsing, bring the section back into view if its top was scrolled past
    const section = document.getElementById('offers');
    if (!nextOpen && section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView();
    }
  }

  return (
    <div className="offersMobile">
      <OfferListMobile offers={visible} />
      {more.length > 0 && (
        <Collapsible className="offersMore" open={open} onOpenChange={handleOpenChange}>
          <CollapsibleContent className="offersMoreContent">
            <OfferListMobile offers={more} />
          </CollapsibleContent>
          <CollapsibleTrigger asChild>
            <Button variant="link" className="offersMoreTrigger">
              {open ? 'Weniger anzeigen' : 'Mehr anzeigen'}
              <ChevronDown className="offerChevron" />
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      )}
    </div>
  );
}

function OfferListMobile({ offers }: { offers: Offer[] }) {
  return (
    <ul className="offers">
      {offers.map((offer) => (
        <li key={offer.title}>
          <OfferCardMobile offer={offer} />
        </li>
      ))}
    </ul>
  );
}

// desktop: image on the left, title and text on the right, always visible
function OfferCardDesktop({ offer }: { offer: Offer }) {
  return (
    <Card className="offerCard">
      <img className="offerImage" src={offer.image.src} alt={offer.image.alt} loading="lazy" />
      <div className="offerBody">
        <h3 className="offerTitle">{offer.title}</h3>
        <p className="offerText">{offer.text}</p>
      </div>
    </Card>
  );
}

// mobile: title above image; tapping the card slides the text in
function OfferCardMobile({ offer }: { offer: Offer }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible asChild open={open} onOpenChange={setOpen}>
      <Card className="offerCard">
        {/* button inside the heading (accordion pattern), since a heading may not sit inside a button */}
        <h3>
          <CollapsibleTrigger className="offerHeader">
            <img className="offerImage" src={offer.image.src} alt={offer.image.alt} loading="lazy" />
            <span className="offerOverlay">
              <span className="offerTitle">{offer.title}</span>
              <ChevronDown className="offerChevron" />
            </span>
          </CollapsibleTrigger>
        </h3>
        <CollapsibleContent className="offerTextWrap">
          <p className="offerText">{offer.text}</p>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
