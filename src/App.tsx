import { useEffect } from "react";
import { animate, stagger, text } from "animejs";

function App() {
  useEffect(() => {
    const { chars } = text.split("h2", { words: false, chars: true });
    animate(chars, {
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      delay: stagger(50),
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <>
      <div className="flex justify-center text-center">
        <div className="flex flex-col max-w-4/5 items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-white">Hi 👋 I'm Zen</h1>
          <h2 className="mt-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odit
            sapiente consequuntur animi alias hic tenetur, sit ullam obcaecati
            rem!
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
