import React, { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import "aos/dist/aos.css";
import "./Header.css";
import Carousel from "./Carousel";

export const Experience = () => {
  const imagePaths = [
    "./cyber.png",
    "./cyber.png",
    "./cyber.png",
    "./cyber.png",
  ];
  const formatNumberWithoutCommas = (value) =>
    value.toLocaleString().replace(/,/g, "");
  const CountUpWithInView = ({ end, duration }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <InView
        as="div"
        onChange={(inView, entry) => {
          if (inView) {
            setIsVisible(true);
          }
        }}
      >
        {isVisible && (
          <CountUp
            end={end}
            duration={duration}
            formattingFn={formatNumberWithoutCommas}
          />
        )}
      </InView>
    );
  };

  return (
    <>
      {/* <div className="flex">
        {imagePaths.map((path, index) => (
          <div key={index} className="carousel-item">
            <img
              src={path}
              alt={`cyber-${index}`}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>{" "} */}
      <Carousel />
      <div className="white-divider mt-16"></div>
      <div className="flex justify-between gap-48 mt-10 px-20">
        <div>
          <p className="textshadow3ds font-medium">
            Internship as Front-end Developer
          </p>
          <h1 className="text-lg font-extrabold ">
            PT Hexaon Business Mitrasindo
          </h1>
          <div className="grid">
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Fraud Detection System
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Costumers Relationship Management{" "}
                <span className="text-white">(CRM)</span>
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Pre-project Analysis as Front-end
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Participated as Part of Front-end Company Team
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg fmont-bold text-red-500">
                Comunication with Team
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Slicing Website
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-[7rem] font-[600] flex justify-center items-center three-d-text"
        >
          <h1>
            {" "}
            <CountUpWithInView end={2023} duration={2} />
          </h1>
        </div>
      </div>
      <div className="white-divider mt-10"></div>
      <div className="flex justify-between gap-48 mt-10 px-20">
        <div>
          <h1 className="text-lg font-extrabold ">+sfdsf</h1>
          <div className="grid">
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Participate Project Work as Front-end
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                TOMODACHI PROGRAM AirPangea
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Develop Website E-Book
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Develop Website E-Commerce
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-[7rem] font-[600] flex justify-center items-center three-d-text"
        >
          <h1>
            <CountUpWithInView end={2022} duration={2} />
          </h1>
        </div>
      </div>
      <div className="white-divider mt-10"></div>
      <div className="flex justify-between gap-48 mt-10 px-20">
        <div>
          <h1 className="text-lg font-extrabold ">Lorem ipum lor for header</h1>
          <div className="grid">
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Lorem ipsum Header
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Lorem ipsum Header
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Lorem ipsum Header
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
            <div className="mt-2" data-aos="fade-right">
              <h1 className="text-lg font-bold text-red-500">
                Lorem ipsum Header
              </h1>
              <p>ini disini ipsum`ksnfffskdfjfjdfskjdfksjdfksjdfjksf</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-[7rem] font-[600] flex justify-center items-center three-d-text"
        >
          <h1>
            <CountUpWithInView end={2021} duration={2} />
          </h1>
        </div>
      </div>
      <div className="white-divider mt-10"></div>
    </>
  );
};

export default Experience;
