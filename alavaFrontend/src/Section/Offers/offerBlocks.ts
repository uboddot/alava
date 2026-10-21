import { placeholderImage } from '../../placeholders';

export type Offer = {
  title: string;
  text: string;
  image: { src: string; alt: string };
};

// placeholder offers until the real ones are decided
export const offers: Offer[] = [
  {
    title: 'Brunch',
    text: 'Platzhalter: Ein gemütlicher Brunch mit süssen und herzhaften Köstlichkeiten zum Teilen.',
    image: { src: placeholderImage, alt: 'Brunch-Buffet' },
  },
  {
    title: 'Apéro',
    text: 'Platzhalter: Fingerfood und kleine Häppchen für den Apéro, farbig und zum Verweilen.',
    image: { src: placeholderImage, alt: 'Apéro-Häppchen' },
  },
  {
    title: 'Geburtstag',
    text: 'Platzhalter: Ein Buffet für deinen Geburtstag, abgestimmt auf deine Gäste und Wünsche.',
    image: { src: placeholderImage, alt: 'Geburtstagsbuffet' },
  },
  {
    title: 'Konferenz',
    text: 'Platzhalter: Verpflegung für Seminare und Konferenzen, von der Kaffeepause bis zum Lunch.',
    image: { src: placeholderImage, alt: 'Konferenzverpflegung' },
  },
  {
    title: 'Party',
    text: 'Platzhalter: Deftiges und Leichtes für deine Party, damit niemand hungrig tanzen muss.',
    image: { src: placeholderImage, alt: 'Partybuffet' },
  },
];
