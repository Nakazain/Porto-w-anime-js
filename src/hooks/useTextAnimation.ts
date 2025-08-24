import { useLayoutEffect } from "react";
import { animate, stagger, text } from "animejs";

type Effect = "fadeInLeft" | "fadeInUp" | "Bounce";

export function useTextAnimation(
  selectors: string,
  effect: Effect = "fadeInLeft",
  dur: number = 600,
  staggerDelay: number = 100,
  waitUntil?: number
) {
  useLayoutEffect(() => {
    let elements: Element[] = [];

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

      if (effect === "fadeInLeft") {
        animate(chars, {
          x: [{ from: "2rem" }, { to: 0, duration: dur }],
          opacity: [{ from: 0 }, { to: 1, duration: dur }],
          delay: waitUntil
            ? 0
            : stagger(staggerDelay, { start: waitUntil, from: "random" }),
          duration: dur,
        });
      }

      if (effect === "fadeInUp") {
        animate(chars, {
          y: [{ from: "1rem" }, { to: 0, duration: dur }],
          opacity: [{ from: 0 }, { to: 1, duration: dur }],
          delay: waitUntil
            ? 0
            : stagger(staggerDelay, { start: waitUntil, from: "random" }),
          duration: dur,
        });
      }

      if (effect === "Bounce") {
        animate(chars, {
          y: [
            { from: 0 },
            { to: "-1rem", duration: dur / 2 },
            { to: 0, duration: dur / 2 },
          ],
          opacity: [{ from: 0 }, { to: 1 }],
          delay: waitUntil
            ? 0
            : stagger(staggerDelay, { start: waitUntil, from: "random" }),
          easing: "easeOutBounce",
        });
      }
    });
  }, [selectors, effect, staggerDelay, dur, waitUntil]);
}
