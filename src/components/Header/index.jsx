import { useState } from "react";
import "./Header.modules.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import SliderControls from "../SliderControls";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [indexSlider, setIndexSlider] = useState(1);

  const handlePrev = () => {
    setIndexSlider((prev) => (prev === 1 ? 3 : prev - 1))
  };

  const handleNext = () => {
    setIndexSlider((prev) => (prev === 3 ? 1 : prev + 1));
  };

  const showResponsiveMenu = (event) => {
    event.preventDefault();
    setShowMenuMobile(!showMenuMobile);
  };

  
  return (
    <header className="header-wrapper">
      <img
        src={`../../../public/assets/images/hero-mobile_0${indexSlider}.png`}
        alt=""
        className="hero-image"
      />
      {showMenuMobile ? (
        <MdOutlineClose
          onClick={showResponsiveMenu}
          className="icon-responsive-hamburger close"
        />
      ) : (
        <GiHamburgerMenu
          onClick={showResponsiveMenu}
          className="icon-responsive-hamburger"
        />
      )}

      <h1 className={showMenuMobile ? "invisible" : "logo"}>room</h1>

      <nav className={showMenuMobile ? "navigation-menu" : "invisible"}>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="">
              home
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="">
              shop
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="">
              about
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="">
              contact
              <hr className="hover-navlink" />
            </a>
          </li>
        </ul>
      </nav>

      <SliderControls 
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </header>
  );
};

export default Header;
