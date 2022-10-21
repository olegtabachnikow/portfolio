import React from "react";
import "./NavLink.css";
import { Link } from "react-scroll";
import cvIcon from "../../images/cv.svg";

function NavLink({ text, isBlack, scrollTarget }) {
  return (
    <>
      {text ? (
        <Link
          download={!text ? true : false}
          smooth
          spy
          to={scrollTarget}
          className={`nav-link ${isBlack && "nav-link_black"}`}
        >
          {text}
        </Link>
      ) : (
        <a
          href="https://github.com/Eskel4ik/portfolio/raw/gh-pages/OlegTabachnikowCV.pdf"
          download
          className={`nav-link ${isBlack && "nav-link_black"}`}
        >
          <img
            className={`nav-link__icon ${isBlack && "nav-link__icon_white"}`}
            alt="cv"
            src={cvIcon}
          />
        </a>
      )}
    </>
  );
}
export default NavLink;
