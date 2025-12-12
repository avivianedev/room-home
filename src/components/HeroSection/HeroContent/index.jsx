import "./HeroContent.modules.scss";
import data from "./data.json" 

const HeroContent = ({indexSlider}) => {
    
  return (
    <section className="hero-content container-padding">
       <h1 className="hero-title">{data[indexSlider].title}</h1>
      <p className="hero-description">{data[indexSlider].description}</p>

        <button className="btn text-preset-4">SHOP NOW
            <img src=".\assets\images\icon-arrow.svg" alt="" />
        </button>
    </section>
  );
};

export default HeroContent;
