import SliderControls from "../../SliderControls";
import "./HeroSlider.modules.scss";

const HeroSlider = ({indexSlider, handlePrev, handleNext}) => {
  return (
    <section className="hero-slider">
      <img
        src={`/assets/images/hero-mobile_0${indexSlider}.png`}
        alt=""
        className="hero-image mobile"
      />

      <img
        src={`/assets/images/hero-tablet_0${indexSlider}.png`}
        alt=""
        className="hero-image tablet"
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
