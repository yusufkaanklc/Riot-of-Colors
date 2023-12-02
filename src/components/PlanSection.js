import React from "react";
import ColorContext from "../contexts/ColorContext";
import planStyle from "./PlanSection.module.css";
import { useContext } from "react";

function PlanSection() {
  const {
    primaryColor,
    secondaryColor,
    textColor,
    accentColor,
    primaryColorForBg,
    secondaryColorForBg,
  } = useContext(ColorContext);
  return (
    <>
      <div className={`container ${planStyle["plan-content"]}`}>
        <div className={planStyle["plan-header"]}>
          <h2 style={{ color: `${textColor}` }}>Plans & Pricing</h2>
          <h5 style={{ color: `${textColor}` }}>
            The tool is 100% free! This is just a generic section.
          </h5>
        </div>
        <div className={planStyle["pricing-card"]}>
          <div
            className={planStyle["card"]}
            style={{
              background: `${secondaryColorForBg}`,
            }}
          >
            <div className={planStyle["text"]}>
              <h4 style={{ color: `${textColor}` }}>Basic</h4>
              <p style={{ color: `${textColor}` }}>Free</p>
              <div className={planStyle["pricing-list"]}>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>Choose any color</p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>Export all you want</p>
                </div>
              </div>
            </div>
            <button
              className={`btn ${planStyle["btn"]}`}
              style={{ background: `${primaryColor}`, color: `${textColor}` }}
            >
              Get a started
            </button>
          </div>
          <div
            className={planStyle["card"]}
            style={{
              background: `${primaryColorForBg}`,
            }}
          >
            <div className={planStyle["text"]}>
              <h4 style={{ color: `${textColor}` }}>Pro</h4>
              <p style={{ color: `${textColor}` }}>$0.00 / month</p>
              <div className={planStyle["pricing-list"]}>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>Choose any color</p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>Export all you want</p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>
                    Get a big thank you for checking this site out
                  </p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>
                    Get access to dashboard
                  </p>
                </div>
              </div>
            </div>
            <button
              className={`btn ${planStyle["btn"]}`}
              style={{ background: `${accentColor}`, color: `${textColor}` }}
            >
              Get a started
            </button>
          </div>
          <div
            className={planStyle["card"]}
            style={{
              background: `${secondaryColorForBg}`,
            }}
          >
            <div className={planStyle["text"]}>
              <h4 style={{ color: `${textColor}` }}>Enterprise</h4>
              <p style={{ color: `${textColor}` }}>$0.00 / month</p>
              <div className={planStyle["pricing-list"]}>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>Choose any color</p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>Export all you want</p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>
                    Get a big thank you for checking this site out
                  </p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>
                    Get access to dashboard
                  </p>
                </div>
                <div className={planStyle["list"]}>
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none">
                    <path
                      d="M3 9.72308L11.1385 17.8615L26 3"
                      stroke={accentColor}
                      stroke-width="5.66154"
                    ></path>
                  </svg>
                  <p style={{ color: `${textColor}` }}>
                    Super duper exclusive members-only content.
                  </p>
                </div>
              </div>
            </div>
            <button
              className={`btn ${planStyle["btn"]}`}
              style={{ background: `${primaryColor}`, color: `${textColor}` }}
            >
              Get a started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanSection;
