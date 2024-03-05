import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutme from "./Aboutme";
import "./Header.css";
import Certificates from "./Certificates";
import Skillset from "./Skillset";
import Experience from "./Experience";
import Cv from "./Cv";
import Projects from "./Projects";

export const Header = () => {
  useEffect(() => {
    AOS.init();
    const parallaxEffect = () => {
      const parallaxElements = document.querySelectorAll(".parallax");

      window.addEventListener("scroll", () => {
        parallaxElements.forEach((element) => {
          const distance = window.scrollY;
          const speed = element.dataset.speed;
          element.style.transform = `translateY(${distance * speed}px)`;
        });
      });
    };

    parallaxEffect();

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="text-center">
          <h4 className="font-bold text-xl mb-0 parallax" data-speed="0.5">
            Hello, its me Giffa!
          </h4>
          <h1
            className="text-[10rem] font-bold text-shadow-3d text-red-500 parallax"
            data-speed="0.35"
          >
            FRONT-
            <span data-aos-duration="3000" data-aos="fade-left" className="text-white flickerAnimation glow-text text-shadow-3ds">
              END
            </span>
          </h1>
        </div>
        <div className="parallax gap-12 w-auto px-36 -z-50 flex absolute justify-center items-center" data-speed="0.2">
          <div className="opacity-40">
            <img src="./city1.jpeg" alt="city1" />
          </div>
          <div className="opacity-30">
            <img src="./city2.jpeg" alt="city2" />
          </div>
          <div className="opacity-30">
            <img src="./city3.jpeg" alt="city3" />
          </div>
          <div className="opacity-40">
            <img src="./city5.jpeg" alt="city5" />
          </div>
        </div>
      </div>
      <div class="flex justify-around ">
        <h1
          className="text-[1rem] font-bold mt-0 text-shadow-3d text-red-50-500 parallax"
          data-speed="0.1"
          span
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          WEB
        </h1>
        <h1
          className="text-[1rem] font-bold mt-0 text-shadow-3d text-red-500 textshadow3ds parallax"
          data-speed="0.1"
          span
          data-aos-duration="3000"
          data-aos="fade"
        >
          DEVELOPER
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="absolute w-80  mt-12 parallax"
          data-speed="-0.25"
          src="./profilegrey.png"
          alt=""
        />
      </div>
      <div class="mt-80 px-40">
        <div className=" ">
          <div className="parallax px-44" data-speed="-0.1">
            <h1 className="font-bold text-[3rem]">
              About<span className="text-red-500">Me</span>
            </h1>
          </div>
          <div className="text-sm px-44 ">
            <Aboutme />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
      <div className="parallax w-32" data-speed="-0.3">
      <img src="./flyingboy.png" className="w-48" alt="boy" />
      </div>
    </div>
      <div class="mt-40 px-40">
        <div className="grid ">
          <div className="parallax px-44" data-speed="-0.09">
            <h1 className="font-bold text-[3rem]">
              Skill<span className="text-red-500">Set</span>
            </h1>
            <p>
            Over the past three years, I've dedicated significant time and
              effort to exploring various programming languages, deepening my
              understanding of fundamental coding concepts. Additionally, I've
              gained valuable hands-on experience through active participation
              in industry classes, providing practical insights into the
              application of technology in the professional sphere.
            </p>
          </div>
          <div className="text-sm px-20 mb-32">
            <Skillset />
          </div>
        </div>
      </div>
      <div class="mt-40 px-40">
        <div className="grid ">
          <div className="parallax px-44" data-speed="-0.04">
            <h1 className="font-bold text-[3rem]">
              <span className="text-red-500">Pro</span>ject
            </h1>
            
          </div>
          <div className="text-sm mb-32">
            <Projects />
          </div>
        </div>
      </div>
      <div className="absolute">
        <div className="parallax -z-50" data-speed="0.1">
          <img src="./sign2.png" alt="" />
        </div>
      </div>
      <div class="mt-80 px-40">
        <div className=" gap-9 justify-between">
          <div
            className="parallax px-44 mb-24 "

          >
            <h1 className="font-bold text-[4rem]">
              <span className="text-red-500">Ex</span>perience
            </h1>
            <p className="parallax" data-speed="-0.0" >
              Over the past three years, I've dedicated significant time and
              effort to exploring various programming languages, deepening my
              understanding of fundamental coding concepts. Additionally, I've
              gained valuable hands-on experience through active participation
              in industry classes, providing practical insights into the
              application of technology in the professional sphere.
            </p>
          </div>
          <div className="parallax">
          <Experience />
          </div>
         
        </div>
      </div>
      <div className="-z-50 absolute  w-2/3 flex justify-between items-between bg-cover">
      <div>
      <img className="bg-cover w-full parallax flex justify-center items-center" data-speed="0.1" src="./libra.png" alt="" />
      </div>
        <div>
      <img className="bg-cover w-full   flex justify-center items-center parallax" data-speed="-0.2" src="./sign1.png" alt="" />
      </div>
      </div>
      <div class="px-16 mt-48">
        <div className="flex gap-9 justify-between">
          <div
            className="parallax flex justify-center items-center"
            data-speed="-0.1"
          >
            <h1 className="font-bold text-[4rem]">
              <span className="text-red-500">C</span>ertificate
            </h1>
          </div>
          <div className="text-sm  px-40">
            <Certificates className="parallax" />
          </div>
        </div>
      </div>
      <div className="mt-0 absolute -z-50 parallax" data-speed="-0.2">
        {/* <img src="./redmoon.png" className="w-full" alt="" /> */}
        <div className="flex justify-end items-end mt-60">
          <img
            src="./spaceship.png"
            className="w-24 parallax"
            data-speed="-0.3"
            alt=""
          />
        </div>
      </div>
      <div className="grid justify-center items-center mt-36">
        
          <div
            className=" flex justify-center items-center"
          >
            <h1 className="font-bold text-[4rem]">
              <span className="text-red-500">C</span>V
            </h1>
          </div>
      <Cv/>
      </div>
      <div className="flex justify-end items-end">
      <div className="parallax w-32" data-speed="-0.2">
      <img src="./reachsky.png" className="w-48" alt="boy" />
      </div>
    </div>
    </>
  );
};

export default Header;
