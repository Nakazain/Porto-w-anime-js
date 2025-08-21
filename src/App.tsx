import { useEffect } from "react";
import { animate, stagger, text } from "animejs";


function App() {
function fadeInLeftC(
  dur: number,
  staggerDelay: number,
  waitUntil: number,
  selectors: string
) {
  const { chars } = text.split(`#${selectors}`, { chars: true });

  animate(chars, {
    x: [{ from: "2rem" }, { to: 0, duration: dur }],
    opacity: [{ from: 0 }, { to: 1, duration: dur }],
    delay: stagger(staggerDelay, { start: waitUntil }),
    duration: dur,
  });
}

function fadeInUpC(
  dur: number,
  staggerDelay: number,
  waitUntil: number,
  selectors: string
) {
  const { chars } = text.split(`#${selectors}`, { chars: true });

  animate(chars, {
    y: [{ from: "1rem" }, { to: 0, duration: dur }],
    opacity: [{ from: 0 }, { to: 1, duration: dur }],
    delay: stagger(staggerDelay, { start: waitUntil, from: "random" }),
    duration: dur,
  });
}

  useEffect(() => {
    fadeInLeftC(800, 100, 200, "name"); 
    fadeInUpC(200, 10, 1000, "ket");
  }, []);

  return (
    <>
      <div className="flex justify-center text-center">
        <div className="flex flex-col max-w-4/5 items-center justify-center min-h-screen">
          <h1 id="name" className="text-4xl font-bold text-white">
            Hi 👋 I'm Zen
          </h1>
          <h2 id="ket" className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto vel enim est asperiores quia et eligendi inventore! Eius omnis
            inventore enim reiciendis deleniti quas impedit architecto
            repellendus, nisi porro.
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
