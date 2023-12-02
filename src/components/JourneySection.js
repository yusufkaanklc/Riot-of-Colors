import React, { useContext } from "react";
import JourneyStyle from "./JourneySection.module.css";
import ColorContext from "../contexts/ColorContext";
function JourneySection() {
  const { primaryColor, accentColor, textColor } = useContext(ColorContext);
  return (
    <>
      <div
        className={`container ${JourneyStyle["journey-container"]}`}
        style={{ color: `${textColor}` }}
      >
        <h2>
          Your{" "}
          <span
            style={{
              background: `linear-gradient(120deg,${primaryColor}, ${accentColor})`,
            }}
          >
            Journey
          </span>{" "}
          Shouldn't End Here.
        </h2>
        <h5>Follow me on social media to stay tuned on more projects.</h5>
        <button
          className={`btn ${JourneyStyle["btn"]}`}
          style={{ background: `${primaryColor}` }}
        >
          Stay Tuned
        </button>
      </div>
    </>
  );
}

export default JourneySection;
