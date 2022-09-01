import React from "react";
import "./SocialLink.css";

function SocialLink({ image, alt, link }) {
  const [isHovered, setIsHoverede] = React.useState(false);
  return (
    <a
      className={`about__social-link ${isHovered && "about__social-link_active"}`}
      onMouseEnter={() => setIsHoverede(true)}
      onMouseLeave={() => setIsHoverede(false)}
      href={link}
      target="blank"
    >
      <img className="about__social-icon" src={image} alt={alt} />
    </a>
  );
}
export default SocialLink;
