import { useState } from "react";
import "./Header.modules.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import logo from "/assets/images/logo.svg"

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
 
   const showResponsiveMenu = (event) => {
    event.preventDefault();
    setShowMenuMobile(!showMenuMobile);
  };
  
  return (
    <header className="header-wrapper">
      
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

      <img className={showMenuMobile ? "invisible" : "logo"} alt="Logo da página" src={logo}/>

      <nav className={showMenuMobile ? "navigation-menu visible" : "navigation-menu invisible"}>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="#">
              home
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="#">
              shop
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="#">
              about
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a className="text-preset-3-semi-bold" href="#">
              contact
              <hr className="hover-navlink" />
            </a>
          </li>
        </ul>
      </nav>      
    </header>
  );
};

export default Header;
