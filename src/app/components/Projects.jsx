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
import { SiBoost, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const Projects = () => {
  return (
    <>
      <div className="project ">
        <div className="bg-[#121212]  p-14 rounded flex justify-between">
          <div className="grid ">
            <div className="max-w-96 ">
              <h1 className="font-bold text-4xl">
                <span className="text-red-500">P5</span> Gaya Hidup
                Berkelanjutan
              </h1>
              <p className="mt-10 opacity-50">
                ini deskripsi panjang batt sumpah gila bat sih ini deskripsi
                panjang batt sumpah gila bat sihini deskripsi panjang batt
                sumpah gila bat sihini deskripsi panjang batt sumpah gila bat
                sihini deskripsi panjang batt sumpah gila bat sih{" "}
              </p>
            </div>

            <h2>TECHNOLOGIES:</h2>
            <div className="flex flex-warp text-7xl gap-2">
              <TbBrandNextjs />
              <SiTailwindcss />
            </div>
          </div>
          <div className="w-[50%] grid grid-rows-1">
            <img src="./p5.png" alt="p5" />
            <img src="p52.png" alt="p5(2)" />
          </div>
        </div>
        <div className="bg-[#121212]  p-14 rounded flex justify-between mt-4">
          <div className="grid ">
            <div className="max-w-96 ">
              <h1 className="font-bold text-4xl">
                <span className="text-red-500">Fraud</span> Detection System
              </h1>
              <p className="mt-10 opacity-50">
                ini deskripsi panjang batt sumpah gila bat sih ini deskripsi
                panjang batt sumpah gila bat sihini deskripsi panjang batt
                sumpah gila bat sihini deskripsi panjang batt sumpah gila bat
                sihini deskripsi panjang batt sumpah gila bat sih{" "}
              </p>
            </div>

            <h2>TECHNOLOGIES:</h2>
            <div className="flex flex-warp text-7xl gap-2">
              <FaAngular />
              <FaBootstrap />
            </div>
          </div>
          <div className="w-[50%] grid grid-rows-1">
            <img src="./fds2.png" alt="FDS1" />
            <img src="./FDS1.png" alt="FDS1" />
          </div>
        </div>
        <div className="bg-[#121212]  p-14 rounded flex justify-between mt-4">
          <div className="grid ">
            <div className="max-w-96 ">
              <h1 className="font-bold text-4xl">
                <span className="text-red-500">Tick</span>eting System
              </h1>
              <p className="mt-10 opacity-50">
                ini deskripsi panjang batt sumpah gila bat sih ini deskripsi
                panjang batt sumpah gila bat sihini deskripsi panjang batt
                sumpah gila bat sihini deskripsi panjang batt sumpah gila bat
                sihini deskripsi panjang batt sumpah gila bat sih{" "}
              </p>
            </div>

            <h2>TECHNOLOGIES:</h2>
            <div className="flex flex-warp text-7xl gap-2">
              <FaLaravel />
              <FaBootstrap />
            </div>
          </div>
          <div className="w-[50%]">
            <img src="./cyber.png" alt="porto1" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
