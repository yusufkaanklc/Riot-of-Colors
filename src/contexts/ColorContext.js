import { createContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [primaryColor, setPrimaryColor] = useState("#ff6d4d");
  const [secondaryColor, setSecondaryColor] = useState("#e6e6e5");
  const [accentColor, setAccentColor] = useState("#d12600");
  const [themeColorClicked, setThemeColorClicked] = useState(false);

  const colorReducer = ({ hexColor, alpha }) => {
    // Hex kodunu rgba formatına çeviren fonksiyon
    const hexToRgbA = (hex, alpha) => {
      let c;
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length === 3) {
          c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
          ","
        )},${alpha})`;
      }
      throw new Error("Invalid Hex Code");
    };

    return hexToRgbA(hexColor, alpha);
  };

  // Assuming primaryColor and secondaryColor are objects with hexColor property
  const primaryColorForBg = colorReducer({
    hexColor: primaryColor,
    alpha: 0.5,
  });
  const secondaryColorForBg = colorReducer({
    hexColor: secondaryColor,
    alpha: 0.5,
  });

  return (
    <>
      <ColorContext.Provider
        value={{
          textColor,
          setTextColor,
          backgroundColor,
          setBackgroundColor,
          primaryColor,
          setPrimaryColor,
          secondaryColor,
          setSecondaryColor,
          accentColor,
          setAccentColor,
          secondaryColorForBg,
          primaryColorForBg,
          themeColorClicked,
          setThemeColorClicked,
        }}
      >
        {children}
      </ColorContext.Provider>
    </>
  );
};

export default ColorContext;
