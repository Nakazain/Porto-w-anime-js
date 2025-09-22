import { useLayoutEffect } from "react";
import { animate, stagger, text } from "animejs";

type Effect = "fadeInLeft" | "fadeInUp" | "Bounce";
type Order = "first" | "center" | "last" | "random";

type AnimationOptions = {
  selectors: string;
  effect?: Effect;
  order?: Order;
  dur?: number;
  staggerDelay?: number;
  waitUntil?: number;
  onComplete?: () => void;
};

export function useTextAnimation({
  selectors,
  effect = "fadeInLeft",
  order = "first",
  dur = 600,
  staggerDelay = 100,
  waitUntil,
  onComplete,
}: AnimationOptions) {
  useLayoutEffect(() => {
    const elements: Element[] = [];

    // Remove opacity
    if (selectors.startsWith("#")) {
      const el = document.getElementById(selectors.slice(1));
      if (el) {
        el.classList.remove("opacity-0");
        elements.push(el);
      }
    } else if (selectors.startsWith(".")) {
      const els = document.getElementsByClassName(selectors.slice(1));
      for (let i = 0; i < els.length; i++) {
        els[i].classList.remove("opacity-0");
        elements.push(els[i]);
      }
    }

    elements.forEach((el) => {
      const { chars } = text.split(el as HTMLElement, { chars: true });

      // Fade in left effect
      if (effect === "fadeInLeft") {
        animate(chars, {
          x: [{ from: "2rem" }, { to: 0, duration: dur }],
          opacity: [{ from: 0 }, { to: 1, duration: dur }],
          delay: waitUntil
            ? stagger(staggerDelay, { start: waitUntil })
            : stagger(staggerDelay, { from: order }),
          duration: dur,
          onComplete: () => {
            onComplete?.();
          },
        });
      }

      // Fade in up effect
      if (effect === "fadeInUp") {
        animate(chars, {
          y: [{ from: "1rem" }, { to: 0, duration: dur }],
          opacity: [{ from: 0 }, { to: 1, duration: dur }],
          delay: waitUntil
            ? stagger(staggerDelay, { start: waitUntil, from: order })
            : stagger(staggerDelay, { from: order }),
          duration: dur,
          onComplete: () => {
            onComplete?.();
          },
        });
      }

      // Bounce effect
      if (effect === "Bounce") {
        animate(chars, {
          y: [
            { to: "-1.5rem", duration: dur / 2 },
            { to: 0, duration: dur / 2 },
          ],
          opacity: [{ from: 0 }, { to: 1 }],
          delay: waitUntil
            ? stagger(staggerDelay, { start: waitUntil, from: order })
            : stagger(staggerDelay, { from: order }),
          easing: "easeOutBounce",
          onComplete: () => {
            onComplete?.();
          },
        });
      }
    });
  }, [selectors, effect, staggerDelay, dur, waitUntil]);
}
