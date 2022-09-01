import React from "react";
import "./NavLink.css";
import { Link } from "react-scroll";

function NavLink({ text, isBlack, scrollTarget }) {
  return (
    <Link
      smooth
      spy
      to={scrollTarget}
      className={`nav-link ${isBlack && "nav-link_black"}`}
    >
      {text}
    </Link>
  );
}
export default NavLink;
