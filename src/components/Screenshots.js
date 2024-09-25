import React from "react";
import screenshot1 from "../screenshot1.png";
import screenshot2 from "../screenshot2.png";
import screenshot3 from "../screenshot3.png";
import screenshot4 from "../screenshot4.png";
import screenshot5 from "../screenshot5.png";
import screenshot6 from "../screenshot6.png";
import "./Screenshots.css";

const Screenshots = () => {
  return (
    <div className="Screenshots-container">
      <h1>App Screenshots</h1>
      <p className="Screenshots-description">
        Take a closer look at Linguico's features for learning vocabulary and
        practicing grammar.
      </p>
      <div className="Screenshots-grid">
        <img src={screenshot1} alt="Screenshot 1" className="Screenshot" />
        <img src={screenshot2} alt="Screenshot 2" className="Screenshot" />
        <img src={screenshot3} alt="Screenshot 3" className="Screenshot" />
        <img src={screenshot4} alt="Screenshot 4" className="Screenshot" />
        <img src={screenshot5} alt="Screenshot 5" className="Screenshot" />
        <img src={screenshot6} alt="Screenshot 6" className="Screenshot" />
      </div>
    </div>
  );
};

export default Screenshots;
