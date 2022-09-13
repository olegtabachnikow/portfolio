import React from "react";
import "./Navigation.css";
import NavLink from "../NavLink/NavLink";

function Navigation({ isBlack }) {
  return (
    <nav className="navigation">
      <NavLink text="Projects" isBlack={isBlack} scrollTarget="projects" />
      <NavLink text="About me" isBlack={isBlack} scrollTarget="about" />
      <NavLink text="Contacts" isBlack={isBlack} scrollTarget="contacts" />
    </nav>
  );
}
export default Navigation;
