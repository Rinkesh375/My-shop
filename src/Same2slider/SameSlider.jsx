import Arrows from "../sliders/Arrows";
import { useState,useEffect } from "react";
import SliderContent from "../sliders/SliderContent";
import Dots from "../sliders/Dots";
import  homePageSlideImages from "./sameSliderImages";
const len =  homePageSlideImages.length - 1;
const SameSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);
    return (
        <>
            <div className="slider-container" style={{display:"flex"}}>
                <SliderContent activeIndex={activeIndex}  homePageSlideImages={homePageSlideImages} />
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
                    homePageSlideImages={homePageSlideImages}
                    onclick={(activeIndex) => setActiveIndex(activeIndex)}
                />
            </div>
        </>
    )
}

export default SameSlider


