import './AboutContent.css';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default AboutContent;

function AboutContent() {
  const [open, setOpen] = useState(false);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    // when collapsing, bring the section back into view if its top was scrolled past
    const section = document.getElementById('about');
    if (!nextOpen && section && section.getBoundingClientRect().top < 0) {
      section.scrollIntoView();
    }
  }

  return (
    <>
      <p>
        Ich bin Ava, mag Pflanzen und Tiere, Liebe und Hummus zu verteilen, mathematische Pläne und philosophische Ausführungen. Ich bringe dir vegane, farbige und handgemachte Köstlichkeiten.
      </p>
      <div className="imageCard" />

      <Collapsible className="aboutMore" open={open} onOpenChange={handleOpenChange}>
        <CollapsibleContent className="aboutMoreContent">
          <p>
            Entstanden durch ein Motto aus einem Kinderbuch von Astrid Lindgren "Lotta kann alles", habe ich vor zwei Jahren neben meinem Day Job als Data Analyst, dem Sport Job als Cycling Instructor, begonnen für andere Menschen zu backen und kochen.
          </p>

          <p>
            Mein Essen ist vegan, gesund, manchmal deftig, manchmal leicht, farbig und hübsch. Lässt sich teilen und dazu verweilen.
          </p>
          
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <Button variant="link" className="aboutMoreTrigger">
            {open ? 'Weniger anzeigen' : 'Mehr lesen'}
            <ChevronDown className="aboutMoreChevron" />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </>
  );
}
