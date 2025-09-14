import { useLayoutEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import { wrapWords } from "../hooks/useWrapWords";

export default function Scramble() {
  const selector = ".role-text";
  const dotSelector = ".role-dot";
  const hold = 1200;
  const inDur = 300;
  const outDur = 200;

  const roles = [
    "Gamer",
    "Web Developer",
    "Graphics Designer",
    "Math Enthusiast",
    "Anime Lover",
  ];

  const mounted = useRef(true);
  const started = useRef(false);

  // helper: bikin animate jadi Promise
  function animatePromise(targets: any, params: any) {
    return new Promise<void>((resolve) => {
      animate(targets, {
        ...params,
        complete() {
          if (typeof params.complete === "function") params.complete();
          resolve();
        },
      });
    });
  }

  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    mounted.current = true;

    let idx = 0;
    let loopCount = 0;

    async function loop() {
      const el = (utils.$(selector)[0] || null) as HTMLElement | null;
      if (!el) return;

      while (mounted.current) {
        // tulis teks & wrap
        el.textContent = roles[idx];
        wrapWords(el, "word", "char");
        const chars = Array.from(el.querySelectorAll<HTMLElement>(".char"));

        if (!chars.length) {
          await new Promise((r) => setTimeout(r, hold));
          idx = (idx + 1) % roles.length;
          continue;
        }

        // dot masuk
        if (dotSelector) {
          animate(dotSelector, {
            x: [-el.offsetWidth, 0],
            scaleX: [10, 1],
            transformOrigin: ["0% 0%", "0% 0%"],
            easing: "out(3)",
            duration: chars.length * 25 + 75,
          });
        }

        // text in
        await animatePromise(chars, {
          opacity: [0, 1],
          scaleX: [0, 1],
          x: [10, 0],
          duration: inDur,
          delay: stagger(25, { from: "first", ease: "easeInQuad", start: 100 }),
        });

        // hold
        await new Promise((r) => setTimeout(r, hold));

        // dot keluar
        if (dotSelector) {
          animate(dotSelector, {
            x: -el.offsetWidth,
            scaleX: [4, 1],
            transformOrigin: ["100% 0%", "100% 0%"],
            easing: "out(3)",
            duration: chars.length * 25 + 100,
          });
        }

        // text out
        await animatePromise(chars, {
          opacity: [1, 0],
          scaleX: [1, 0],
          duration: outDur,
          delay: stagger(20, { from: "last", ease: "easeInQuad" }),
        });

        idx = (idx + 1) % roles.length;
        console.log(`loop ${loopCount++}`);
      }
    }

    loop();

    return () => {
      mounted.current = false; // stop loop saat unmount
      started.current = false;
    };
  }, []);

  // 👉 ini return JSX untuk UI
  return (
    <div className="flex items-center space-x-1">
      <span className="role-text">Web Developer</span>
      <span className="inline-flex items-center">
        <span className="role-dot text-primary">.</span>
      </span>
    </div>
  );
}
