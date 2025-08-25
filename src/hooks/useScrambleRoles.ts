import { useLayoutEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import { wrapWords } from "./useWrapWords";

type UseScrambleRolesOpts = {
  selector?: string;
  dotSelector?: string;
  hold?: number;
  inDur?: number;
  outDur?: number;
};

export function useScrambleRoles(
  roles: string[],
  opts: UseScrambleRolesOpts = {}
) {
  const {
    selector = ".role-text",
    dotSelector = ".role-dot",
    hold = 1200,
    inDur = 300,
    outDur = 200,
  } = opts;

  const mounted = useRef(true);
  const started = useRef(false);

  // helper promisify animate -> resolve onComplete
  function animatePromise(targets: any, params: any) {
    return new Promise<void>((resolve) => {
      animate(targets, {
        ...params,
        onComplete() {
          if (typeof params.onComplete === "function") params.onComplete();
          resolve();
        },
      });
    });
  }

  useLayoutEffect(() => {
    // Prevent multiple inits
    if (started.current) return;
    started.current = true;
    mounted.current = true;

    let idx = 0;

    async function loop() {
      const el = (utils.$(selector)[0] || null) as HTMLElement | null;
      if (!el) return;

      while (mounted.current) {
        el.textContent = roles[idx];
        wrapWords(el, "word", "char");
        const chars = Array.from(el.querySelectorAll<HTMLElement>(".char"));

        // If no chars, skip to next
        if (!chars.length) {
          await new Promise((r) => setTimeout(r, hold));
          idx = (idx + 1) % roles.length;
          continue;
        }

        // Animate dot if exists
        const dot: string | null = dotSelector;
        if (dot) {
          animate(dot, {
            x: [
              { to: 0, duration: inDur, delay: inDur }, 
              { to: -el.offsetWidth, duration: outDur, delay: hold },
            ],
            scaleX: [8, 1],
            transformOrigin: ["0% 0%", "0% 0%"],
            easing: "out(3)",
            composition: "blend",
          });
        }

        // Animate chars in
        await animatePromise(chars, {
          opacity: [0, 1],
          scaleX: [0, 1],
          x: [10, 0],
          duration: inDur,
          delay: stagger(25, { from: "first", start: 100 }),
          easing: "out(3)",
        });

        // Hold
        await new Promise((r) => setTimeout(r, hold));

        // Animate chars out
        await animatePromise(chars, {
          opacity: [1, 0],
          scaleX: [1, 0],
          duration: outDur,
          delay: stagger(20, { from: "last" }),
          easing: "in(3)",
        });

        idx = (idx + 1) % roles.length;
      }
    }

    loop();

    return () => {
      mounted.current = false;
    };
  }, [roles, selector, dotSelector, hold, inDur, outDur]);
}
