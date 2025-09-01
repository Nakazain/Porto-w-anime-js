import { useEffect } from "react";
import { animate, utils } from "animejs";
import { useTextAnimation } from "./hooks/useTextAnimation";
import { useScrambleRoles } from "./hooks/useScrambleRoles";
import Shape from "./component/shape";
import NavBar from "./component/navbar";
import Btn from "./component/button";
import Card from "./component/card";

function App() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const roles = [
    "Gamer",
    "Web Developer",
    "Graphics Designer",
    "Math Enthusiast",
    "Anime Lover",
  ];

  // Animating shape
  // function anim() {
  //   const Shape = document.querySelectorAll(".shape");
  //   for (let i = 0; i < Shape.length; i++) {
  //     animate(Shape[i], {
  //       x: () => utils.random(-10, viewportWidth / 3),
  //       y: () => utils.random(-10, viewportHeight / 1.5),
  //       rotate: () => utils.random(-180, 180),
  //       scale: () => utils.random(0.25, 1.5, 3),
  //       duration: () => utils.random(700, 1500),
  //       ease: "inOutBack",
  //       loop: true,
  //       onLoop(self) {
  //         self.refresh();
  //       },
  //     });
  //   }
  // }

  // // Runing animation
  // useScrambleRoles(roles, {
  //   selector: ".role-text",
  //   dotSelector: ".role-dot",
  //   hold: 1500,
  // });
  // useTextAnimation({
  //   selectors: ".ans",
  //   effect: "fadeInLeft",
  //   order: "first",
  //   dur: 800,
  //   staggerDelay: 50,
  // });
  // useTextAnimation({
  //   selectors: "#ket",
  //   effect: "fadeInUp",
  //   order: "random",
  //   dur: 200,
  //   staggerDelay: 6,
  //   waitUntil: 1800,
  // });
  // useEffect(() => {
  //   anim();
  //   setTimeout(() => {
  //     document.querySelector(".fade")?.classList.add("opacity-100");
  //   }, 3000);
  //   setTimeout(() => {
  //     document.querySelector(".shape-container")?.classList.add("opacity-100");
  //   }, 4000);
  // }, []);

  return (
    <>
      <NavBar />
      <div className="flex justify-center min-h-screen mx-10">
        <div className="flex items-center justify-center">
          <div className="ml-6 flex-1">
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
            <h2 id="ket" className="mt-4 text-xl text-gray-400 opacity-0">
              I'm passionate about digital and technology, from graphic design
              and video editing to building websites from scratch. I absolutely
              love learning new things and experimenting to produce engaging and
              optimal work. I'm always looking for ways to improve the quality
              and efficiency of my work.
            </h2>
            <div className="fade transition-opacity duration-1000 opacity-0">
              <Btn>
                <p>My Project</p>
              </Btn>
            </div>
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
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <div className="my-6">
            <h3 className="text-3xl text-center font-bold">My Project</h3>
            <p className="text-xl text-center font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Several projects that I have created
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="p-2 sticky flex gap-2 top-10 left-1/2 -translate-x-1/2 bg-neutral-900 rounded-lg w-fit">
          <p className="bg-neutral-800 cursor-pointer p-2 rounded-md hover:bg-neutral-900 transition-colors duration-300">
            Design Project
          </p>
          <p className="bg-neutral-800 cursor-pointer p-2 rounded-md hover:bg-neutral-900 transition-colors duration-300">
            Web Project
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 min-h-screen mx-20">
            <img className="h-80" src="/tes.jpg" alt="" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Project Name</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              nemo eveniet nihil! Delectus commodi voluptatibus esse aut, est
              reiciendis deleniti culpa temporibus at inventore corrupti sunt
              quidem odio dolores maiores.
            </p>
          </div>
        </div>
                <div className="p-2 sticky flex gap-2 bottom-10 left-1/2 -translate-x-1/2 bg-neutral-900 rounded-lg w-fit">
          <p className="bg-neutral-800 cursor-pointer p-2 rounded-md hover:bg-neutral-900 transition-colors duration-300">
            Left
          </p>
          <p className="bg-neutral-800 cursor-pointer p-2 rounded-md hover:bg-neutral-900 transition-colors duration-300">
            Right
          </p>
        </div>

      </div>
    </>
  );
}

export default App;
