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

  useLayoutEffect(() => {
    if (started.current) return;
    started.current = true;
    mounted.current = true;

    let loopCount:number = 0;
    let elIndex:number = 0;
    function playScramble() {
      if (!mounted.current) return;
      const [$el] = utils.$(selector) as HTMLElement[];
      if (!$el) return;
      
      $el.innerHTML = roles[roleIndex.current];
      wrapWords($el, "word", "char");
      const chars = $el.querySelectorAll(".char");
      
      if (!chars.length) {
        roleIndex.current = (roleIndex.current + 1) % roles.length;
        setTimeout(playScramble, hold);
        return;
      }

      const tl = createTimeline({
        delay: 0,
        onComplete: () => {
          const [$el2] = utils.$(selector) as HTMLElement[];
          $el2.innerHTML = $el[elIndex++];
          if (elIndex > $el.length - 1) {
            elIndex = 0; }
            wrapWords($el2, "word", "char");
            const chars = $el.querySelectorAll(".char");
          scrambleTL = createTimeline({
            onComplete: () => {
              playScramble();
            }
          })
          .add($el2.querySelectorAll(".char"),
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
              x: [-$el2.offsetWidth, 0],
              scaleX: [10, 1],
              transformOrigin: ["0% 0%", "0% 0%"],
              easing: "out(3)",
              duration: chars.length * 25 + 75,
            },
            0
          )
          .add({ duration: hold }).init();}
    })
      .add(chars, {
        opacity: [1, 0],
        scaleX: [1, 0],
        duration: outDur,
        delay: stagger(20, { from: "last", ease: "in(3)" }),
      },0)
        .add(dotSelector, {
          x: -$el.offsetWidth,
          scaleX: [4, 1],
          transformOrigin: ["100% 0%", "100% 0%"],
          easing: "out(3)",
          duration: chars.length * 25 + 100,
        },0).init();
      }

    playScramble();

    return () => {
      mounted.current = false;
      started.current = false;
    };
  }, [roles, selector, dotSelector, hold, inDur, outDur]);
}
