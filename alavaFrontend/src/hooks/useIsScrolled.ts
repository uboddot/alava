import { useSyncExternalStore } from 'react';

function subscribe(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

// Returns whether the page is scrolled down more than `threshold` pixels and re-renders when that changes.
export function useIsScrolled(threshold = 10): boolean {
  return useSyncExternalStore(subscribe, () => window.scrollY > threshold);
}
