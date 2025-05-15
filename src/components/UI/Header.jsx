import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleNavToggle = () => {
    return setShow(!show);
  };
  return (
    <header>
      <div className="container">
        <div className="navbar_content">
          <NavLink className="nav_link" to="/">
            <div className="logo">WorldAltas</div>
          </NavLink>
          <ul className={show ? "menu_mobile" : "nav_links"}>
            <li>
              <NavLink className="nav_link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/country">
                Country
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="hamburger">
            <i onClick={handleNavToggle}>
              <GiHamburgerMenu />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
