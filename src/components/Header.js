/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import headerStyles from "./Header.module.css";
import ColorContext from "../contexts/ColorContext";

function Header() {
  const { textColor, backgroundColor } = useContext(ColorContext);

  const [isNavIconClicked, setIsNavIconClicked] = useState(false);
  console.log(isNavIconClicked);

  const handleNavIconClicked = () => {
    setIsNavIconClicked(!isNavIconClicked);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  ${headerStyles["header-fixed"]}`}
        style={{ background: `${backgroundColor}` }}
      >
        <div className="container header-container align-items-center py-1">
          <a
            href="#"
            className={`navbar-brand ${headerStyles["navbar-brand-css"]} fs-6 fw-bold`}
            style={{ color: `${textColor}` }}
          >
            Riot of Colors
          </a>
          <button
            className={`navbar-toggler ${headerStyles["navbar-toggler-css"]}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavIconClicked}
          >
            <span>
              <div
                className={`${headerStyles["menu-icon-line"]} ${
                  isNavIconClicked ? headerStyles["clicked"] : ""
                }`}
              ></div>
              <div
                className={`${headerStyles["menu-icon-line"]} ${
                  isNavIconClicked ? headerStyles["clicked"] : ""
                }`}
              ></div>
              <div
                className={`${headerStyles["menu-icon-line"]} ${
                  isNavIconClicked ? headerStyles["clicked"] : ""
                }`}
              ></div>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link link-opacity-75-hover link-underline link-underline-opacity-0 me-4 ${headerStyles["link-css"]}`}
                  aria-current="page"
                  href="https://github.com/yusufkaanklc/yusufkaan.github.io"
                  target="blank"
                  style={{ color: `${textColor}` }}
                >
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link link-opacity-75-hover link-underline link-underline-opacity-0 ${headerStyles["link-css"]}`}
                  aria-current="page"
                  href="www.linkedin.com/in/yusufkaanklc"
                  target="blank"
                  style={{ color: `${textColor}` }}
                >
                  Linkedn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
