import React, { useEffect } from "react";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Certificates = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="w-[21rem] relative certificates-container">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"

          className="mb-4 certificate-item"
        >
          <img
            src="./airpangea.jpeg"
            alt=""
            className="w-full rounded-lg shadow-md"
          />
          <div className="certificate-description">
            <p>Description for Airpangea Certificate</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="mb-4 certificate-item"
        >
          <img
            src="./cyber.png"
            alt=""
            className="w-full rounded-lg shadow-md"
          />
          <div className="certificate-description">
            <p>Description for Cyber Certificate</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          className="mb-4 certificate-item"
        >
          <img
            src="./pkl.jpeg"
            alt=""
            className="w-full rounded-lg shadow-md"
          />
          <div className="certificate-description">
            <p>Description for PKL Certificate</p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="mb-4 certificate-item"
        >
          <img
            src="./airpangea.jpeg"
            alt=""
            className="w-full rounded-lg shadow-md"
          />
          <div className="certificate-description">
            <p>Description for Airpangea Certificate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
