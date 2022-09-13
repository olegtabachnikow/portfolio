import React from "react";
import "./Contacts.css";
import SocialLink from "../SocialLink/SocialLink";
import githubIcon from "../../images/github-logo.svg";
import linkedInIcon from "../../images/linkedin-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";
import gmailIcon from "../../images/gmail-icon.svg";
import Form from "../Form/Form";

function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <h2 className="contacts__title">Contact me</h2>
      <div className="contacts__content">
        <Form />
      </div>
      <div className="contacts__social">
        <h3>You can also reach me in social</h3>
        <div className="contacts__social-link-list">
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
        <h4>
          Created by me &copy; Oleg Tabachnikow, {new Date().getFullYear()}
        </h4>
      </div>
    </div>
  );
}
export default Contacts;
