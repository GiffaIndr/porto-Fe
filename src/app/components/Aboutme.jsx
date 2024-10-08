import Paragraph from "antd/es/skeleton/Paragraph";
import React, { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import './main.css'

export const Aboutme = () => {
  return (
    <>
    <div className="flex gap-24">
      <img src="./newprofile.jpeg" alt=""  width={500}/>
    <paragraph className=" grid gap-7">
      <div>
      <p className="mb-6">
        {" "}
        I am Syaikhani Giffa Indrawan, commonly known as Giffa. Currently, I am
        committed to developing and deepening my skills in the field of
        front-end development. My diverse educational background and work
        experience have provided a solid foundation for the growth of my
        technical skills.
      </p>{" "}
      <p  className="mb-7">
        I have a high enthusiasm for continuous self-improvement and enjoy
        exploring new aspects of technology. Apart from focusing on technical
        skill development, I am actively engaged in building and expanding a
        professional network with peers. I believe that collaboration and the
        exchange of ideas are key to generating innovative solutions.
      </p>
      <p  className="mb-7">
        With a proactive spirit and a desire for continuous growth, I am
        confident in making a positive contribution in a dynamic and challenging
        work environment. Thank you for this opportunity, and I look forward to
        collaborating and growing together in the future.
      </p>
      </div>
      <div className="flex gap-4">
      <div className=" ">
        <a className="linkedIn flex justify-between py-2 px-4" href="https://www.linkedin.com/in/syaikhanigiffa/"><CiLinkedin size={30}/> <p className="justify-right text-right text-[13px]"> Syaikhani Giffa Indrawan</p></a>
        <a className="instagram flex justify-between py-2 px-4 mt-2" href="https://www.instagram.com/giffaa_indr/"><FaInstagram size={30}/> <p className="justify-right text-right text-[13px]"> Giffaa_indr</p></a>
      </div>
      <div className=" ">
        <a className="github flex justify-between py-2 px-4" href="https://www.linkedin.com/in/syaikhanigiffa/"><FaGithub size={30} /><p className="justify-right text-right text-[13px]"> GiffaIndr</p></a>
        <a className="twitter flex justify-between py-2 px-4 mt-2" href="https://www.instagram.com/giffaa_indr/"><FaXTwitter size={30}/> <p className="justify-right text-right text-[13px]"> finndrawan</p></a>
      </div>
      </div>
      </paragraph>
    </div>
    </>
  );
};
export default Aboutme;
