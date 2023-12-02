import React, { useContext } from "react";
import FAQStyle from "./FAQSection.module.css";
import ColorContext from "../contexts/ColorContext";

function FAQSection() {
  const { secondaryColor, textColor, accentColor } = useContext(ColorContext);
  return (
    <>
      <div className={`container ${FAQStyle["faq-container"]}`}>
        <div
          className={FAQStyle["left-part"]}
          style={{ color: `${textColor}` }}
        >
          <h2>FAQ</h2>
          <h5>Answers to some questions you might have.</h5>
        </div>
        <div
          className={`accordion ${FAQStyle["part-list"]}`}
          id="accordionExample"
        >
          <div
            className={`accordion-item ${FAQStyle["accordion-item"]}`}
            style={{ color: `${textColor}` }}
          >
            <h2
              className="accordion-header"
              style={{ background: `${secondaryColor}` }}
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How many colors should I choose?
                <i
                  class="fi fi-br-cross-small"
                  style={{ color: `${accentColor}` }}
                ></i>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body ${FAQStyle["accordion-body"]}`}
                style={{ background: `${secondaryColor}` }}
              >
                Normally, 3 colors are absolutely fine (meaning background,
                text, and one accent color). However, if you want, you can have
                more. Usually, we don’t add more than 6 colors across a
                platform. It would just make things too... complicated. Plus, it
                makes it hard to keep the colors consistent throughout the
                design.
              </div>
            </div>
          </div>
          <div
            className={`accordion-item ${FAQStyle["accordion-item"]}`}
            style={{ color: `${textColor}` }}
          >
            <h2
              className="accordion-header"
              style={{ background: `${secondaryColor}` }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How does the contrast checker work?
                <i
                  class="fi fi-br-cross-small"
                  style={{ color: `${accentColor}` }}
                ></i>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body ${FAQStyle["accordion-body"]}`}
                style={{ background: `${secondaryColor}` }}
              >
                <p>
                  The contrast checker shows the contrast ratio between the
                  selected color and its background/foreground.
                  <br />
                  <br />
                  The contrast checker has 3 lights:
                </p>
                <ul>
                  <li>
                    <b>x / Red:</b> The contrast ratio does not pass either AAA
                    or AA. Therefore, both large and normal texts are hardly
                    readable.
                  </li>
                  <li>
                    <b>- / Yellow:</b> The contrast ratio might pass AA but
                    won't pass AAA. Large texts might be readable but normal
                    texts are probably not readable.
                  </li>
                  <li>
                    <b>✓ / Green:</b> The contrast ratio passes both AA and AAA.
                    Both large and normal texts are readable.
                  </li>
                </ul>
                <p>Learn more about the contrast checker</p>
              </div>
            </div>
          </div>
          <div
            className={`accordion-item ${FAQStyle["accordion-item"]}`}
            style={{ color: `${textColor}` }}
          >
            <h2
              className="accordion-header"
              style={{ background: `${secondaryColor}` }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What does the hero image represent?
                <i
                  class="fi fi-br-cross-small"
                  style={{ color: `${accentColor}` }}
                ></i>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body ${FAQStyle["accordion-body"]}`}
                style={{ background: `${secondaryColor}` }}
              >
                The hero image is inspired by Piet Mondrian's Composition with
                Large Red Plane, Yellow, Black, Grey and Blue. This composition
                keeps the ratio of the main colors (red, blue, and yellow) very
                close to the 60-30-10 rule of UI design. This is mainly why I've
                chosen this composition to visualize the distribution of the
                colors on the page.
              </div>
            </div>
          </div>
          <div
            className={`accordion-item ${FAQStyle["accordion-item"]}`}
            style={{ color: `${textColor}` }}
          >
            <h2
              className="accordion-header"
              style={{ background: `${secondaryColor}` }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I set up the fonts?
                <i
                  class="fi fi-br-cross-small"
                  style={{ color: `${accentColor}` }}
                ></i>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body ${FAQStyle["accordion-body"]}`}
                style={{ background: `${secondaryColor}` }}
              >
                You can enter the name of a font from Google Fonts or the fonts
                installed on your device. Read more about Font Setup.
              </div>
            </div>
          </div>
          <div
            className={`accordion-item ${FAQStyle["accordion-item"]}`}
            style={{ color: `${textColor}` }}
          >
            <h2
              className="accordion-header"
              style={{ background: `${secondaryColor}` }}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapsefive"
              >
                How can I learn more about this tool?
                <i
                  class="fi fi-br-cross-small"
                  style={{ color: `${accentColor}` }}
                ></i>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div
                className={`accordion-body ${FAQStyle["accordion-body"]}`}
                style={{ background: `${secondaryColor}` }}
              >
                You can find more information about Realtime Colors on the Docs.
                You can also contact me for any questions you might have.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQSection;
