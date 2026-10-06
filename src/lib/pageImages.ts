export const pageImages = [
  { src: '/images/library/jetting-nozzle-pipe-interior.webp', alt: 'Hydro jetting nozzle inside a pipe' },
  { src: '/images/library/nozzle-blue-light-pipe.webp', alt: 'Jetting nozzle lit in blue inside a pipe' },
  { src: '/images/library/nozzle-roots-pipe.webp', alt: 'Jetting nozzle working near roots inside a pipe' },
  { src: '/images/library/nozzle-spray-pipe-bore.webp', alt: 'Water spraying from a jetting nozzle inside a pipe bore' },
  { src: '/images/library/nozzle-test-tank.webp', alt: 'Jetting nozzle spraying in a test tank' },
  { src: '/images/library/cleanout-riser-lawn.webp', alt: 'Sewer cleanout riser in a lawn' },
];
export function pageImage(key: string) {
  let hash = 0;
  for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return pageImages[hash % pageImages.length];
}
