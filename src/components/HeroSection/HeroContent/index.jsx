import "./HeroContent.modules.scss";
import { slidesContent } from "./data";

const HeroContent = ({indexSlider}) => {

  const currentSlide = slidesContent[indexSlider - 1];
    
  return (
    <section className="hero-content container-padding">
       <h1 className="hero-title">{currentSlide?.title}</h1>
      <p className="hero-description">{currentSlide?.description}</p>

        <button className="btn text-preset-4">SHOP NOW
            <img src=".\assets\images\icon-arrow.svg" alt="imagem de uma seta para a direita." />
        </button>
    </section>
  );
};

export default HeroContent;
