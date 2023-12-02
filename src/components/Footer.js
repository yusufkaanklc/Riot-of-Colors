import React, { useContext } from "react";
import FooterStyle from "./Footer.module.css";
import ColorContext from "../contexts/ColorContext";
function Footer() {
  const { textColor, secondaryColor } = useContext(ColorContext);

  return (
    <>
      <div
        className={`container ${FooterStyle["footer-container"]}`}
        style={{ color: `${textColor}`, background: `${secondaryColor}` }}
      >
        <span>
          Made with by <b>Yusuf Kağan Kılıç</b>
        </span>
        <div>
          <span>The design was referenced from </span>
          <span>
            <b>
              <a
                href="https://www.realtimecolors.com/"
                target="blank"
                style={{
                  color: `${textColor}`,
                }}
              >
                www.realtimecolors.com
              </a>
            </b>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
