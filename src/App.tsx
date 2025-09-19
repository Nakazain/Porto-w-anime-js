import { useEffect, useState, useRef } from "react";
import { animate, createScope, onScroll, utils } from "animejs";
import { useTextAnimation } from "./hooks/useTextAnimation";
import Shape from "./component/shape";
import NavBar from "./component/navbar";
import Btn from "./component/button";
import Card from "./component/card";
import Input from "./component/input";
import Footer from "./component/footer";
import Loader from "./component/loader";
import { useToast } from "./context/ToastProvider";
import Scramble from "./component/scramble";

function App() {
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const root = useRef(null);
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const { showToast } = useToast();
  const [message, setMessage] = useState("");
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Animating
  useTextAnimation({
    selectors: ".ans",
    effect: "fadeInLeft",
    order: "first",
    dur: 800,
    staggerDelay: 50,
  });
  useTextAnimation({
    selectors: "#ket",
    effect: "fadeInUp",
    order: "random",
    dur: 200,
    staggerDelay: 4,
    waitUntil: 1000,
  });

  // Form funtioon
  async function submit(
    nama: string,
    email: string,
    message: string,
    button: HTMLButtonElement
  ) {
    const loader = document.querySelector(".loader");
    const formCont = document.querySelector(".form-cont");
    button.disabled = true;
    formCont?.classList.add("hidden");
    loader?.classList.remove("hidden");

    const data = {
      name: nama,
      email: email,
      message: message,
    };

    try {
      const API_ENDPOINT = "/api/telegram";
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.ok) {
        showToast("Pesan berhasil terkirim!", "success");
      } else {
        showToast("Gagal mengirim pesan", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Terjadi kesalahan saat mengirim pesan.", "error");
    } finally {
      formCont?.classList.remove("hidden");
      loader?.classList.add("hidden");
      button.disabled = false;
    }
  }

  // Animating
  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      const Shape = document.querySelectorAll(".shape");
      const animations = Array.from(Shape).map((s) =>
        animate(s, {
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
        })
      );

      const prjk = document.querySelectorAll(".fade-up");
      const cardScroll = Array.from(prjk).map((e) =>
        animate(e, {
          opacity: 1,
          translate: "0 0px",
          ease: 'inOutCubic',
          autoplay: onScroll({
            container: ".scroll-container",
            enter: "bottom-=7% top",
            leave: "top+=75% bottom",
            sync: 0.25,
            debug: true,
          }),
        })
      );

      return () => {
        if (scope.current) {
          animations.forEach((a) => a.pause());
          cardScroll.forEach((a) => a.pause());
          scope.current.revert();
        }
      };
    });
    setTimeout(() => {
      document.querySelector(".fade")?.classList.add("opacity-100");
    }, 2000);
    setTimeout(() => {
      document.querySelector(".shape-container")?.classList.add("opacity-100");
    }, 3000);
  }, []);

  return (
    <>
      <NavBar />
      <div
        ref={root}
        className="flex scroll-container justify-center min-h-screen mx-10"
      >
        <div className="flex items-center justify-center">
          <div className="ml-6 flex-1">
            <div className="ans opacity-0">
              <h1 id="name" className="text-6xl font-bold text-white">
                Hi 👋 I'm Zen
              </h1>
              <h2 className="mt-4 flex gap-2 text-4xl font-bold text-gray-200">
                <span>I'm a</span>
                <Scramble />
              </h2>
            </div>
            <h2 id="ket" className="mt-4 text-xl text-gray-400 opacity-0">
              I'm passionate about digital and technology, from graphic design
              and video editing to building websites from scratch. I absolutely
              love learning new things and experimenting to produce engaging and
              optimal work. I'm always looking for ways to improve the quality
              and efficiency of my work.
            </h2>
            <div className="fade flex gap-2 mt-4 transition-opacity duration-500 opacity-0">
              <Btn>
                <p>My Project</p>
              </Btn>
              <Btn
                onClick={() => showToast("Pesan berhasil terkirim!", "success")}
              >
                Toaster tes
              </Btn>
              <Btn onClick={() => showToast("Hahhhhhhhhhhhhhhhh!", "error")}>
                Toaster tes
              </Btn>
            </div>
          </div>
          <div className="shape-container relative h-full transition-opacity duration-1000 flex-1 overflow-visible opacity-0">
            <Shape type="circle" />
            <Shape type="circleOutline" />
            <Shape type="square" />
            <Shape type="squareOutline" />
            <Shape type="oval" />
            <Shape type="ovalOutline" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <div className="my-6">
            <h3
              className="fade-up text-3xl text-center font-bold"
              style={{ opacity: "0%", translate: "0 100px" }}
            >
              My Project
            </h3>
            <p
              className="fade-up text-xl text-center font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
              style={{ opacity: "0%", translate: "0 50px" }}
            >
              Several projects that I have created
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="flex justify-center min-w-6xl items-center min-h-screen">
        <form>
          <div className="loader hidden">
            <Loader />
          </div>
          <div className="form-cont flex flex-col gap-4">
            <h4 className="text-3xl font-bold text-center mb-4">Contact me</h4>
            <Input text="Name" type="text" value={nama} onChange={setNama} />
            <Input
              text="Email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <Input
              textarea
              text="Message"
              type="text"
              value={message}
              onChange={setMessage}
            />
            <Btn
              onClick={(e) => {
                e.preventDefault();
                const button = e.currentTarget;
                submit(nama, email, message, button);
              }}
            >
              Submit
            </Btn>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
