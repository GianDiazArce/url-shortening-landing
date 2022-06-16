import { useState } from "react";
import { CustomMenuHamburguer } from "../../custom";
import { Logo } from "../../svg";
import "./navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((oldState) => !oldState);
  };

  return (
    <nav className="nav">
      <Logo variant="dark" className="nav__image" />
      <div className="nav__menubtn">
        <CustomMenuHamburguer isOpen={isOpen} onClick={handleClick} />
      </div>
      {/* Menu must measure 325px or maxwidth */}
      <ul className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Resources
          </a>
        </li>
        {/* divider */}
        <div className="nav__divider" />
        <li className="nav__item">
          <a href="#" className="nav__link">
            Login
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="btn nav__link">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};
