import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Enable center mode
    centerPadding: '0', // Set the center padding to 0
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="curved-carousel-container">
        <Slider {...settings}>
          <div>
            <img
              src="./city1.jpeg"
              alt="airpangea"
              className={`slides imgcarousel ${currentSlide !== 0 ? 'dimmed' : 'active'}`}
            />
          </div>
          <div>
            <img
              src="./city2.jpeg"
              alt="city"
              className={`slides imgcarousel ${currentSlide !== 1 ? 'dimmed' : 'active'}`}
            />
          </div>
          <div>
            <img
              src="./city3.jpeg"
              alt="citygboy"
              className={`slides imgcarousel ${currentSlide !== 2 ? 'dimmed' : 'active'}`}
            />
          </div>
          <div>
            <img
              src="./city4.jpeg"
              alt="citygboy"
              className={`slides imgcarousel ${currentSlide !== 3 ? 'dimmed' : 'active'}`}
            />
          </div>
          <div>
            <img
              src="./city5.jpeg"
              alt="citygboy"
              className={`slides imgcarousel ${currentSlide !== 4 ? 'dimmed' : 'active'}`}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
