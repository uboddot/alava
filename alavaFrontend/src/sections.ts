// Page sections in display order; shared by the navigation and the page layout.
export const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'offers', label: 'Offers' },
  { id: 'impressions', label: 'Impressions' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof sections)[number]['id'];
