import React from "react";
import "./Card.css";

function Card({ name, link, gitLink, description, preview, isWebsiteAllowed }) {
  const [isHovered, setIsHovered] = React.useState(false);
  function enableHover() {
    setIsHovered(true);
  }
  function disableHover() {
    setIsHovered(false);
  }
  return (
    <div className="card" onMouseEnter={enableHover} onMouseLeave={disableHover}>
      <div className="card__image-wrapper">
        <img className={`card__image ${isHovered && 'card__image_hovered'}`} src={preview} alt={`${name} preview `} />
        <div className={`card__image-overlay ${isHovered && 'card__image-overlay_hidden'}`}>
          <p className="card__description">{description}</p>
          <div className="card__link-box">
          {isWebsiteAllowed && link ? <a className="card__link" href={link} target="blank">
            Visit website
          </a> : null}
          {gitLink ? <a className="card__link" href={gitLink} target="blank">
            GitHub
          </a> : null}
          </div>
        </div>
      </div>
      <h2 className={`card__title ${isHovered && 'card__title_hidden'}`}>{name}</h2>
    </div>
  );
}

export default Card;
