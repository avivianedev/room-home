import SliderControls from "../../SliderControls";
import "./HeroSlider.modules.scss";
import { slidesContent } from "../HeroContent/data";

const HeroSlider = ({indexSlider, handlePrev, handleNext}) => {
  const currentSlide = slidesContent  
  
  return (
    <section className="hero-slider-container">
      <img
        src={`/assets/images/hero-mobile_0${indexSlider}.png`}
        alt={currentSlide[indexSlider-1].alt}
        className="hero-image mobile"
      />

      <img
        src={`/assets/images/hero-tablet_0${indexSlider}.png`}
        alt={currentSlide[indexSlider-1].alt}
        className="hero-image tablet"
        hidden
      />

      <img
        src={`/assets/images/hero-desktop_0${indexSlider}.png`}
        alt={currentSlide[indexSlider-1].alt}
        className="hero-image desktop"
        hidden
      />

      <SliderControls 
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </section>
  );
};

export default HeroSlider;
