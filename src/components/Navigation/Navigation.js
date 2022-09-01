import React from "react";
import "./Navigation.css";
import NavLink from "../NavLink/NavLink";

function Navigation({ isBlack }) {
  return (
    <nav className="navigation">
      <NavLink text="Home" isBlack={isBlack} scrollTarget="main" />
      <NavLink text="Projects" isBlack={isBlack} scrollTarget="projects" />
      <NavLink text="About me" isBlack={isBlack} scrollTarget="about" />
    </nav>
  );
}
export default Navigation;
