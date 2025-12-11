import { useState } from 'react';
import './HeroSection.modules.scss'
import HeroSlider from './HeroSlider';


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

  </section>;
};

export default HeroSection;
