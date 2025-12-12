import { useState } from 'react';
import './HeroSection.modules.scss'
import HeroSlider from './HeroSlider';
import HeroContent from './HeroContent';


const HeroSection = () => {
  const [indexSlider, setIndexSlider] = useState(1);

  const handlePrev = () => {
    setIndexSlider((prev) => (prev === 1 ? 3 : prev - 1));
  };

  const handleNext = () => {
    setIndexSlider((prev) => (prev === 3 ? 1 : prev + 1));
  };

 

  return <section className="hero-section-container">

  <HeroSlider 
  indexSlider={indexSlider}
  handlePrev={handlePrev}
  handleNext={handleNext}
  />

  <HeroContent
  indexSlider={indexSlider}
  />

  </section>;
};

export default HeroSection;
