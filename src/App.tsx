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
    const { chars } = text.split(`#${selectors}`, { chars: true });
    document.getElementById(selectors)?.classList.remove("opacity-0");

    animate(chars, {
      x: [{ from: "2rem" }, { to: 0, duration: dur }],
      opacity: [{ from: 0 }, { to: 1, duration: dur }],
      delay: stagger(staggerDelay, { start: waitUntil }),
      duration: dur,
    });
  }

  function anim() {
    animate(".absolute", {
      x: () => utils.random(-10, viewportWidth / 3),
      y: () => utils.random(-10, viewportHeight / 1.5),
      rotate: () => utils.random(-180, 180),
      scale: () => utils.random(.25, 1.5, 3),
      duration: stagger([500, 1000], {from: "random"}),
      ease: "inOutSine",
      loop: true,
      onLoop(self) {
        self.refresh();
      },
    });
  }

  function fadeInUpC(
    dur: number,
    staggerDelay: number,
    waitUntil: number,
    selectors: string
  ) {
    const { chars } = text.split(`#${selectors}`, { chars: true });
    document.getElementById(selectors)?.classList.remove("opacity-0");

    animate(chars, {
      y: [{ from: "1rem" }, { to: 0, duration: dur }],
      opacity: [{ from: 0 }, { to: 1, duration: dur }],
      delay: stagger(staggerDelay, { start: waitUntil, from: "random" }),
      duration: dur,
    });
  }

  useEffect(() => {
    fadeInLeftC(800, 100, 200, "name");
    fadeInUpC(200, 5, 1000, "ket");
    anim();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-10 mx-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="min-h-screen flex-1">
            <h1 id="name" className="text-4xl font-bold text-white opacity-0">
              Hi 👋 I'm Zen
            </h1>
            <h2 id="ket" className="mt-4 text-lg text-gray-300 opacity-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto vel enim est asperiores quia et eligendi
              inventore! Eius omnis inventore enim reiciendis deleniti quas
              impedit architecto repellendus, nisi porro.
            </h2>
          </div>
          <div className="flex-1">
            <Shape type="circle"/>
            <Shape type="circleOutline"/>
            <Shape type="square"/>
            <Shape type="squareOutline"/>
            <Shape type="rectangle"/>
            <Shape type="rectangleOutline"/>
            <Shape type="oval"/>
            <Shape type="ovalOutline"/>
            <Shape type="circle"/>
            <Shape type="circleOutline"/>
            <Shape type="square"/>
            <Shape type="squareOutline"/>
            <Shape type="rectangle"/>
            <Shape type="rectangleOutline"/>
            <Shape type="oval"/>
            <Shape type="ovalOutline"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
