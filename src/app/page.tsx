"use client";

import { useEffect, useState, useRef } from "react";
import { animate, createScope, onScroll, utils } from "animejs";
import { useTextAnimation } from "./hooks/useTextAnimation";
import Shape from "./component/shape";
import Btn from "./component/button";
import Card from "./component/card";
import Input from "./component/input";
import Footer from "./component/footer";
import Loader from "./component/loader";
import { useToast } from "./hooks/useToast";
import Scramble from "./component/scramble";
import ContactCard from "./component/contact";

export default function App() {
  const scope = useRef<ReturnType<typeof createScope> | null>(null);
  const root = useRef(null);
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const { showToast } = useToast();
  const [message, setMessage] = useState("");

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

  // Form funtion
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
        showToast("Message sent successfully!", "success");
      } else {
        showToast("Failed to send message, please try again", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast(
        `An error occurred while sending the message. Please try again. Error: ${error}.`,
        "error"
      );
    } finally {
      formCont?.classList.remove("hidden");
      loader?.classList.add("hidden");
      button.disabled = false;
    }
  }

  // Animating
  useEffect(() => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    console.log(viewportHeight);
    console.log(viewportWidth);

    scope.current = createScope({ root }).add(() => {
      const Shape = document.querySelectorAll(".shape");
      const animations = Array.from(Shape).map((e) =>
        animate(e, {
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

      const fadeUp = document.querySelectorAll(".fade-up");
      const fadeUpScroll = Array.from(fadeUp).map((e) =>
        animate(e, {
          opacity: 1,
          translate: "0 0px",
          ease: "inOutCubic",
          autoplay: onScroll({
            container: ".scroll-container",
            enter: "bottom-=7% top",
            leave: "top+=80% bottom",
            sync: 0.5,
          }),
        })
      );

      const card = document.querySelectorAll(".card");
      const cardScroll = Array.from(card).map((e) =>
        animate(e, {
          opacity: 1,
          translate: "0 0px",
          duration: 500,
          ease: "inOutCubic",
          autoplay: onScroll({
            container: ".scroll-container",
            enter: "bottom top",
            leave: "top+=80% 30%",
            sync: 0.9,
          }),
        })
      );

      const fadeUpForm = document.querySelectorAll(".fade-up-form");
      const fadeUpScrollForm = Array.from(fadeUpForm).map((e) =>
        animate(e, {
          opacity: 1,
          translate: "0 0px",
          ease: "inOutCubic",
          autoplay: onScroll({
            container: ".form-cont",
            enter: "bottom-=5% top",
            leave: "top+=90% 10%",
            sync: 0.5,
          }),
        })
      );

      animate(".fade", {
        opacity: 1,
        delay: 2000,
      });

      animate(".shape-container", {
        opacity: 1,
        delay: 3000,
      });

      animate(".nav", {
        translate: "0",
        autoplay: onScroll({
          container: ".scroll-container",
          enter: `bottom-=90% bottom+=${(viewportHeight / 100) * 85}px `,
          leave: `top+=5% bottom+=${viewportHeight - 20}px`,
          sync: 0.75,
        }),
      });

      return () => {
        if (scope.current) {
          animations.forEach((a) => a.pause());
          cardScroll.forEach((a) => a.pause());
          fadeUpScrollForm.forEach((a) => a.pause());
          fadeUpScroll.forEach((a) => a.pause());
          scope.current.revert();
        }
      };
    });
  }, []);

  return (
    <>
      <div ref={root} className="flex scroll-container ">
        <div className="fixed top-0 z-50">
          <div style={{ translate: "-150%" }} className="nav flex mt-6 mx-10">
            <p className="text-2xl font-bold">Nakazain.</p>
          </div>
        </div>
        <div className="flex items-center min-h-screen justify-center mx-10">
          <div className="ml-6 flex-1">
            <div className="ans opacity-0">
              <h1 id="name" className="text-6xl font-bold text-white">
                Hi 👋 I&apos;m Zen
              </h1>
              <h2 className="mt-4 flex gap-2 text-4xl font-bold text-gray-200">
                <span>I&apos;m a</span>
                <Scramble />
              </h2>
            </div>
            <h2 id="ket" className="mt-4 text-xl text-gray-400 opacity-0">
              I&apos;m passionate about digital and technology, from graphic
              design and video editing to building websites from scratch. I
              absolutely love learning new things and experimenting to produce
              engaging and optimal work. I&apos;m always looking for ways to
              improve the quality and efficiency of my work.
            </h2>
            <div className="fade flex gap-2 mt-4" style={{ opacity: "0%" }}>
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
          <div
            className="shape-container relative h-full flex-1"
            style={{ opacity: "0%" }}
          >
            <Shape type="circle" />
            <Shape type="circleOutline" />
            <Shape type="square" />
            <Shape type="squareOutline" />
            <Shape type="oval" />
            <Shape type="ovalOutline" />
          </div>
        </div>
      </div>
      <div className="flex prjk-contaier justify-center items-center min-h-screen">
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
            <Card
              title="Waifu Src"
              description="Bored with your same old waifu, just find a new wife with Waifu Src"
              imageUrl="/waifusrc.png"
              placeholder="Waifu finding app image"
              weblink="waifu-src.vercel.app"
              github="https://github.com/Nakazain/WaifuSrc"
            />
          </div>
        </div>
      </div>
      <div className="flex form-cont justify-center min-w-6xl gap-8 items-center min-h-screen">
        <div className="flex justify-center gap-8">
          <ContactCard />
          <div className="flex justify-center items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const nativeEvent = e.nativeEvent as SubmitEvent & {
                  submitter: HTMLButtonElement;
                };
                const button = nativeEvent.submitter as HTMLButtonElement;
                submit(nama, email, message, button);
              }}
            >
              <div className="loader hidden">
                <Loader />
              </div>
              <div className="flex justify-center items-center flex-col gap-4">
                <h4
                  className="fade-up-form text-3xl font-bold text-center mb-4"
                  style={{ opacity: "0%", translate: "0 100px" }}
                >
                  Send Me A Message
                </h4>
                <Input
                  text="Name"
                  type="text"
                  value={nama}
                  onChange={setNama}
                />
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
                  type="submit"
                  style={{ opacity: "0%", translate: "0 100px" }}
                  className="fade-up-form"
                >
                  Submit
                </Btn>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
