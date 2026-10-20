export type AboutBlock = {
  text: string;
  image: { src: string; alt: string };
};

// placeholder image until real photos are available
const placeholderImage =
  'https://scontent-hel3-1.cdninstagram.com/v/t51.82787-15/588055258_17863123686536874_6058737331349816620_n.webp?_nc_cat=109&ig_cache_key=Mzc3ODU4NzMzNjE4NDE2OTQ1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=6N9XwdWgjisQ7kNvwGxZsKZ&_nc_oc=AdrD8p2x8UL7koqDJfjGXNHwlLE18F-uOJ8wqHuZgctGtqMP_dX5o7ov68yn3RaTgLE&_nc_zt=23&_nc_ht=scontent-hel3-1.cdninstagram.com&_nc_gid=_vPAZ1utZa93rfmqjJ8akg&_nc_ss=7b6a8&oh=00_AQPMtMfpuoZo33KJWaxekxef6_Yo5-SmERb3N4LUVWlKcA&oe=6ADCEA07';

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
