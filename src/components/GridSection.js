import React from "react";
import ColorContext from "../contexts/ColorContext";
import gridStyle from "./GridSection.module.css";
import { useContext } from "react";

function WhyBox() {
  const {
    backgroundColor,
    primaryColor,
    secondaryColor,
    textColor,
    accentColor,
  } = useContext(ColorContext);
  return (
    <>
      <div className={`container ${gridStyle["grid-container"]}`}>
        <ul className={gridStyle["grid-wrapper"]}>
          <li
            className={gridStyle["grid-box"]}
            style={{
              background: `${primaryColor}`,
              color: `${textColor}`,
            }}
          >
            <h2>200k users</h2>
            <span>and counting...</span>
          </li>
          <li
            className={gridStyle["grid-box"]}
            style={{ background: `${secondaryColor}`, color: `${textColor}` }}
          >
            <h3>100% Free!</h3>
            <span>forever </span>
          </li>
          <li
            className={gridStyle["grid-box"]}
            style={{ background: `${textColor}`, color: `${backgroundColor}` }}
          >
            <h4>11K+ Plugin Users</h4>
            <span>Check it out on figma</span>
          </li>
          <li
            className={gridStyle["grid-box"]}
            style={{
              background: `${accentColor}`,
              color: `${backgroundColor}`,
            }}
          >
            <h4>200+ ProductHunt Upvotes</h4>
            <span>Leave a review</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default WhyBox;
