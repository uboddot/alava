import { Heart, Leaf, Palette, Sprout, type LucideIcon } from 'lucide-react';
import { placeholderImage } from '../../placeholders';

export type AboutBlock = {
  text: string;
  image: { src: string; alt: string };
};

// The first block is the teaser shown on mobile before "Mehr lesen".
export const aboutBlocks: AboutBlock[] = [
  {
    text: 'Ich bin Ava, mag Pflanzen und Tiere, Liebe und Hummus zu verteilen, mathematische Pläne und philosophische Ausführungen. Ich bringe dir vegane, farbige und handgemachte Köstlichkeiten.',
    image: { src: placeholderImage, alt: 'Ava mit ihren Köstlichkeiten' },
  },
  {
    text: 'Entstanden durch ein Motto aus einem Kinderbuch von Astrid Lindgren "Lotta kann alles", habe ich vor zwei Jahren neben meinem Day Job als Data Analyst, dem Sport Job als Cycling Instructor, begonnen für andere Menschen zu backen und kochen.',
    image: { src: placeholderImage, alt: 'Backen und Kochen in der Küche' },
  },
  {
    text: 'Mein Essen ist vegan, gesund, manchmal deftig, manchmal leicht, farbig und hübsch. Lässt sich teilen und dazu verweilen.',
    image: { src: placeholderImage, alt: 'Farbiges veganes Essen zum Teilen' },
  },
];

export type AboutValue = {
  title: string;
  text: string;
  icon: LucideIcon;
};

// placeholder icons until the real ones are decided
export const aboutValues: AboutValue[] = [
  {
    title: 'Persönlich',
    text: 'Alles ist von mir von Hand gemacht und auf deinen Anlass und deine Wünsche abgestimmt.',
    icon: Heart,
  },
  {
    title: 'Pflanzlich',
    text: '100 % vegan, mal deftig, mal leicht, und so gut, dass niemandem etwas fehlt.',
    icon: Leaf,
  },
  {
    title: 'Nachhaltig',
    text: 'Saisonale Zutaten, wenn möglich aus der Region, und gut geplant, damit wenig übrig bleibt.',
    icon: Sprout,
  },
  {
    title: 'Kreativ',
    text: 'Farbig, hübsch und zum Teilen gemacht: Essen, das zuerst die Augen freut.',
    icon: Palette,
  },
];
