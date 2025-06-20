"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomEase from "gsap/CustomEase";
import { data } from "@/data/logo/logo";
import HeroSection from "./hero-section";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

export default function Loader({acf}:{acf:any}) {
  const container = useRef();
  const customEase = CustomEase.create("custom", ".87,0,.13,1");

  useGSAP(
    () => {
      if (typeof window !== "undefined") {
        const counter = document.getElementById("counter");
        const heroElement = document.querySelector(".hero");
        const videoContainer = document.querySelector(".video-container");
        const progressBar = document.querySelector(".progress-bar");
        const logo = document.querySelector(".logo");
        const animOutChars = document.querySelectorAll(".char.anim-out h1");
        const animInChars = document.querySelectorAll(".char.anim-in h1");
        const headerSpans = document.querySelectorAll(".header span");
        const coordinatesSpans = document.querySelectorAll(".coordinates span");

        if (videoContainer) {
          gsap.set(videoContainer, {
            scale: 0,
            rotation: -20,
          });
        }

        if (heroElement) {
          gsap.to(heroElement, {
            clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
            duration: 1.5,
            ease: customEase,
            delay: 1,
          });

          gsap.to(heroElement, {
            clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
            duration: 2,
            ease: customEase,
            delay: 1,
            onStart: () => {
              if (progressBar && counter) {
                gsap.to(progressBar, {
                  width: "100vw",
                  duration: 2,
                  ease: customEase,
                });

                gsap.to(counter, {
                  innerHTML: 100,
                  duration: 2,
                  ease: customEase,
                  snap: { innerHTML: 1 },
                });
              }
            },
          });

          gsap.to(heroElement, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: customEase,
            delay: 2    ,
            onStart: () => {
              if (videoContainer) {
                gsap.to(videoContainer, {
                  scale: 1,
                  rotation: 0,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  duration: 1.25,
                  ease: customEase,
                });
              }

              if (progressBar) {
                gsap.to(progressBar, {
                  // opacity: 0,
                  duration: 0.3,
                });
              }

              if (logo) {
                gsap.to(logo, {
                  left: "0%",
                  transform: "translateX(0%)",
                  duration: 1.25,
                  ease: customEase,
                  onStart: () => {
                    if (animOutChars.length > 0) {
                      gsap.to(animOutChars, {
                        y: "100%",
                        duration: 1,
                        stagger: -0.075,
                        ease: customEase,
                      });
                    }

                    if (animInChars.length > 0) {
                      gsap.to(animInChars, {
                        x: "-1200%",
                        duration: 1,
                        ease: customEase,
                        delay: 0.25,
                      });
                    }
                  },
                });
              }
            },
          });
        }

        const spans = [...headerSpans, ...coordinatesSpans];
        if (spans.length > 0) {
          gsap.to(spans, {
            y: "0%",
            duration: 1,
            stagger: 0.125,
            ease: "power3.out",
            delay: 5.75,
          });
        }
      }
    },
    { scope: container, dependencies: [] }
  );

  return (
    <>
      <div className="hero" ref={container}>
        
        <div className="progress-bar   bg-primary">
          <p className="uppercase">loading</p>
          <p>
            /<span id="counter">0</span>
          </p>
        </div>

        <div className="video-container">
        <section className='relative'>


        <HeroSection     data={acf.main_heading} />
</section>
        </div>

     

        

        
      </div>

      <div className="logo !text-primary">
        <div className="char ">
          <h1 className="!text-primary">A</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">l</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">i</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">g</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">n</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">e</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">r</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">s</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">f</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">i</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">t</h1>
        </div>
        <div className="char anim-out">
          <h1 className="!text-primary">.</h1>
        </div>
      </div>
    </>
  );
}
