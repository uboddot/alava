import { useEffect, type RefObject } from 'react';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

// Positions the indicator under the nav link of the section at the top of the viewport,
// sliding continuously between two links while scrolling from one section to the next.
export function useScrollIndicator(
  sectionIds: readonly string[],
  rootRef: RefObject<HTMLElement | null>,
  indicatorRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = rootRef.current;
      const indicator = indicatorRef.current;
      if (!root || !indicator || sectionIds.length === 0) return;

      // Anchor links scroll a section's top to the viewport top, so that is the reference line.
      // Tops are capped at the max scroll so sections too short to reach the top still count as reached.
      const scroll = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const tops = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return Math.min(el ? el.getBoundingClientRect().top + scroll : 0, maxScroll);
      });

      // Continuous section index: 1.5 means halfway between the second and third section.
      // Negative while still above the first section (the intro).
      let progress = sectionIds.length - 1;
      if (scroll < tops[0]) {
        progress = tops[0] > 0 ? (scroll - tops[0]) / tops[0] : 0;
      } else {
        for (let i = 0; i < tops.length - 1; i++) {
          if (scroll < tops[i + 1]) {
            progress = i + (scroll - tops[i]) / (tops[i + 1] - tops[i]);
            break;
          }
        }
      }

      const links = root.querySelectorAll<HTMLElement>('[data-slot="navigation-menu-link"]');
      if (links.length === 0) return;
      const rootLeft = root.getBoundingClientRect().left;
      const at = clamp(progress, 0, links.length - 1);
      const from = links[Math.floor(at)].getBoundingClientRect();
      const to = links[Math.ceil(at)].getBoundingClientRect();
      const t = at - Math.floor(at);

      indicator.style.transform = `translateX(${from.left - rootLeft + (to.left - from.left) * t}px)`;
      indicator.style.width = `${from.width + (to.width - from.width) * t}px`;
      // fade in over the second half of the intro
      indicator.style.opacity = String(clamp(1 + 2 * progress, 0, 1));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, [sectionIds, rootRef, indicatorRef]);
}
