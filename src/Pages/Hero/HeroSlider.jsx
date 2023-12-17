// HeroSlider.js
import React, { useEffect, useState } from "react";
import "./Hero.css"; // Import the CSS file for styling
import first from "../../assets/licensed-image.png";
import second from "../../assets/assets/Loaders/One.jpg";
import third from "../../assets/assets/Loaders/three.jpg";
import four from "../../assets/assets/Loaders/eight.jpg";
import six from "../../assets/assets/Loaders/six.jpg";

const HeroSlider = () => {
  const images = [first];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="hero-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          ></div>
        ))}
      </div>
      <div className="caption">
        <h1 className="bold-caption">Let's Make Iconic Memories</h1>
        <p>
          Get creative projects done with high-quality digital assets and
          resources.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
