import { useState } from "react";
import "./Header.modules.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const showResponsiveMenu = (event) => {
    event.preventDefault();
    setShowMenuMobile(!showMenuMobile);
    
  };


  return (
    <header
      className="header-wrapper"
    >        
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
            <a href="">
              home
              <hr className="hover-navlink"  />
            </a>
          </li>
          <li className="nav-list-item">
            <a href="">
              shop
              <hr className="hover-navlink"  />
            </a>
          </li>
          <li className="nav-list-item">
            <a href="">
              about
              <hr className="hover-navlink" />
            </a>
          </li>
          <li className="nav-list-item">
            <a href="">
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
