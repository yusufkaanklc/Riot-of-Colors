import React, { useContext, useState, useEffect } from "react";
import IntroStyle from "./Intro.module.css";
import ColorContext from "../contexts/ColorContext";
function Intro() {
  const {
    backgroundColor,
    accentColor,
    primaryColor,
    textColor,
    secondaryColor,
  } = useContext(ColorContext);

  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`container ${IntroStyle["intro-container"]}`}>
        <div className={IntroStyle["text-stack"]}>
          {width < 430 ? "" : <br />}
          <div
            className={IntroStyle["new-template-text"]}
            style={{
              border: `1px solid ${secondaryColor}`,
              background: `linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), linear-gradient(90deg, ${secondaryColor}, ${secondaryColor})`,
              color: `${textColor}`,
            }}
          >
            {`🎉 New: Templates, Font randomization, and more →`}
          </div>
          <h1 className={IntroStyle["header-text"]}>
            <p style={{ color: `${textColor}` }}>Visualize Your</p>
            <p style={{ color: `${textColor}` }}>
              <span
                className={IntroStyle["gradient-text"]}
                style={{
                  background: `linear-gradient(120deg, ${primaryColor}, ${accentColor})`,
                }}
              >
                Colors{" "}
              </span>
              &
              <span
                className={IntroStyle["italic-text"]}
                style={{ "-webkit-text-stroke-color": `${textColor}` }}
              >
                {" "}
                Fonts
              </span>
            </p>
            <p style={{ color: `${textColor}` }}>On a Real Site</p>
          </h1>
          {width < 430 ? <br /> : ""}
          <div
            className={IntroStyle["sub-text"]}
            style={{ color: `${textColor}` }}
          >
            <p>Choosing colors or typography for your website?</p>
            <p>Use the Toolbar below to realize your choices.</p>
          </div>
          {width < 430 ? <br /> : ""}
          <div className={IntroStyle["button-group"]}>
            <button
              type="button"
              className="btn"
              style={{ background: `${secondaryColor}` }}
            >
              <a
                href="#info"
                style={{ color: `${textColor}`, textDecoration: "none" }}
              >
                How does it work?
              </a>
            </button>
            <button
              type="button"
              className="btn"
              style={{
                background: `${primaryColor}`,
                color: `${textColor}`,
                boxShadow: isHovered ? `0 5px 25px ${primaryColor}` : `none`,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
            </button>
          </div>
          {width < 430 ? <br /> : ""}
          {width < 430 ? <br /> : ""}
          <div
            className={IntroStyle["scroll-box"]}
            style={{ color: `${textColor}` }}
          >
            <i class="fi fi-rr-mouse"></i>
            <p>Scroll to see more sections</p>
          </div>
        </div>
        <div className={IntroStyle["grid-container"]}>
          <svg width="652" height="644" viewBox="0 0 652 644" fill="none">
            <rect
              opacity="0.05"
              x="1"
              width="163"
              height="60"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              x="424"
              width="193"
              height="60"
              rx="10"
              fill={secondaryColor}
            ></rect>
            <rect
              x="424"
              y="68"
              width="193"
              height="175"
              rx="10"
              fill={secondaryColor}
            ></rect>
            <rect
              opacity="0.2"
              x="424"
              y="401"
              width="193"
              height="79"
              rx="10"
              fill={primaryColor}
            ></rect>
            <rect
              x="255"
              y="626"
              width="362"
              height="18"
              rx="9"
              fill={backgroundColor}
            ></rect>
            <rect
              x="80"
              y="579"
              width="166"
              height="65"
              rx="10"
              fill={backgroundColor}
            ></rect>
            <rect
              x="255"
              y="579"
              width="160"
              height="40"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              opacity="0.05"
              x="255"
              y="490"
              width="160"
              height="80"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              opacity="0.05"
              x="255"
              y="400"
              width="160"
              height="80"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              x="80"
              y="68"
              width="335"
              height="324"
              rx="10"
              fill={primaryColor}
            ></rect>
            <rect
              x="80"
              y="401"
              width="166"
              height="169"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              x="424"
              y="490"
              width="193"
              height="129"
              rx="10"
              fill={accentColor}
            ></rect>
            <rect
              opacity="0.05"
              x="626"
              y="490"
              width="26"
              height="154"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              x="424"
              y="252"
              width="91"
              height="140"
              rx="10"
              fill={backgroundColor}
            ></rect>
            <rect
              x="524"
              y="252"
              width="93"
              height="140"
              rx="10"
              fill={backgroundColor}
            ></rect>
            <rect
              opacity="0.05"
              x="626"
              width="26"
              height="480"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              x="173"
              width="242"
              height="60"
              rx="10"
              fill={backgroundColor}
            ></rect>
            <rect
              x="1"
              y="68"
              width="70"
              height="157"
              rx="10"
              fill={backgroundColor}
            ></rect>
            <rect
              opacity="0.05"
              x="1"
              y="234"
              width="70"
              height="259"
              rx="10"
              fill={textColor}
            ></rect>
            <rect
              x="1"
              y="502"
              width="70"
              height="142"
              rx="10"
              fill={secondaryColor}
            ></rect>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Intro;
