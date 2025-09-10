import { useLayoutEffect, useRef } from "react";
import { utils, stagger, createTimeline } from "animejs";
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
  const roleIndex = useRef(0);
  const timelineRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    mounted.current = true;

    let loopCount = 0;
    function playScramble() {
      if (!mounted.current) return;

      const [$el] = utils.$(selector) as HTMLElement[];
      if (!$el) return;

      // pasang text dan wrap
      $el.innerHTML = roles[roleIndex.current];
      wrapWords($el, "word", "char");
      const chars = $el.querySelectorAll(".char");

      // kalau kosong, skip aja ke berikutnya
      if (!chars.length) {
        roleIndex.current = (roleIndex.current + 1) % roles.length;
        setTimeout(playScramble, hold);
        return;
      }

      const tl = createTimeline({
        delay: 0,
        autoplay: true,
        onComplete: () => {
          if (!mounted.current) return;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
          playScramble();
          console.log("loop " + loopCount)
          loopCount++
          console.log(chars)
        },
      })
      .add(chars,
        {
          opacity: [0, 1],
          scaleX: [0, 1],
          x: [10, 0],
          duration: inDur,
          delay: stagger(25, { from: "first", ease: "in(3)", start: 100 }),
        },
        0
      )
        .add(dotSelector, 
          {
            x: [-$el.offsetWidth, 0],
            scaleX: [10, 1],
            transformOrigin: ["0% 0%", "0% 0%"],
            easing: "out(3)",
            duration: chars.length * 25 + 75,
          },
          0
        )
      .add({ duration: hold })
      .add(chars, {
        opacity: [1, 0],
        scaleX: [1, 0],
        duration: outDur,
        delay: stagger(20, { from: "last", ease: "in(3)" }),
      })
        .add(dotSelector, {
          x: -$el.offsetWidth,
          scaleX: [4, 1],
          transformOrigin: ["100% 0%", "100% 0%"],
          easing: "out(3)",
          duration: chars.length * 25 + 100,
        });
      }

    // mulai pertama kali
    playScramble();

    return () => {
      mounted.current = false;
      if (timelineRef.current) {
        try {
          timelineRef.current.pause();
        } catch {}
        timelineRef.current = null;
      }
    };
  }, [roles, selector, dotSelector, hold, inDur, outDur]);
}
