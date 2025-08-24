import { useEffect } from "react";
import { animate, utils } from "animejs";
import { useTextAnimation } from "./hooks/useTextAnimation";
import Shape from "./component/shape";

function App() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  console.log("Viewport Width:", viewportWidth);
  console.log("Viewport Height:", viewportHeight);

  function anim() {
    const Shape = document.querySelectorAll(".shape");
    for (let i = 0; i < Shape.length; i++) {
      animate(Shape[i], {
        x: () => utils.random(-10, viewportWidth / 3),
        y: () => utils.random(-10, viewportHeight / 1.5),
        rotate: () => utils.random(-180, 180),
        scale: () => utils.random(0.25, 1.5, 3),
        duration: () => utils.random(700, 1500),
        ease: "inOutBack",
        loop: true,
        onLoop(self) {
          self.refresh();
        },
      });
    }
  }

  useTextAnimation(".ans", "fadeInLeft", "first", 800, 100);
  useTextAnimation("#ket", "fadeInUp", "random", 200, 5, 1000);

  useEffect(() => {
    anim();
    setTimeout(() => {
      document.querySelector(".shape-container")?.classList.add("opacity-100");
    }, 2500);
  }, []);

  return (
    <>
      <div className="flex justify-center min-h-screen mt-10 mx-10">
        <div className="flex items-center justify-center">
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
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              My Project
            </button>
          </div>
          <div className="shape-container relative h-full transition-opacity duration-1000 flex-1 overflow-visible opacity-0">
            <Shape className="shape" type="circle" />
            <Shape className="shape" type="circleOutline" />
            <Shape className="shape" type="square" />
            <Shape className="shape" type="squareOutline" />
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
