import React from "react";
import "./ProgressBar.css";

function ProgressBar({ name, value }) {
const progressBarStyle = {
    height: "100%",
    width: `${value}%`
}
  return (
    <div className="progress-bar">
      <p className="progress-bar__name">{name}</p>
      <div className="progress-bar__bar">
        <div className="progress-bar__bar-filled" style={progressBarStyle}></div>
      </div>
    </div>
  );
}
export default ProgressBar;
