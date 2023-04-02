

function Dots({ activeIndex, onclick,  homePageSlideImages }) {
  return (
    <div className="all-dots">
      { homePageSlideImages.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;