import React, { useState} from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import Footerbg from "./Footerbg";
import Footer from "./Footer";
import ReactPlayer from 'react-player'; 
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import '../Header.css'
export const Navbar = ({ children }) => {
  const [url, setUrl] = useState('./music/OFTG.mp3');
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [played, setPlayed] = useState(0);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleProgress = (progress) => {
    setPlayed(progress.played);
  };

  return (
    <>
    <div className={`${playing ? 'party-mode' : 'Play'}`}>
      <nav class="flex justify-betwee bg-transparent w-screen" >
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <a class="text-xl font-bold font-heading" href="#">
            {/* <img class="h-9" src="logo.png" alt="logo">  */}
            Giprofile 3.4
          </a>

          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"></ul>

          <div class="hidden xl:flex items-center space-x-5">
            
          <ReactPlayer
        url={url}
        playing={playing}
        volume={volume}
        onProgress={handleProgress}
        width={null}
        height={null}
      />
      <button onClick={handlePlayPause}>{playing ? <FaPause/> : <FaPlay/>}</button>
      <input
        type="range"
        min={0}
        max={1}
        step="any"
        value={played}
        onChange={() => {}}
        style={{ width: '100%' }}
      />
      <br />
      
            <a class="hover:text-gray-200" href="#">
              <FaGithubAlt size={20} />
            </a>
            <a class="flex items-center hover:text-gray-200" href="#">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <a class="xl:hidden flex mr-6 items-center" href="#">
          <span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </a>
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
      <div className={`container mx-auto px-4 `}>{children}</div>

      <footer classname="container mt-56">
        <Footer />
      </footer>
      </div>
    </>
  );
};
export default Navbar;
