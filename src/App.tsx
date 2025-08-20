import { useEffect } from "react";
import { animate, stagger, text } from "animejs";

function App() {
  useEffect(() => {
    const { words } = text.split("h2", { words: true });
    console.log(words);
    animate(words, {
      y: [
        { to: "-2.75rem", duration: 600 },
        { to: 0, duration: 800, delay: 100 },
        { to: "2.75rem", duration: 600 },
        { to: 0, duration: 800, delay: 100 },
      ],
      delay: stagger(100, {from: "random"}),
      loopDelay: 2000,
      loop: true,
    });
  }, []);

  return (
    <>
      <div className="flex justify-center text-center">
        <div className="flex flex-col max-w-4/5 items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold text-white">Hi 👋 I'm Zen</h1>
          <div className="overflow-hidden">
          <h2 className="mt-4 text-lg text-gray-300">Orang paling jenius</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
