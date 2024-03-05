import React from "react";
import ScrollTop from "../ScrollTop";
import "../Header.css";
import Cv from "../Cv";
export const Footer = () => {
  return (
    <>
      <div>
        <ScrollTop />
      </div>
      <div className="flex justify-center items-center  py-80 text-9xl font-medium">
        <div>
          <h1>
            GET <span data-aos="fade-up">IN</span>{" "}
            <span className="text-white  text-shadow-3ds">TOUCH</span>
          </h1>
          <Cv/>
        </div>
      </div>
      <div className="flex p-1 bg-white text-black">
        <p>created by G</p>
      </div>
    </>
  );
};
export default Footer;
