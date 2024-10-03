import React, {useEffect, useState} from 'react';
import { Link, Element } from 'react-scroll';
import Navbar from '../components/layout/Navbar';
import Header from '../components/Header';


const Myport = () => {
  const [isScrolling, setScrolling] = useState(false);
  
 useEffect(() => {
    const scrollHandler = () => {
      document.body.classList.add('heavy-scroll');
      setTimeout(() => {
        document.body.classList.remove('heavy-scroll');
      }, 1000);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <>
      <div className='overflow-hidden slow-scroll'>
      <Element name='section1' className='element'>
        <Navbar>
          <Header />
        </Navbar>
        </Element>

      </div>
    </>
  );
};

export default Myport;
