import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaNodeJs,
  FaLaravel,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


export const Skillset = () => {
  return (
    <>
      <div className="flex flex-warp gap-4">
        <FaReact
          className="absolute text-[#89898975] -z-50 parallax"
          data-speed="0.1"
          size={50}
        />
        <div>
          <h1 className="font-bold text-[15px]">
            {" "}
            <span className="bg-transparent= px-3 py-2 rounded-[100%] border-red-500 border-2 text-white font-[3rem]">
              1
            </span>{" "}
            Web Development
          </h1>
          <p className="mt-4">
            lorem ipsum dolor sit amet amet imit umut mamat mamet jada ad ja
            manda raca kamaro
          </p>
        </div>
        <FaHtml5
          size={60}
          className="text-[#89898975] -z-50 parallax"
          data-speed="-0.1"
        />
        <div>
          <h1 className="font-bold text-[15px]">
            {" "}
            <span className="bg-transparent px-3 py-2 rounded-[100%] border-red-500 border-2 text-white font-[3rem]">
              2
            </span>{" "}
            Web Design
          </h1>
          <p className="mt-4">
            lorem ipsum dolor sit amet amet imit umut mamat mamet jada ad ja
            manda raca kamaro
          </p>
        </div>
        <FaCss3Alt
          size={50}
          className="text-[#89898975] -z-50 parallax"
          data-speed="0.1"
        />
        <div>
          <h1 className="font-bold text-[15px]">
            {" "}
            <span className="bg-transparent px-3 py-2 rounded-[100%] border-red-500 border-2 text-white font-[3rem]">
              3
            </span>{" "}
            Frameworks
          </h1>
          <p className="mt-4">
            lorem ipsum dolor sit amet amet imit umut mamat mamet jada ad ja
            manda raca kamaro
          </p>
        </div>
        <IoLogoJavascript
          className="absolute text-[#89898975] -z-50 parallax"
          data-speed="0.2"
          size={15}
        />
        <FaAngular
          size={90}
          className="text-[#89898975] -z-50 parallax"
          data-speed="-0.15"
        />
        <div>
          <h1 className="font-bold text-[15px]">
            {" "}
            <span className="bg-transparent px-3 py-2 rounded-[100%] border-red-500 border-2 text-white font-[3rem]">
              4
            </span>{" "}
            Team Leadership
          </h1>
          <p className="mt-4">
            lorem ipsum dolor sit amet amet imit umut mamat mamet jada ad ja
            manda raca kamaro
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-">
        <SiExpress
          className="absolute text-[#89898975] -z-50 parallax"
          data-speed="-0.2"
          size={25}
        />
      </div>
      <div className="flex justify-end mt-">
        <FaNodeJs
          className="absolute text-[#89898975] -z-50 parallax"
          data-speed="-0.1"
          size={40}
        />
      </div>
      <div className="flex justify-center mt-20 text-9xl gap-14 flex-wrap">
        <div>
          <IoLogoJavascript />
        </div>
        <div>
          <TbBrandNextjs/>
        </div>
        <div>
          <FaAngular />
        </div>
        <div>
          <FaReact />
        </div>
        <div>
          <FaHtml5 />
        </div>
        <div>
          <FaCss3Alt />
        </div>
        <div>
          <SiTailwindcss />
        </div>
        <div>
          <FaBootstrap />
        </div>
        <div>
          <FaLaravel />
        </div>
      </div>
    </>
  );
};
export default Skillset;
