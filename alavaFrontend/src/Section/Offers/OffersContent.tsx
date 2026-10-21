import './OffersContent.css';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { offers, type Offer } from './offerBlocks';

export default OffersContent;

function OffersContent() {
  // matches the NavBar, which switches to its mobile layout at max-width: 768px
  const isDesktop = useMediaQuery('(min-width: 769px)');

  return (
    <ul className="offers">
      {offers.map((offer) => (
        <li key={offer.title}>
          {isDesktop ? <OfferCardDesktop offer={offer} /> : <OfferCardMobile offer={offer} />}
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
