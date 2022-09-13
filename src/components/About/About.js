import React from "react";
import "./About.css";
import coderImg from "../../images/coder.svg";
import myCV from "../../images/OlegTabachnikowCV.png";

function About({ onOpen }) {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__image-box-outer">
          <div className="about__image-box">
            <img
              className="about__image"
              src={coderImg}
              alt="vector pic of coder with pc"
            />
            <img onClick={onOpen} className="about__cv" src={myCV} alt="cv" />
          </div>
        </div>
        <div className="about__text-container">
          <h2 className="about__title">A few words about me</h2>
          <p className="about__text">
            I am Oleg, a frontend oriented Full Stack Web Developer, I was
            deployed on Earth 30 years ago ;) For now, I'm hosted in Tel
            Aviv. I am a new user of this country (Ole Hadash), since april 2021,
            now looking for my next career oportunity and a new team.
          </p>
          <p className="about__text">
            You can read more information about me in my CV. Click on the
            monitor in the picture for preview or{" "}
            <a
              className="about__link-cv"
              href="https://github.com/Eskel4ik/portfolio/raw/gh-pages/OlegTabachnikowCV.pdf"
              download={true}
            >
              download
            </a>{" "}
            it!
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
