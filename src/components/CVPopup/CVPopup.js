import React from "react";
import cvImage from "../../images/OlegTabachnikowCV.png";
import closeIcon from "../../images/closeIcon.png";
import "./CVPopup.css";

function CVPopup({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__content">
        <button onClick={onClose} className="popup__close-button" type="button">
          <img className="popup__close-icon" alt="close" src={closeIcon} />
        </button>
        <figure className="popup__cv-wrapper">
          <img className="popup__cv" src={cvImage} alt="my CV" />
        </figure>
      </div>
      <a
        className="popup__download-link"
        href="../../../public/OlegTabachnikowCV.pdf"
        download
      >
        DOWNLOAD
      </a>
    </div>
  );
}
export default CVPopup;
