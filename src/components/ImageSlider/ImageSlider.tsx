import React, { useEffect, useRef, useState } from "react";
import hotelPhoto1 from "../../assets/Image1.png";
import hotelPhoto2 from "../../assets/Image2.png";
import hotelPhoto3 from "../../assets/Image3.avif";

import "./ImageSlider.scss";
const colors = [hotelPhoto1, hotelPhoto2, hotelPhoto3];
const delay = 2500;

const ImageSlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="w-90">
      <div className="slideshow rounded-xl">
        <div
          className="slideshowSlider h-[80vh] "
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((src, index) => (
            <img className="slide h-full" key={index} src={src} alt={src} />
          ))}
        </div>

        <div className="slideshowDots sticky bottom-12 ">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
