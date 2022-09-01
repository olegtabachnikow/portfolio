import React from "react";
import "./Main.css";
import myPhoto from "../../images/me.png";
import pixeGlasses from "../../images/pixel-glasses.png";

function Main() {
  const [isTitleTyping, setIsTitleTyping] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsTitleTyping(false);
    }, 4500);
  }, []);
  function toggleHover() {
    setIsHovered(state => !state);
  }
  return (
    <section id="main" className="main">
      <div onMouseEnter={toggleHover} onMouseLeave={toggleHover} className="main__image-wrapper">
        <img
          className="main__pixel-glasses"
          alt="pixel glasses"
          src={pixeGlasses}
        />
        <img className="main__image" src={myPhoto} alt="Oleg Tabachnikow" />
        <div className={`main__letter ${isHovered && 'main__letter-n'}`}><p className="main__letter_inner">N</p></div>
        <div className={`main__letter ${isHovered && 'main__letter-r'}`}><p className="main__letter_inner">R</p></div>
        <div className={`main__letter ${isHovered && 'main__letter-e'}`}><p className="main__letter_inner">E</p></div>
       <div className={`main__letter ${isHovered && 'main__letter-m'}`}><p className="main__letter_inner">M</p></div>
      </div>
      <div className="main__text-container">
        <h1 className={`main__title ${!isTitleTyping && "text-done"}`}>
          Hi! I'm Oleg.
        </h1>
        <h2
          className={`main__subtitle ${
            !isTitleTyping && "main__subtitle_active"
          }`}
        >
          A passionate Web Developer from Tel Aviv ;)
        </h2>
      </div>
    </section>
  );
}
export default Main;
