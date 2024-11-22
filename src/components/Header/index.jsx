import { useState } from "react";
import "./Header.modules.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";



const Header = () => {

    const [showmenu, SetShowMenu] = useState(false)

    const showResponsiveMenu = (event) => {
        event.preventDefault();
        SetShowMenu(!showmenu)
    }
    return (
        <header className={showmenu ? "header-wrapper bg-header" : "header-wrapper"}>
            {showmenu ? <MdOutlineClose onClick={showResponsiveMenu} className="menu-responsive-hamburger close" />
                :
                <GiHamburgerMenu onClick={showResponsiveMenu} className="menu-responsive-hamburger" />
            }

            <h1 className={showmenu ? "logo show-menu-responsive" : "logo"}>room</h1>

            <ul className={showmenu ? "nav-list show-menu-responsive" : "nav-list"}>
                <li className="nav-list-item"><a href="">home<hr className="hover-navlink" /></a></li>
                <li className="nav-list-item"><a href="">shop<hr className="hover-navlink" /></a></li>
                <li className="nav-list-item"><a href="">about<hr className="hover-navlink" /></a></li>
                <li className="nav-list-item"><a href="">contact<hr className="hover-navlink" /></a></li>
            </ul>
        </header>
    )
}

export default Header