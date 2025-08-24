import { useEffect } from "react";
import { animate, stagger, text, utils } from "animejs";
import Shape from "./component/shape";

function App() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  console.log("Viewport Width:", viewportWidth);
  console.log("Viewport Height:", viewportHeight);

  function fadeInLeftC(
    dur: number,
    staggerDelay: number,
    waitUntil: number,
    selectors: string
  ) {
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

      animate(chars, {
        x: [{ from: "2rem" }, { to: 0, duration: dur }],
        opacity: [{ from: 0 }, { to: 1, duration: dur }],
        delay: stagger(staggerDelay, { start: waitUntil }),
        duration: dur,
      });
    });
  }

  function fadeInUpC(
    dur: number,
    staggerDelay: number,
    waitUntil: number,
    selectors: string
  ) {
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

      animate(chars, {
        y: [{ from: "1rem" }, { to: 0, duration: dur }],
        opacity: [{ from: 0 }, { to: 1, duration: dur }],
        delay: stagger(staggerDelay, { start: waitUntil, from: "random" }),
        duration: dur,
      });
    });
  }

  function anim() {
    animate(".shape", {
      x: () => utils.random(-10, viewportWidth / 3),
      y: () => utils.random(-10, viewportHeight / 1.5),
      rotate: () => utils.random(-180, 180),
      scale: () => utils.random(0.25, 1.5, 3),
      duration: utils.random(500, 1000),
      ease: "inOutSine",
      loop: true,
      onLoop(self) {
        self.refresh();
      },
    });
  }

  

  useEffect(() => {
    fadeInLeftC(800, 100, 200, ".ans");
    fadeInUpC(200, 5, 1000, "#ket");
    anim();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-10 mx-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="min-h-screen ml-6 mt-10 flex-1">
            <h1
              id="name"
              className="ans text-6xl font-bold text-white opacity-0"
            >
              Hi 👋 I'm Zen
            </h1>
            <h2 className="ans mt-4 text-4xl font-bold text-gray-200 opacity-0">
              I'm a <span id="role">Nanti diisi</span>
              <span className="inline-flex items-center">
                <span id="cursor" className="block bg-blue-500 w-2 h-2"></span>
              </span>
            </h2>
            <h2 id="ket" className="mt-4 text-xl text-gray-400 opacity-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto vel enim est asperiores quia et eligendi
              inventore! Eius omnis inventore enim reiciendis deleniti quas
              impedit architecto repellendus, nisi porro.
            </h2>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"></button>
          </div>
          <div className="flex-1">
            <Shape className="shape" type="circle" />
            <Shape className="shape" type="circleOutline" />
            <Shape className="shape" type="square" />
            <Shape className="shape" type="squareOutline" />
            <Shape className="shape" type="rectangle" />
            <Shape className="shape" type="rectangleOutline" />
            <Shape className="shape" type="oval" />
            <Shape className="shape" type="ovalOutline" />
            <Shape className="shape" type="circle" />
            <Shape className="shape" type="circleOutline" />
            <Shape className="shape" type="square" />
            <Shape className="shape" type="squareOutline" />
            <Shape className="shape" type="rectangle" />
            <Shape className="shape" type="rectangleOutline" />
            <Shape className="shape" type="oval" />
            <Shape className="shape" type="ovalOutline" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
