// Page sections in display order; shared by the navigation and the page layout.
export const sections = [
  { id: 'intro', label: 'Intro', navignore: true },
  { id: 'about', label: 'About', navignore: false },
  { id: 'offers', label: 'Offers', navignore: false },
  { id: 'impressions', label: 'Impressions', navignore: false },
  { id: 'contact', label: 'Contact', navignore: false },
] as const;

export type SectionId = (typeof sections)[number]['id'];
