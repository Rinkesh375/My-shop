import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import  homePageSlideImages from "./sliderImages";
import "./slider.css";

const len =  homePageSlideImages.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <div className="slider-container"  >
      <SliderContent activeIndex={activeIndex}  homePageSlideImages={ homePageSlideImages} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
         homePageSlideImages={ homePageSlideImages}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
    <div className="downloadAppContainer">
      <img className="downloadAppImage" style={{width:"100%"}} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678881030_1280x272-web-1.jpg" alt="Download App" />
    </div>
    </>
  
  );
}

export default Slider;