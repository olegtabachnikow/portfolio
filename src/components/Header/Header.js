import React from "react";
import "./Header.css";
import logoBlack from "../../images/logo.png";
import logoWhite from "../../images/logoWhite.png";
import { Link } from "react-scroll";

function Header({ isBlack, children }) {
  return (
    <header className={`header ${isBlack ? "header_white" : null}`}>
      <Link smooth spy to="main">
        <div className="header__logo-wrapper">
          <img
            className="header__logo"
            src={isBlack ? logoBlack : logoWhite}
            alt="my logo"
          />
        </div>
      </Link>
      {children}
    </header>
  );
}
export default Header;
