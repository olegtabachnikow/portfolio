import React from "react";
import "./About.css";
import SocialLink from "../SocialLink/SocialLink";
import coderImg from "../../images/coder.svg";
import githubIcon from "../../images/github-logo.svg";
import linkedInIcon from "../../images/linkedin-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";
import gmailIcon from "../../images/gmail-icon.svg";
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
            I am Oleg, frontend oriented Full Stack Web Developer, i was
            deployed on Earth 30 years ago ;) For now, my server located in Tel
            Aviv. I am new user of this country (repatriant), since april 2021,
            and now looking for my new career oportunity and a new team.
          </p>
          <p className="about__text">
            You can reach more information about me in my CV. Click on the
            monitor in the picture for preview or{" "}
            <a
              className="about__link-cv"
              href="../../../public/OlegTabachnikowCV.pdf"
              download={true}
            >
              download
            </a>{" "}
            it!
          </p>
        </div>
      </div>
      <div className="about__social">
        <h3>You can also reach me in social</h3>
        <div className="about__social-link-list">
          <SocialLink
            image={linkedInIcon}
            alt="LinkedIn"
            link="https://www.linkedin.com/in/olegtabachnikow/"
          />
          <SocialLink
            image={facebookIcon}
            alt="Facebook"
            link="https://www.facebook.com/eskel4ik"
          />
          <SocialLink
            image={githubIcon}
            alt="GitHub"
            link="https://github.com/Eskel4ik"
          />
          <SocialLink
            image={gmailIcon}
            alt="Gmail"
            link="mailto:eskelll4ik@gmail.com"
          />
        </div>
      </div>
      <div className="about__footer">
        <h4>
          Created by me &copy; Oleg Tabachnikow, {new Date().getFullYear()}
        </h4>
      </div>
    </section>
  );
}
export default About;
