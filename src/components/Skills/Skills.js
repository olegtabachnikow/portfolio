import React from "react";
import "./Skills.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__text-box">
        <h2 className="skills__title">Let me tell you about my work. This is a shortlist of my skills</h2>
      </div>
      <div className="skills__box">
        <ProgressBar name="ReactJS" value={70}/>
        <ProgressBar name="NodeJS" value={40}/>
        <ProgressBar name="Express" value={50}/>
        <ProgressBar name="MongoDB" value={50}/>
        <ProgressBar name="HTML/HTML5" value={80}/>
        <ProgressBar name="CSS" value={80}/>
        <ProgressBar name="JavaScript" value={65}/>
      </div>
    </div>
  );
}

export default Skills;
