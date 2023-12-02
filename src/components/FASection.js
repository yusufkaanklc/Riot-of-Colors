import React, { useContext } from "react";
import FAStyle from "./FASection.module.css";
import ColorContext from "../contexts/ColorContext";

function FASection() {
  const { primaryColorForBg, textColor } = useContext(ColorContext);
  return (
    <>
      <div
        className={`container ${FAStyle["fa-container"]}`}
        style={{ color: `${textColor}` }}
      >
        <div className={FAStyle["fa-header"]}>
          <h2>Featured Articles</h2>
          <h5> some interesting guides and posts.</h5>
        </div>
        <div className={FAStyle["fa-button-group"]}>
          {/** button group orjinalde = section-cards ın css i ver */}
          <button
            className={`btn ${FAStyle["btn"]}`}
            style={{ background: `${primaryColorForBg}` }}
          >
            Examples of Colors from Popular Sites
          </button>
          <button
            className={`btn ${FAStyle["btn"]}`}
            style={{ background: `${primaryColorForBg}` }}
          >
            How to Select Colors
          </button>
          <button
            className={`btn ${FAStyle["btn"]}`}
            style={{ background: `${primaryColorForBg}` }}
          >
            Learn More about the Releases
          </button>
        </div>
      </div>
    </>
  );
}

export default FASection;
