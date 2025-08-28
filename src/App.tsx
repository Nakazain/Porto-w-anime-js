import { useEffect } from "react";
import { animate, utils } from "animejs";
import { useTextAnimation } from "./hooks/useTextAnimation";
import { useScrambleRoles } from "./hooks/useScrambleRoles";
import Shape from "./component/shape";

function App() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const roles = [
    "Gamer",
    "Web Developer",
    "Graphics Designer",
    "Video Editor",
    "Math Enthusiast",
    "Anime Lover",
  ];

  // Animating shape
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

  // Runing animation
  useScrambleRoles(roles, {
    selector: ".role-text",
    dotSelector: ".role-dot",
    hold: 1500,
  });
  useTextAnimation({
    selectors: ".ans",
    effect: "Bounce",
    order: "first",
    dur: 800,
    staggerDelay: 50,
  });
  useTextAnimation({
    selectors: "#ket",
    effect: "fadeInUp",
    order: "random",
    dur: 200,
    staggerDelay: 6,
    waitUntil: 1800,
  });
  useEffect(() => {
    anim();
    setTimeout(() => {
      document.querySelector("button")?.classList.add("opacity-100");
    }, 3000);
    setTimeout(() => {
      document.querySelector(".shape-container")?.classList.add("opacity-100");
    }, 4000);
  }, []);

  return (
    <>
      <div className="flex justify-center min-h-screen mt-10 mx-10">
        <div className="flex items-center justify-center">
          <div className="min-h-screen ml-6 mt-10 flex-1">
            <div className="ans opacity-0">
              <h1 id="name" className="text-6xl font-bold text-white">
                Hi 👋 I'm Zen
              </h1>
              <h2 className="mt-4 text-4xl font-bold text-gray-200">
                I'm a <span className="role-text">Web Developer</span>
                <span className="inline-flex items-center">
                  <span className="role-dot text-primary">.</span>
                </span>
              </h2>
            </div>
            <h2 id="ket" className="mt-4 text-xl text-gray-400 opacity-0">I'm passionate about digital and technology, from graphic design and video editing to building websites from scratch. I absolutely love learning new things and experimenting to produce engaging and optimal work. I'm always looking for ways to improve the quality and efficiency of my work.</h2>
            <button className="mt-6 px-6 py-3 bg-transparent border-2 border-primary text-white rounded-lg hover:bg-primary transition-all duration-300 opacity-0">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
