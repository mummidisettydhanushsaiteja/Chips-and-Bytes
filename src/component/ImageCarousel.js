import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png'
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fullscreen-carousel">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-bg ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
