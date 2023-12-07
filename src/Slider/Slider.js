import React, { useRef, useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Slider.css';

function Slider() {
  const elementRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  const imageUrls = [
    'https://m.media-amazon.com/images/S/pv-target-images/a87d06544ac25a6f4819448b4229de088571a102b511b0bae80493da9bf8e01f.jpg',
    'https://images.ottplay.com/images/3d09e75def807f526d484e416e4543a0.jpg',
    'https://wallpapercave.com/wp/wp12176675.jpg',
    'https://cutewallpaper.org/22/money-heist-season-1-wallpapers/83735611.jpg',
    'https://i.ytimg.com/vi/sTJfJoaZrCw/maxresdefault.jpg',
    'https://www.koimoi.com/wp-content/new-galleries/2023/04/the-kapil-sharma-show-is-going-to-end-very-soon-once-again-are-makers-pulling-the-plug-of-the-comedy-show-01.jpg',
    'https://wallpapers.com/images/featured/the-boys-1fe3hnl120ch1bc6.jpg',
  ];


  const slideRight = () => {
    setScrolling(false);
    elementRef.current.scrollLeft += 1000;
  };

  const slideLeft = () => {
    setScrolling(false);
    elementRef.current.scrollLeft -= 1500;
  };

  useEffect(() => {
    if (scrolling) {
      const interval = setInterval(() => {
        if (imageContainerRef.current) {
          imageContainerRef.current.scrollLeft += 1; // Adjust the scrolling speed if needed
        }
      }, 50); // Adjust the interval if needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrolling]);

  return (
    <div className="slider-container">
      <ArrowBackIosNewIcon fontSize="large"
        onClick={slideLeft}
        className="slider-icon left"
      />

      <div
        className="image-container"
        ref={(el) => {
          elementRef.current = el;
          imageContainerRef.current = el;
        }}
        onMouseEnter={() => setScrolling(false)}
        onMouseLeave={() => setScrolling(true)}
      >
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`${index}`}
            className='w-[110px] md:w-[200px] rounded-lg
            hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in slide-img'
          />

        ))}
      </div>

      <ArrowForwardIosIcon fontSize="large"
        onClick={slideRight}
        className="slider-icon right"
      />
    </div>
  );
}

export default Slider;