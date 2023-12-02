import React from "react";
import ColorContext from "../contexts/ColorContext";
import infoStyle from "./InfoBox.module.css";
import { useContext } from "react";

function InfoBox() {
  const { secondaryColor, textColor } = useContext(ColorContext);
  return (
    <>
      <div
        className={`container ${infoStyle["info-content"]}`}
        id="info"
        style={{ background: `${secondaryColor}` }}
      >
        <div className={infoStyle["left-container"]}>
          <h3 style={{ color: `${textColor}` }}>How Does it Work?</h3>
          <h5 style={{ color: `${textColor}` }}>
            Get your personalized color palette in 4 steps.
          </h5>
        </div>
        <div className={infoStyle["right-container"]}>
          <p style={{ color: `${textColor}` }}>
            {" "}
            Start with two neutral colors for the text and the background.
          </p>
          <p style={{ color: `${textColor}` }}>
            {" "}
            Choose your primary and secondary colors. Primary is for main CTAs
            and sections, and Secondary is for less important buttons and info
            cards.
          </p>
          <p style={{ color: `${textColor}` }}>
            {" "}
            Accent color is an additional color. It appears in images,
            highlights, hyperlinks, boxes, cards, etc.
          </p>
          <p style={{ color: `${textColor}` }}>
            Happy with the results? Press on “Export” and choose among different
            options to export in various formats, like .zip, .png, CSS, SCSS, QR
            Code, and more.
          </p>
        </div>
      </div>
    </>
  );
}

export default InfoBox;
