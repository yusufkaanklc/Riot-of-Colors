import React, { useContext, useEffect, useState } from "react";
import navStyle from "./Colornav.module.css";
import { HexColorInput, HexColorPicker } from "react-colorful";
import tinycolor from "tinycolor2";
import ColorContext from "../contexts/ColorContext";
function ColorNav() {
  const [isColorTypeClicked, setIsColorTypeClicked] = useState(false);
  const [isColorType, setIsColorType] = useState("HEX");
  const [RgbColorTextValue, setRgbColorTextValue] = useState("");
  const [RgbColorBackgroundValue, setRgbColorBackgroundValue] = useState("");
  const [RgbColorPrimaryValue, setRgbColorPrimaryValue] = useState("");
  const [RgbColorSecondaryValue, setRgbColorSecondaryValue] = useState("");
  const [RgbColorAccentValue, setRgbColorAccentValue] = useState("");
  const [themeColorClicked, setThemeColorClicked] = useState(false);
  const [textColorHistory, setTextColorHistory] = useState("");
  const [textColorHistorySecond, setTextColorHistorySecond] = useState("");
  const [backgroundColorHistory, setBackgroundColorHistory] = useState("");
  const [backgroundColorHistorySecond, setBackgroundColorHistorySecond] =
    useState("");
  const [primaryColorHistory, setPrimaryColorHistory] = useState("");
  const [primaryColorHistorySecond, setPrimaryColorHistorySecond] =
    useState("");
  const [secondaryColorHistory, setSecondaryColorHistory] = useState("");
  const [secondaryColorHistorySecond, setSecondaryColorHistorySecond] =
    useState("");
  const [accentColorHistory, setAccentColorHistory] = useState("");
  const [accentColorHistorySecond, setAccentColorHistorySecond] = useState("");
  const [selectedItem, setSelectedItem] = useState(0);
  const [isRandomClicked, setIsRandomClicked] = useState(false);
  const [colorSchemeList, setColorSchemeList] = useState([]);
  const [complementSchemeList, setComplementSchemeList] = useState("");
  const [colorLuminanceList, setColorLuminanceList] = useState([]);
  const [colorSaturationList, setColorSaturationList] = useState([]);
  const [colorHueList, setColorHueList] = useState([]);
  const [isColorSchemeChanged, setIsColorSchemeChanged] = useState(false);
  const [selectedExportType, setSelectedExportType] = useState(0);
  const [selectedExportColortype, setSelectedExportColorType] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const colorSchemes = [
    "All",
    "Monochromatic",
    "Analogous",
    "Complementary",
    "Triadic",
    "Split Complementary",
    "Square",
  ];

  const {
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
  } = useContext(ColorContext);

  // color type selector
  const handleColorType = () => {
    setIsColorTypeClicked((prevIsColorTypeClicked) => !prevIsColorTypeClicked);
    if (!isColorTypeClicked) {
      setIsColorType("RGB");
    } else {
      setIsColorType("HEX");
    }
  };
  // HEX color to RGB color
  function hexToRgb(hex) {
    var hexToRgbVariable = tinycolor(hex);
    return hexToRgbVariable.toRgbString();
  }
  // HEX color to HSL color
  function hexToHsl(hex) {
    var hexToRgbVariable = tinycolor(hex);
    return hexToRgbVariable.toHslString();
  }
  // RGB value section
  useEffect(() => {
    const rgbColorText = hexToRgb(textColor);
    setRgbColorTextValue(rgbColorText);
  }, [textColor]);

  const handleTextRgbValue = (e) => {
    const newRgbColorTextValue = e.target.value;
    setRgbColorTextValue(newRgbColorTextValue);
    setTextColor(tinycolor(newRgbColorTextValue).toHexString());
  };

  useEffect(() => {
    const rgbColorBackground = hexToRgb(backgroundColor);
    setRgbColorBackgroundValue(rgbColorBackground);
  }, [backgroundColor]);

  const handleBackgroundRgbValue = (e) => {
    const newRgbColorBackgroundValue = e.target.value;
    setRgbColorBackgroundValue(newRgbColorBackgroundValue);
    setBackgroundColor(tinycolor(newRgbColorBackgroundValue).toHexString());
  };

  useEffect(() => {
    const rgbColorPrimary = hexToRgb(primaryColor);
    setRgbColorPrimaryValue(rgbColorPrimary);
  }, [primaryColor]);

  const handlePrimaryRgbValue = (e) => {
    const newRgbColorPrimaryValue = e.target.value;
    setRgbColorPrimaryValue(newRgbColorPrimaryValue);
    setPrimaryColor(tinycolor(newRgbColorPrimaryValue).toHexString());
  };

  useEffect(() => {
    const rgbColorSecondary = hexToRgb(secondaryColor);
    setRgbColorSecondaryValue(rgbColorSecondary);
  }, [secondaryColor]);

  const handleSecondaryRgbValue = (e) => {
    const newRgbColorSecondaryValue = e.target.value;
    setRgbColorSecondaryValue(newRgbColorSecondaryValue);
    setSecondaryColor(tinycolor(newRgbColorSecondaryValue).toHexString());
  };

  useEffect(() => {
    const rgbColorAccent = hexToRgb(accentColor);
    setRgbColorAccentValue(rgbColorAccent);
  }, [accentColor]);

  const handleAccentRgbValue = (e) => {
    const newRgbColorAccentValue = e.target.value;
    setRgbColorAccentValue(newRgbColorAccentValue);
    setAccentColor(tinycolor(newRgbColorAccentValue).toHexString());
  };
  // color manuplation func
  const colorTransform = (color) => {
    // Orijinal renk
    const originalColor = tinycolor(color);
    // Renk değerlerini al
    const originalHsl = originalColor.toHsl();
    const originalHue = originalHsl.h;
    const originalSaturation = originalHsl.s;
    const originalLightness = originalHsl.l;
    // Yeni renk oluştur
    const transformedColor = tinycolor({
      h: originalHue, // Renk tonu (sabit)
      s: originalSaturation, // Doygunluk (sabit)
      l: 1 - originalLightness,
      a: 1, // Alpha (sabit)
    });
    return transformedColor.toHexString();
  };

  const themeColorHandle = () => {
    setThemeColorClicked(!themeColorClicked);
  };

  useEffect(() => {
    if (themeColorClicked) {
      // text kısmı koyu tema
      if (textColor === "#000000") {
        setTextColor("#ffffff");
      } else {
        setTextColorHistory(textColor);
        const colorBrightnessTransform = colorTransform(textColorHistorySecond);
        if (textColor === colorBrightnessTransform) {
          setTextColor(textColorHistorySecond);
        } else {
          setTextColor(colorTransform(textColor));
        }
      }
      // background kısmı koyu tema
      if (backgroundColor === "#ffffff") {
        setBackgroundColor("#000000");
      } else {
        setBackgroundColorHistory(backgroundColor);
        const colorBrightnessTransform = colorTransform(
          backgroundColorHistorySecond
        );
        if (backgroundColor === colorBrightnessTransform) {
          setBackgroundColor(backgroundColorHistorySecond);
        } else {
          setBackgroundColor(colorTransform(backgroundColor));
        }
      }
      // primary kısmı koyu tema
      if (primaryColor === "#ff6d4d") {
        setPrimaryColor("#b22000");
      } else {
        setPrimaryColorHistory(primaryColor);
        const colorBrightnessTransform = colorTransform(
          primaryColorHistorySecond
        );
        if (primaryColor === colorBrightnessTransform) {
          setPrimaryColor(primaryColorHistorySecond);
        } else {
          setPrimaryColor(colorTransform(primaryColor));
        }
      }
      // secondary kısmı koyu tema
      if (secondaryColor === "#e6e6e5") {
        setSecondaryColor("#1a1a19");
      } else {
        setSecondaryColorHistory(secondaryColor);
        const colorBrightnessTransform = colorTransform(
          secondaryColorHistorySecond
        );
        if (secondaryColor === colorBrightnessTransform) {
          setSecondaryColor(secondaryColorHistorySecond);
        } else {
          setSecondaryColor(colorTransform(secondaryColor));
        }
      }
      // accent kısmı koyu tema
      if (accentColor === "#d12600") {
        setAccentColor("#ff542e");
      } else {
        setAccentColorHistory(accentColor);
        const colorBrightnessTransform = colorTransform(
          accentColorHistorySecond
        );
        if (accentColor === colorBrightnessTransform) {
          setAccentColor(accentColorHistorySecond);
        } else {
          setAccentColor(colorTransform(accentColor));
        }
      }
    } else {
      // text kısmı açık tema
      if (textColor === "#ffffff" || textColor === "#000000") {
        setTextColor("#000000");
      } else {
        setTextColorHistorySecond(textColor);
        const colorBrightnessTransform = colorTransform(textColorHistory);
        if (textColor === colorBrightnessTransform) {
          setTextColor(textColorHistory);
        } else {
          const colorBrightnessTransform = colorTransform(textColor);
          setTextColor(colorBrightnessTransform);
        }
      }
      // background kısmı açık tema
      if (backgroundColor === "#ffffff" || backgroundColor === "#000000") {
        setBackgroundColor("#ffffff");
      } else {
        setBackgroundColorHistorySecond(backgroundColor);
        const colorBrightnessTransform = colorTransform(backgroundColorHistory);
        if (backgroundColor === colorBrightnessTransform) {
          setBackgroundColor(backgroundColorHistory);
        } else {
          const colorBrightnessTransform = colorTransform(backgroundColor);
          setBackgroundColor(colorBrightnessTransform);
        }
      }
      // primary kısmı açık tema
      if (primaryColor === "#ff6d4d" || primaryColor === "#b22000") {
        setPrimaryColor("#ff6d4d");
      } else {
        setPrimaryColorHistorySecond(primaryColor);
        const colorBrightnessTransform = colorTransform(primaryColorHistory);
        if (primaryColor === colorBrightnessTransform) {
          setPrimaryColor(primaryColorHistory);
        } else {
          const colorBrightnessTransform = colorTransform(primaryColor);
          setPrimaryColor(colorBrightnessTransform);
        }
      }
      // secondary kısmı açık tema
      if (secondaryColor === "#e6e6e5" || secondaryColor === "#1a1a19") {
        setSecondaryColor("#e6e6e5");
      } else {
        setSecondaryColorHistorySecond(secondaryColor);
        const colorBrightnessTransform = colorTransform(secondaryColorHistory);
        if (secondaryColor === colorBrightnessTransform) {
          setSecondaryColor(secondaryColorHistory);
        } else {
          const colorBrightnessTransform = colorTransform(secondaryColor);
          setSecondaryColor(colorBrightnessTransform);
        }
      }
      // accent kısmı açık tema
      if (accentColor === "#d12600" || accentColor === "#ff542e") {
        setAccentColor("#d12600");
      } else {
        setAccentColorHistorySecond(accentColor);
        const colorBrightnessTransform = colorTransform(accentColorHistory);
        if (accentColor === colorBrightnessTransform) {
          setAccentColor(accentColorHistory);
        } else {
          const colorBrightnessTransform = colorTransform(accentColor);
          setAccentColor(colorBrightnessTransform);
        }
      }
    }
  }, [themeColorClicked]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  // Rastgele renk
  const handleRandomColor = async () => {
    setIsRandomClicked((prevRandomClicked) => !prevRandomClicked);

    // Sıfırla
    setColorHueList([]);
    setColorLuminanceList([]);
    setColorSaturationList([]);

    var colorScheme;
    var getSelectedItem = selectedItem;

    switch (getSelectedItem) {
      case 0:
        const randomColorSchemeList = [
          "monochromatic",
          "analogous",
          "complement",
          "triad",
          "splitcomplement",
          "tetrad",
        ];
        const randomIndex = Math.floor(
          Math.random() * randomColorSchemeList.length
        );
        const randomColorScheme = randomColorSchemeList[randomIndex];

        if (randomColorScheme === "complement") {
          const complementList = [];
          function generateComplement() {
            for (let i = 0; i < 5; i++) {
              var colorSchemeItem = tinycolor.random().complement();
              complementList.push(colorSchemeItem);
            }
          }
          generateComplement();
          setComplementSchemeList(complementList);
          colorScheme = complementList;
        } else {
          colorScheme = tinycolor.random()[randomColorScheme]();
        }
        break;

      case 1:
        colorScheme = tinycolor.random().monochromatic();
        break;

      case 2:
        colorScheme = tinycolor.random().analogous();
        break;

      case 3:
        const complementList = [];
        function generateComplement() {
          for (let i = 0; i < 5; i++) {
            var colorSchemeItem = tinycolor.random().complement();
            complementList.push(colorSchemeItem.toHexString());
          }
        }
        generateComplement();
        setComplementSchemeList(complementList);
        colorScheme = complementList;
        break;

      case 4:
        colorScheme = tinycolor.random().triad();
        break;

      case 5:
        colorScheme = tinycolor.random().splitcomplement();
        break;

      case 6:
        colorScheme = tinycolor.random().tetrad();
        break;

      default:
        break;
    }

    // Renk şeması değişikliği
    if (selectedItem === 3) {
      setColorSchemeList(colorScheme);
      setTimeout(() => {
        setIsColorSchemeChanged((prevValue) => !prevValue);
      }, 100);
    } else {
      var randomColorList;
      randomColorList = colorScheme.map((color) => color.toHexString());
      setColorSchemeList(randomColorList.slice(-5));
      setTimeout(() => {
        setIsColorSchemeChanged((prevValue) => !prevValue);
      }, 100);
    }
  };

  // Color HSL values mapping section
  useEffect(() => {
    const extractColorProperty = (color, property, updateFunction) => {
      if (color) {
        const colorValue = tinycolor(color).toHsl()[property];
        updateFunction((prevColor) => [...prevColor, colorValue]);
      }
    };

    colorSchemeList.forEach((color) => {
      extractColorProperty(color, "l", setColorLuminanceList);
    });

    colorSchemeList.forEach((color) => {
      extractColorProperty(color, "s", setColorSaturationList);
    });

    colorSchemeList.forEach((color) => {
      extractColorProperty(color, "h", setColorHueList);
    });

    console.log("color scheme :", colorSchemeList);
  }, [colorSchemeList]);

  // color update func for color schemes
  const updateColors = (
    textLuminance,
    secondaryLuminance,
    backgroundLuminance
  ) => {
    const colorLuminanceForText =
      colorLuminanceList[colorLuminanceList.length - 1];
    const colorLuminanceForBackground = colorLuminanceList[0];
    const colorLuminanceForSecondary = colorLuminanceList[3];

    const LuminanceChanger = (hue, saturation, luminance) => {
      return tinycolor({ h: hue, s: saturation, l: luminance, a: 1 });
    };

    if (colorSchemeList.length > 0) {
      // Luminance change for text color
      if (colorLuminanceForText > textLuminance) {
        const originalColor = tinycolor(
          colorSchemeList[colorSchemeList.length - 1]
        );
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setTextColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            textLuminance
          ).toHexString()
        );
      } else {
        setTextColor(colorSchemeList[colorSchemeList.length - 1]);
      }

      // Luminance change for background color
      if (colorLuminanceForBackground < backgroundLuminance) {
        const originalColor = tinycolor(colorSchemeList[0]);
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setBackgroundColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            backgroundLuminance
          ).toHexString()
        );
      } else {
        setBackgroundColor(colorSchemeList[0]);
      }

      // Luminance change for secondary color
      if (colorLuminanceForSecondary < secondaryLuminance) {
        const originalColor = tinycolor(colorSchemeList[3]);
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setSecondaryColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            secondaryLuminance
          ).toHexString()
        );
      } else {
        setSecondaryColor(colorSchemeList[3]);
      }

      setPrimaryColor(colorSchemeList[2]);
      setAccentColor(colorSchemeList[4]);
    }
  };

  //updated colors for dark theme
  const updateColorsForDark = (
    textLuminance, // 0.9
    secondaryLuminance, // 0.2
    backgroundLuminance // 0.1
  ) => {
    const colorLuminanceForText =
      colorLuminanceList[colorLuminanceList.length - 1];
    const colorLuminanceForBackground = colorLuminanceList[0];
    const colorLuminanceForSecondary = colorLuminanceList[3];

    const LuminanceChanger = (hue, saturation, luminance) => {
      return tinycolor({ h: hue, s: saturation, l: luminance, a: 1 });
    };

    if (colorSchemeList.length > 0) {
      // Luminance change for text color
      if (colorLuminanceForText < textLuminance) {
        const originalColor = tinycolor(
          colorSchemeList[colorSchemeList.length - 1]
        );
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setTextColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            textLuminance
          ).toHexString()
        );
      } else {
        setTextColor(colorSchemeList[colorSchemeList.length - 1]);
      }

      // Luminance change for background color
      if (colorLuminanceForBackground > backgroundLuminance) {
        const originalColor = tinycolor(colorSchemeList[0]);
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setBackgroundColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            backgroundLuminance
          ).toHexString()
        );
      } else {
        setBackgroundColor(colorSchemeList[0]);
      }

      // Luminance change for secondary color
      if (colorLuminanceForSecondary > secondaryLuminance) {
        const originalColor = tinycolor(colorSchemeList[3]);
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setSecondaryColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            secondaryLuminance
          ).toHexString()
        );
      } else {
        setSecondaryColor(colorSchemeList[3]);
      }

      setPrimaryColor(colorSchemeList[2]);
      setAccentColor(colorSchemeList[4]);
    }
  };

  // update colors for triad color scheme
  const updateColorsForTriad = (
    textLuminance,
    secondaryLuminance,
    backgroundLuminance
  ) => {
    const colorLuminanceForSecondary = colorLuminanceList[1];

    // Primary color -> Text color manipulation (luminance decreased)
    const textColor = tinycolor(colorSchemeList[0]);
    const textColorHsl = textColor.toHsl();
    const textColorHue = textColorHsl.h;
    const textColorSaturation = textColorHsl.s;

    // Accent color -> Background color manipulation (luminance increased)
    const bgColor = tinycolor(colorSchemeList[2]);
    const bgColorHsl = bgColor.toHsl();
    const bgColorHue = bgColorHsl.h;
    const bgColorSaturation = bgColorHsl.s;

    // Luminance changer func
    const LuminanceChanger = (hue, saturation, luminance) => {
      return tinycolor({ h: hue, s: saturation, l: luminance, a: 1 });
    };

    // Luminance change for text color
    const colorLuminanceForText = LuminanceChanger(
      textColorHue,
      textColorSaturation,
      textLuminance
    ).toHexString();
    setTextColor(colorLuminanceForText);

    // Luminance change for bg color
    const colorLuminanceForBg = LuminanceChanger(
      bgColorHue,
      bgColorSaturation,
      backgroundLuminance
    ).toHexString();
    setBackgroundColor(colorLuminanceForBg);

    // Luminance change for secondary color
    if (colorSchemeList.length > 0) {
      if (colorLuminanceForSecondary < secondaryLuminance) {
        const originalColor = tinycolor(colorSchemeList[1]);
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setSecondaryColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            secondaryLuminance
          ).toHexString()
        );
      } else {
        setSecondaryColor(colorSchemeList[1]);
      }

      setPrimaryColor(colorSchemeList[0]);
      setAccentColor(colorSchemeList[2]);
    }
  };

  // update colors triad for dark
  const updateColorsTriadForDark = (
    textLuminance, // 0.9
    secondaryLuminance, // 0.2
    backgroundLuminance // 0.1
  ) => {
    const colorLuminanceForSecondary = colorLuminanceList[1];

    // Primary color -> Text color manipulation (luminance decreased)
    const textColor = tinycolor(colorSchemeList[0]);
    const textColorHsl = textColor.toHsl();
    const textColorHue = textColorHsl.h;
    const textColorSaturation = textColorHsl.s;

    // Accent color -> Background color manipulation (luminance increased)
    const bgColor = tinycolor(colorSchemeList[2]);
    const bgColorHsl = bgColor.toHsl();
    const bgColorHue = bgColorHsl.h;
    const bgColorSaturation = bgColorHsl.s;

    // Luminance changer func
    const LuminanceChanger = (hue, saturation, luminance) => {
      return tinycolor({ h: hue, s: saturation, l: luminance, a: 1 });
    };

    // Luminance change for text color
    const colorLuminanceForText = LuminanceChanger(
      textColorHue,
      textColorSaturation,
      textLuminance
    ).toHexString();
    setTextColor(colorLuminanceForText);

    // Luminance change for bg color
    const colorLuminanceForBg = LuminanceChanger(
      bgColorHue,
      bgColorSaturation,
      backgroundLuminance
    ).toHexString();
    setBackgroundColor(colorLuminanceForBg);

    // Luminance change for secondary color
    if (colorSchemeList.length > 0) {
      if (colorLuminanceForSecondary > secondaryLuminance) {
        const originalColor = tinycolor(colorSchemeList[1]);
        const originalHsl = originalColor.toHsl();
        const originalHue = originalHsl.h;
        const originalSaturation = originalHsl.s;
        setSecondaryColor(
          LuminanceChanger(
            originalHue,
            originalSaturation,
            secondaryLuminance
          ).toHexString()
        );
      } else {
        setSecondaryColor(colorSchemeList[1]);
      }

      setPrimaryColor(colorSchemeList[0]);
      setAccentColor(colorSchemeList[2]);
    }
  };

  // update colors for tetrad color scheme
  const updateColorsForTetrad = (
    textLuminance,
    secondaryLuminance,
    backgroundLuminance
  ) => {
    // Get color luminance values
    const colorLuminanceForBackground = colorLuminanceList[0];
    const colorLuminanceForSecondary = colorLuminanceList[2];

    // Extract text color and manipulate it
    const textColor = tinycolor(colorSchemeList[3]);
    const textColorHsl = textColor.toHsl();
    const { h: textColorHue, s: textColorSaturation } = textColorHsl;

    // Function to change luminance
    const LuminanceChanger = (hue, saturation, luminance) => {
      return tinycolor({
        h: hue,
        s: saturation,
        l: luminance,
        a: 1,
      }).toHexString();
    };

    if (colorSchemeList.length > 0) {
      // Luminance change for text color
      const colorLuminanceForText = LuminanceChanger(
        textColorHue,
        textColorSaturation,
        textLuminance
      );
      setTextColor(colorLuminanceForText);

      // Luminance change for background color
      if (colorLuminanceForBackground < backgroundLuminance) {
        const originalColor = tinycolor(colorSchemeList[0]);
        const originalHsl = originalColor.toHsl();
        const { h: originalHue, s: originalSaturation } = originalHsl;

        const newBackgroundColor = LuminanceChanger(
          originalHue,
          originalSaturation,
          backgroundLuminance
        );
        setBackgroundColor(newBackgroundColor);
      } else {
        setBackgroundColor(colorSchemeList[0]);
      }

      // Luminance change for secondary color
      if (colorLuminanceForSecondary < secondaryLuminance) {
        const originalColor = tinycolor(colorSchemeList[2]);
        const originalHsl = originalColor.toHsl();
        const { h: originalHue, s: originalSaturation } = originalHsl;

        const newSecondaryColor = LuminanceChanger(
          originalHue,
          originalSaturation,
          secondaryLuminance
        );
        setSecondaryColor(newSecondaryColor);
      } else {
        setSecondaryColor(colorSchemeList[2]);
      }

      // Set colors
      setPrimaryColor(colorSchemeList[1]);
      setAccentColor(colorSchemeList[3]);
    }
  };

  // update color tetrad for dark
  const updateColorsTetradForDark = (
    textLuminance, // 0.9
    secondaryLuminance, // 0.2
    backgroundLuminance // 0.1
  ) => {
    // Get color luminance values
    const colorLuminanceForBackground = colorLuminanceList[0];
    const colorLuminanceForSecondary = colorLuminanceList[2];

    // Extract text color and manipulate it
    const textColor = tinycolor(colorSchemeList[3]);
    const textColorHsl = textColor.toHsl();
    const { h: textColorHue, s: textColorSaturation } = textColorHsl;

    // Function to change luminance
    const LuminanceChanger = (hue, saturation, luminance) => {
      return tinycolor({
        h: hue,
        s: saturation,
        l: luminance,
        a: 1,
      }).toHexString();
    };

    if (colorSchemeList.length > 0) {
      // Luminance change for text color
      const colorLuminanceForText = LuminanceChanger(
        textColorHue,
        textColorSaturation,
        textLuminance
      );
      setTextColor(colorLuminanceForText);

      // Luminance change for background color
      if (colorLuminanceForBackground > backgroundLuminance) {
        const originalColor = tinycolor(colorSchemeList[0]);
        const originalHsl = originalColor.toHsl();
        const { h: originalHue, s: originalSaturation } = originalHsl;

        const newBackgroundColor = LuminanceChanger(
          originalHue,
          originalSaturation,
          backgroundLuminance
        );
        setBackgroundColor(newBackgroundColor);
      } else {
        setBackgroundColor(colorSchemeList[0]);
      }

      // Luminance change for secondary color
      if (colorLuminanceForSecondary > secondaryLuminance) {
        const originalColor = tinycolor(colorSchemeList[2]);
        const originalHsl = originalColor.toHsl();
        const { h: originalHue, s: originalSaturation } = originalHsl;

        const newSecondaryColor = LuminanceChanger(
          originalHue,
          originalSaturation,
          secondaryLuminance
        );
        setSecondaryColor(newSecondaryColor);
      } else {
        setSecondaryColor(colorSchemeList[2]);
      }

      // Set colors
      setPrimaryColor(colorSchemeList[1]);
      setAccentColor(colorSchemeList[3]);
    }
  };

  useEffect(() => {
    switch (selectedItem) {
      case 0:
        // all durumunda seçilen scheme
        if (colorSchemeList.length > 4) {
          if (themeColorClicked) {
            updateColorsForDark(0.9, 0.2, 0.1);
          } else {
            updateColors(0.1, 0.8, 0.9);
          }
        } else {
          if (colorSchemeList.length > 3) {
            // burada sorun var
            if (themeColorClicked) {
              updateColorsTetradForDark(0.9, 0.2, 0.1);
            } else {
              updateColorsForTetrad(0.1, 0.8, 0.9);
            }
          } else {
            if (colorSchemeList.length > 2) {
              if (themeColorClicked) {
                updateColorsTriadForDark(0.9, 0.2, 0.1);
              } else {
                updateColorsForTriad(0.1, 0.8, 0.9);
              }
            } else {
            }
          }
        }
        break;
      case 1:
        if (themeColorClicked) {
          updateColorsForDark(0.9, 0.2, 0.1);
        } else {
          updateColors(0.1, 0.8, 0.9);
        }
        break;
      case 2:
        if (themeColorClicked) {
          updateColorsForDark(0.9, 0.2, 0.1);
        } else {
          updateColors(0.1, 0.8, 0.9);
        }
        break;
      case 3:
        if (themeColorClicked) {
          updateColorsForDark(0.9, 0.2, 0.1);
        } else {
          updateColors(0.1, 0.8, 0.9);
        }
        break;
      case 4:
        if (themeColorClicked) {
          updateColorsTriadForDark(0.9, 0.2, 0.1);
        } else {
          updateColorsForTriad(0.1, 0.8, 0.9);
        }

        break;
      case 5:
        if (themeColorClicked) {
          updateColorsTriadForDark(0.9, 0.2, 0.1);
        } else {
          if (themeColorClicked) {
            updateColorsTriadForDark(0.9, 0.2, 0.1);
          } else {
            updateColorsForTriad(0.1, 0.8, 0.9);
          }
        }
        break;
      case 6:
        if (themeColorClicked) {
          updateColorsTetradForDark(0.9, 0.2, 0.1);
        } else {
          updateColorsForTetrad(0.1, 0.8, 0.9);
        }
        break;
      default:
        //
        break;
    }
    console.log("color scheme :", colorSchemeList);
    console.log("hue :", colorHueList);
    console.log("saturation :", colorSaturationList);
    console.log("luminance :", colorLuminanceList);
    console.log("---------------------------------");
  }, [isColorSchemeChanged]);

  const handleExportType = (index) => {
    setSelectedExportType(index);
    setSelectedExportColorType(0);
  };

  const handleExportColorType = (index) => {
    setSelectedExportColorType(index);
  };

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
  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <div>
      {width <= 430 ? (
        <div className={`dropup-center dropup ${navStyle["dropup-css"]}`}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
            style={{ background: `${secondaryColor}`, color: `${textColor}` }}
          >
            Colors
          </button>
          <ul
            className={`dropdown-menu ${navStyle["mobile-dropdown-menu"]}`}
            style={{ background: `${backgroundColor}` }}
          >
            <li>
              <div className={navStyle["color-nav-box-mobile"]}>
                <div
                  className={navStyle["color-nav-container-mobile"]}
                  style={{
                    background: themeColorClicked
                      ? "rgba(0,0,0,0.5)"
                      : "rgba(225, 225, 225, 0.8)",
                  }}
                >
                  <div
                    className={`btn-group dropup ${navStyle["btn-group-mobile"]}`}
                  >
                    <button
                      type="button"
                      className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css-mobile"]}`}
                      style={{
                        background: textColor,
                        color: backgroundColor,
                      }}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Text
                    </button>
                    <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                      <div>
                        <HexColorPicker
                          color={textColor}
                          onChange={setTextColor}
                        />
                        <div
                          className="w-100 py-1 text-center"
                          onClick={handleColorType}
                        >
                          {isColorType}
                          <i
                            className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                          ></i>
                        </div>
                        {isColorTypeClicked ? (
                          <input
                            className={navStyle["rgb-color-value"]}
                            value={tinycolor(RgbColorTextValue).toRgbString()}
                            onChange={(e) => handleTextRgbValue(e)}
                          />
                        ) : (
                          <HexColorInput
                            className={`${navStyle["hex-color-input"]}`}
                            color={textColor}
                            alpha
                            prefixed
                            onChange={setTextColor}
                          />
                        )}
                      </div>
                    </ul>
                  </div>
                  <div
                    className={`btn-group dropup ${navStyle["btn-group-mobile"]}`}
                  >
                    <button
                      type="button"
                      className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css-mobile"]}`}
                      style={{ background: backgroundColor, color: textColor }}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Background
                    </button>
                    <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                      <div>
                        <HexColorPicker
                          color={backgroundColor}
                          onChange={setBackgroundColor}
                        />
                        <div
                          className="w-100 py-1 text-center"
                          onClick={handleColorType}
                        >
                          {isColorType}
                          <i
                            className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                          ></i>
                        </div>
                        {isColorTypeClicked ? (
                          <input
                            className={navStyle["rgb-color-value"]}
                            value={tinycolor(
                              RgbColorBackgroundValue
                            ).toRgbString()}
                            onChange={(e) => handleBackgroundRgbValue(e)}
                          />
                        ) : (
                          <HexColorInput
                            className={`${navStyle["hex-color-input"]}`}
                            color={backgroundColor}
                            alpha
                            prefixed
                            onChange={setBackgroundColor}
                          />
                        )}
                      </div>
                    </ul>
                  </div>
                  <div
                    className={`btn-group dropup ${navStyle["btn-group-mobile"]}`}
                  >
                    <button
                      type="button"
                      className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css-mobile"]}`}
                      style={{
                        background: primaryColor,
                        color: backgroundColor,
                      }}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Primary
                    </button>
                    <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                      <div>
                        <HexColorPicker
                          color={primaryColor}
                          onChange={setPrimaryColor}
                        />
                        <div
                          className="w-100 py-1 text-center"
                          onClick={handleColorType}
                        >
                          {isColorType}
                          <i
                            className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                          ></i>
                        </div>
                        {isColorTypeClicked ? (
                          <input
                            className={navStyle["rgb-color-value"]}
                            value={tinycolor(
                              RgbColorPrimaryValue
                            ).toRgbString()}
                            onChange={(e) => handlePrimaryRgbValue(e)}
                          />
                        ) : (
                          <HexColorInput
                            className={`${navStyle["hex-color-input"]}`}
                            color={primaryColor}
                            alpha
                            prefixed
                            onChange={setPrimaryColor}
                          />
                        )}
                      </div>
                    </ul>
                  </div>
                  <div
                    className={`btn-group dropup ${navStyle["btn-group-mobile"]}`}
                  >
                    <button
                      type="button"
                      className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css-mobile"]}`}
                      style={{ background: secondaryColor, color: textColor }}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Secondary
                    </button>
                    <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                      <div>
                        <HexColorPicker
                          color={secondaryColor}
                          onChange={setSecondaryColor}
                        />
                        <div
                          className="w-100 py-1 text-center"
                          onClick={handleColorType}
                        >
                          {isColorType}
                          <i
                            className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                          ></i>
                        </div>
                        {isColorTypeClicked ? (
                          <input
                            className={navStyle["rgb-color-value"]}
                            value={tinycolor(
                              RgbColorSecondaryValue
                            ).toRgbString()}
                            onChange={(e) => handleSecondaryRgbValue(e)}
                          />
                        ) : (
                          <HexColorInput
                            className={`${navStyle["hex-color-input"]}`}
                            color={secondaryColor}
                            alpha
                            prefixed
                            onChange={setSecondaryColor}
                          />
                        )}
                      </div>
                    </ul>
                  </div>
                  <div
                    className={`btn-group dropup ${navStyle["btn-group-mobile"]}`}
                  >
                    <button
                      type="button"
                      className={`btn  btn-hover-bg-light btn-light ${navStyle["btn-css-mobile"]}`}
                      style={{
                        background: accentColor,
                        color: backgroundColor,
                      }}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Accent
                    </button>
                    <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                      <div>
                        <HexColorPicker
                          color={accentColor}
                          onChange={setAccentColor}
                        />
                        <div
                          className="w-100 py-1 text-center"
                          onClick={handleColorType}
                        >
                          {isColorType}
                          <i
                            className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                          ></i>
                        </div>
                        {isColorTypeClicked ? (
                          <input
                            className={navStyle["rgb-color-value"]}
                            value={tinycolor(RgbColorAccentValue).toRgbString()}
                            onChange={(e) => handleAccentRgbValue(e)}
                          />
                        ) : (
                          <HexColorInput
                            className={`${navStyle["hex-color-input"]}`}
                            color={accentColor}
                            alpha
                            prefixed
                            onChange={setAccentColor}
                          />
                        )}
                      </div>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className={`btn btn-secondary btn-hover-bg-light btn-light ${navStyle["btn-control-css-mobile"]}`}
                    style={{
                      background: themeColorClicked ? "#161616" : "#ffffff",
                      color: themeColorClicked ? "#ffffff" : "#161616",
                    }}
                    aria-expanded="false"
                    onClick={themeColorHandle}
                  >
                    {themeColorClicked ? (
                      <i class="fi fi-tr-moon"></i>
                    ) : (
                      <i className="fi fi-sr-brightness"></i>
                    )}
                  </button>
                  <div
                    className={`btn-group dropup-center ${navStyle["btn-group-mobile"]}`}
                  >
                    <button
                      type="button"
                      className={`btn btn-hover-bg-light btn-light ${navStyle["btn-control-css-mobile"]}`}
                      aria-expanded="false"
                      onClick={handleRandomColor}
                      style={{
                        background: themeColorClicked ? "#161616" : "#ffffff",
                        color: themeColorClicked ? "#ffffff" : "#161616",
                      }}
                    >
                      <i class="fi fi-tr-dice-six"></i>
                    </button>
                    <button
                      type="button"
                      className={`btn dropdown-toggle btn-hover-bg-light btn-light dropdown-toggle-split ${navStyle["btn-control-split-css-mobile"]}`}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                      style={{
                        background: themeColorClicked ? "#161616" : "#ffffff",
                        color: themeColorClicked ? "#ffffff" : "#161616",
                      }}
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu mb-2">
                      <li className="dropdown-item">Select a color scheme</li>
                      <p></p>
                      {colorSchemes.map((scheme, index) => (
                        <li
                          key={index}
                          className={`dropdown-item ${
                            navStyle["color-scheme"]
                          } ${
                            navStyle[selectedItem === index ? "selected" : ""]
                          }`}
                          onClick={() => handleItemClick(index)}
                        >
                          {scheme}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    class={`btn btn-hover-bg-light btn-light ${navStyle["btn-control-css-mobile"]}`}
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{
                      background: themeColorClicked ? "#161616" : "#ffffff",
                      color: themeColorClicked ? "#ffffff" : "#161616",
                      borderColor: themeColorClicked ? "#161616" : "#ffffff",
                    }}
                  >
                    <i class="fi fi-tr-file-export"></i>
                  </button>
                  <div
                    class={`modal fade ${navStyle["modal-fade-mobile"]}`}
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div
                        class="modal-content"
                        style={{
                          background: `${secondaryColor}`,
                        }}
                      >
                        <div class="modal-header">
                          <h1
                            class={`modal-title fs-5 ${navStyle["modal-title-css"]}`}
                            id="exampleModalLabel"
                          >
                            <span
                              className={
                                selectedExportType === 0
                                  ? navStyle["export-type-selected"]
                                  : navStyle["export-type"]
                              }
                              onClick={() => handleExportType(0)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              CSS
                            </span>
                            <span
                              className={
                                selectedExportType === 1
                                  ? navStyle["export-type-selected"]
                                  : navStyle["export-type"]
                              }
                              onClick={() => handleExportType(1)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              Tailwind CSS
                            </span>
                            <span
                              className={
                                selectedExportType === 2
                                  ? navStyle["export-type-selected"]
                                  : navStyle["export-type"]
                              }
                              onClick={() => handleExportType(2)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              SCSS
                            </span>
                            <span
                              className={
                                selectedExportType === 3
                                  ? navStyle["export-type-selected"]
                                  : navStyle["export-type"]
                              }
                              onClick={() => handleExportType(3)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              CSV
                            </span>
                          </h1>
                        </div>
                        <div class="modal-body">
                          {selectedExportType === 0 ? (
                            <>
                              <div className={navStyle["modal-color-buttons"]}>
                                <span
                                  className={
                                    selectedExportColortype === 0
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(0)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  HEX
                                </span>
                                <span
                                  className={
                                    selectedExportColortype === 1
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(1)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  RGB
                                </span>
                                <span
                                  className={
                                    selectedExportColortype === 2
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(2)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  HSL
                                </span>
                              </div>
                              <div
                                className={navStyle["modal-content-box"]}
                                style={{
                                  color: `${textColor}`,
                                }}
                              >
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`--text: ${
                                    selectedExportColortype === 0
                                      ? textColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(textColor)
                                      : hexToHsl(textColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`--background: ${
                                    selectedExportColortype === 0
                                      ? backgroundColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(backgroundColor)
                                      : hexToHsl(backgroundColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`--primary: ${
                                    selectedExportColortype === 0
                                      ? primaryColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(primaryColor)
                                      : hexToHsl(primaryColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`--secondary: ${
                                    selectedExportColortype === 0
                                      ? secondaryColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(secondaryColor)
                                      : hexToHsl(secondaryColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`--accent: ${
                                    selectedExportColortype === 0
                                      ? accentColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(accentColor)
                                      : hexToHsl(accentColor)
                                  }`}
                                </div>
                              </div>
                            </>
                          ) : selectedExportType === 1 ? (
                            <>
                              <div className={navStyle["modal-color-buttons"]}>
                                <span
                                  className={
                                    selectedExportColortype === 0
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(0)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  HEX
                                </span>
                                <span
                                  className={
                                    selectedExportColortype === 1
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(1)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  RGB
                                </span>
                                <span
                                  className={
                                    selectedExportColortype === 2
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(2)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  HSL
                                </span>
                              </div>
                              <div
                                className={navStyle["modal-content-box"]}
                                style={{
                                  color: `${textColor}`,
                                }}
                              >
                                <div>{`colors: {`}</div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`'text': '${
                                    selectedExportColortype === 0
                                      ? textColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(textColor)
                                      : hexToHsl(textColor)
                                  }',`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`'background': '${
                                    selectedExportColortype === 0
                                      ? backgroundColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(backgroundColor)
                                      : hexToHsl(backgroundColor)
                                  }',`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`'primary': '${
                                    selectedExportColortype === 0
                                      ? primaryColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(primaryColor)
                                      : hexToHsl(primaryColor)
                                  }',`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`'secondary': '${
                                    selectedExportColortype === 0
                                      ? secondaryColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(secondaryColor)
                                      : hexToHsl(secondaryColor)
                                  }',`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`'accent': '${
                                    selectedExportColortype === 0
                                      ? accentColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(accentColor)
                                      : hexToHsl(accentColor)
                                  }',`}
                                </div>
                                <div>{`},`}</div>
                              </div>
                            </>
                          ) : selectedExportType === 2 ? (
                            <>
                              <div className={navStyle["modal-color-buttons"]}>
                                <span
                                  className={
                                    selectedExportColortype === 0
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(0)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  HEX
                                </span>
                                <span
                                  className={
                                    selectedExportColortype === 1
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(1)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  RGB
                                </span>
                                <span
                                  className={
                                    selectedExportColortype === 2
                                      ? navStyle["export-color-type-selected"]
                                      : navStyle["export-color-type"]
                                  }
                                  onClick={() => handleExportColorType(2)}
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  HSL
                                </span>
                              </div>
                              <div
                                className={navStyle["modal-content-box"]}
                                style={{
                                  color: `${textColor}`,
                                }}
                              >
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`$text: '${
                                    selectedExportColortype === 0
                                      ? textColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(textColor)
                                      : hexToHsl(textColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`$background: '${
                                    selectedExportColortype === 0
                                      ? backgroundColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(backgroundColor)
                                      : hexToHsl(backgroundColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`$primary: '${
                                    selectedExportColortype === 0
                                      ? primaryColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(primaryColor)
                                      : hexToHsl(primaryColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`$secondary: '${
                                    selectedExportColortype === 0
                                      ? secondaryColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(secondaryColor)
                                      : hexToHsl(secondaryColor)
                                  }`}
                                </div>
                                <div
                                  className={navStyle["modal-content-items"]}
                                >
                                  {`$accent: '${
                                    selectedExportColortype === 0
                                      ? accentColor
                                      : selectedExportColortype === 1
                                      ? hexToRgb(accentColor)
                                      : hexToHsl(accentColor)
                                  }`}
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <p className={navStyle["modal-content-header"]}>
                                Without #
                              </p>
                              <div
                                className={navStyle["modal-content-box"]}
                                style={{
                                  color: `${textColor}`,
                                }}
                              >
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {textColor.replace(/^#/, "")}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {backgroundColor.replace(/^#/, "")}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {primaryColor.replace(/^#/, "")}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {secondaryColor.replace(/^#/, "")}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {accentColor.replace(/^#/, "")}
                                </span>
                              </div>
                              <p className={navStyle["modal-content-header"]}>
                                With #
                              </p>
                              <div
                                className={navStyle["modal-content-box"]}
                                style={{
                                  color: `${textColor}`,
                                }}
                              >
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {textColor}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {backgroundColor}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {primaryColor}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {secondaryColor}
                                </span>
                                <span
                                  className={
                                    navStyle["modal-content-csv-items"]
                                  }
                                  style={{
                                    color: `${textColor}`,
                                  }}
                                >
                                  {accentColor}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <div className={navStyle["color-nav-box"]}>
            <div
              className={`container ${navStyle["color-nav-container"]}`}
              style={{
                background: themeColorClicked
                  ? "rgba(0,0,0,0.5)"
                  : "rgba(225, 225, 225, 0.8)",
              }}
            >
              <div className="btn-group dropup">
                <button
                  type="button"
                  className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css"]}`}
                  style={{
                    background: textColor,
                    color: backgroundColor,
                  }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Text
                </button>
                <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                  <div>
                    <HexColorPicker color={textColor} onChange={setTextColor} />
                    <div
                      className="w-100 py-1 text-center"
                      onClick={handleColorType}
                    >
                      {isColorType}
                      <i
                        className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                      ></i>
                    </div>
                    {isColorTypeClicked ? (
                      <input
                        className={navStyle["rgb-color-value"]}
                        value={tinycolor(RgbColorTextValue).toRgbString()}
                        onChange={(e) => handleTextRgbValue(e)}
                      />
                    ) : (
                      <HexColorInput
                        className={`${navStyle["hex-color-input"]}`}
                        color={textColor}
                        alpha
                        prefixed
                        onChange={setTextColor}
                      />
                    )}
                  </div>
                </ul>
              </div>
              <div className="btn-group dropup">
                <button
                  type="button"
                  className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css"]}`}
                  style={{ background: backgroundColor, color: textColor }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Background
                </button>
                <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                  <div>
                    <HexColorPicker
                      color={backgroundColor}
                      onChange={setBackgroundColor}
                    />
                    <div
                      className="w-100 py-1 text-center"
                      onClick={handleColorType}
                    >
                      {isColorType}
                      <i
                        className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                      ></i>
                    </div>
                    {isColorTypeClicked ? (
                      <input
                        className={navStyle["rgb-color-value"]}
                        value={tinycolor(RgbColorBackgroundValue).toRgbString()}
                        onChange={(e) => handleBackgroundRgbValue(e)}
                      />
                    ) : (
                      <HexColorInput
                        className={`${navStyle["hex-color-input"]}`}
                        color={backgroundColor}
                        alpha
                        prefixed
                        onChange={setBackgroundColor}
                      />
                    )}
                  </div>
                </ul>
              </div>
              <div className="btn-group dropup">
                <button
                  type="button"
                  className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css"]}`}
                  style={{ background: primaryColor, color: backgroundColor }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Primary
                </button>
                <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                  <div>
                    <HexColorPicker
                      color={primaryColor}
                      onChange={setPrimaryColor}
                    />
                    <div
                      className="w-100 py-1 text-center"
                      onClick={handleColorType}
                    >
                      {isColorType}
                      <i
                        className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                      ></i>
                    </div>
                    {isColorTypeClicked ? (
                      <input
                        className={navStyle["rgb-color-value"]}
                        value={tinycolor(RgbColorPrimaryValue).toRgbString()}
                        onChange={(e) => handlePrimaryRgbValue(e)}
                      />
                    ) : (
                      <HexColorInput
                        className={`${navStyle["hex-color-input"]}`}
                        color={primaryColor}
                        alpha
                        prefixed
                        onChange={setPrimaryColor}
                      />
                    )}
                  </div>
                </ul>
              </div>
              <div className="btn-group dropup">
                <button
                  type="button"
                  className={`btn btn-hover-bg-light btn-light ${navStyle["btn-css"]}`}
                  style={{ background: secondaryColor, color: textColor }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Secondary
                </button>
                <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                  <div>
                    <HexColorPicker
                      color={secondaryColor}
                      onChange={setSecondaryColor}
                    />
                    <div
                      className="w-100 py-1 text-center"
                      onClick={handleColorType}
                    >
                      {isColorType}
                      <i
                        className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                      ></i>
                    </div>
                    {isColorTypeClicked ? (
                      <input
                        className={navStyle["rgb-color-value"]}
                        value={tinycolor(RgbColorSecondaryValue).toRgbString()}
                        onChange={(e) => handleSecondaryRgbValue(e)}
                      />
                    ) : (
                      <HexColorInput
                        className={`${navStyle["hex-color-input"]}`}
                        color={secondaryColor}
                        alpha
                        prefixed
                        onChange={setSecondaryColor}
                      />
                    )}
                  </div>
                </ul>
              </div>
              <div className="btn-group dropup">
                <button
                  type="button"
                  className={`btn  btn-hover-bg-light btn-light ${navStyle["btn-css"]}`}
                  style={{ background: accentColor, color: backgroundColor }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Accent
                </button>
                <ul className="dropdown-menu p-3 mb-2 justify-content-center">
                  <div>
                    <HexColorPicker
                      color={accentColor}
                      onChange={setAccentColor}
                    />
                    <div
                      className="w-100 py-1 text-center"
                      onClick={handleColorType}
                    >
                      {isColorType}
                      <i
                        className={`fi fi-br-refresh ${navStyle["fi-change-css"]}`}
                      ></i>
                    </div>
                    {isColorTypeClicked ? (
                      <input
                        className={navStyle["rgb-color-value"]}
                        value={tinycolor(RgbColorAccentValue).toRgbString()}
                        onChange={(e) => handleAccentRgbValue(e)}
                      />
                    ) : (
                      <HexColorInput
                        className={`${navStyle["hex-color-input"]}`}
                        color={accentColor}
                        alpha
                        prefixed
                        onChange={setAccentColor}
                      />
                    )}
                  </div>
                </ul>
              </div>
              <button
                type="button"
                className={`btn btn-secondary btn-hover-bg-light btn-light ${navStyle["btn-control-css"]}`}
                style={{
                  background: themeColorClicked ? "#161616" : "#ffffff",
                  color: themeColorClicked ? "#ffffff" : "#161616",
                }}
                aria-expanded="false"
                onClick={themeColorHandle}
              >
                {themeColorClicked ? (
                  <i class="fi fi-tr-moon"></i>
                ) : (
                  <i className="fi fi-sr-brightness"></i>
                )}
              </button>
              <div className="btn-group dropup-center">
                <button
                  type="button"
                  className={`btn btn-hover-bg-light btn-light ${navStyle["btn-control-css"]}`}
                  aria-expanded="false"
                  onClick={handleRandomColor}
                  style={{
                    background: themeColorClicked ? "#161616" : "#ffffff",
                    color: themeColorClicked ? "#ffffff" : "#161616",
                  }}
                >
                  <i class="fi fi-tr-dice-six"></i>
                </button>
                <button
                  type="button"
                  className={`btn dropdown-toggle btn-hover-bg-light btn-light dropdown-toggle-split ${navStyle["btn-control-split-css"]}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  style={{
                    background: themeColorClicked ? "#161616" : "#ffffff",
                    color: themeColorClicked ? "#ffffff" : "#161616",
                  }}
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu mb-2">
                  <li className="dropdown-item">Select a color scheme</li>
                  <p></p>
                  {colorSchemes.map((scheme, index) => (
                    <li
                      key={index}
                      className={`dropdown-item ${navStyle["color-scheme"]} ${
                        navStyle[selectedItem === index ? "selected" : ""]
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      {scheme}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                class={`btn btn-hover-bg-light btn-light ${navStyle["btn-control-css"]}`}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{
                  background: themeColorClicked ? "#161616" : "#ffffff",
                  color: themeColorClicked ? "#ffffff" : "#161616",
                  borderColor: themeColorClicked ? "#161616" : "#ffffff",
                }}
              >
                <i class="fi fi-tr-file-export"></i>
              </button>
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div
                    class="modal-content"
                    style={{
                      background: `${secondaryColor}`,
                    }}
                  >
                    <div class="modal-header">
                      <h1
                        class={`modal-title fs-5 ${navStyle["modal-title-css"]}`}
                        id="exampleModalLabel"
                      >
                        <span
                          className={
                            selectedExportType === 0
                              ? navStyle["export-type-selected"]
                              : navStyle["export-type"]
                          }
                          onClick={() => handleExportType(0)}
                          style={{
                            color: `${textColor}`,
                          }}
                        >
                          CSS
                        </span>
                        <span
                          className={
                            selectedExportType === 1
                              ? navStyle["export-type-selected"]
                              : navStyle["export-type"]
                          }
                          onClick={() => handleExportType(1)}
                          style={{
                            color: `${textColor}`,
                          }}
                        >
                          Tailwind CSS
                        </span>
                        <span
                          className={
                            selectedExportType === 2
                              ? navStyle["export-type-selected"]
                              : navStyle["export-type"]
                          }
                          onClick={() => handleExportType(2)}
                          style={{
                            color: `${textColor}`,
                          }}
                        >
                          SCSS
                        </span>
                        <span
                          className={
                            selectedExportType === 3
                              ? navStyle["export-type-selected"]
                              : navStyle["export-type"]
                          }
                          onClick={() => handleExportType(3)}
                          style={{
                            color: `${textColor}`,
                          }}
                        >
                          CSV
                        </span>
                      </h1>
                    </div>
                    <div class="modal-body">
                      {selectedExportType === 0 ? (
                        <>
                          <div className={navStyle["modal-color-buttons"]}>
                            <span
                              className={
                                selectedExportColortype === 0
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(0)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              HEX
                            </span>
                            <span
                              className={
                                selectedExportColortype === 1
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(1)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              RGB
                            </span>
                            <span
                              className={
                                selectedExportColortype === 2
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(2)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              HSL
                            </span>
                          </div>
                          <div
                            className={navStyle["modal-content-box"]}
                            style={{
                              color: `${textColor}`,
                            }}
                          >
                            <div className={navStyle["modal-content-items"]}>
                              {`--text: ${
                                selectedExportColortype === 0
                                  ? textColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(textColor)
                                  : hexToHsl(textColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`--background: ${
                                selectedExportColortype === 0
                                  ? backgroundColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(backgroundColor)
                                  : hexToHsl(backgroundColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`--primary: ${
                                selectedExportColortype === 0
                                  ? primaryColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(primaryColor)
                                  : hexToHsl(primaryColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`--secondary: ${
                                selectedExportColortype === 0
                                  ? secondaryColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(secondaryColor)
                                  : hexToHsl(secondaryColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`--accent: ${
                                selectedExportColortype === 0
                                  ? accentColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(accentColor)
                                  : hexToHsl(accentColor)
                              }`}
                            </div>
                          </div>
                        </>
                      ) : selectedExportType === 1 ? (
                        <>
                          <div className={navStyle["modal-color-buttons"]}>
                            <span
                              className={
                                selectedExportColortype === 0
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(0)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              HEX
                            </span>
                            <span
                              className={
                                selectedExportColortype === 1
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(1)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              RGB
                            </span>
                            <span
                              className={
                                selectedExportColortype === 2
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(2)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              HSL
                            </span>
                          </div>
                          <div
                            className={navStyle["modal-content-box"]}
                            style={{
                              color: `${textColor}`,
                            }}
                          >
                            <div>{`colors: {`}</div>
                            <div className={navStyle["modal-content-items"]}>
                              {`'text': '${
                                selectedExportColortype === 0
                                  ? textColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(textColor)
                                  : hexToHsl(textColor)
                              }',`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`'background': '${
                                selectedExportColortype === 0
                                  ? backgroundColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(backgroundColor)
                                  : hexToHsl(backgroundColor)
                              }',`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`'primary': '${
                                selectedExportColortype === 0
                                  ? primaryColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(primaryColor)
                                  : hexToHsl(primaryColor)
                              }',`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`'secondary': '${
                                selectedExportColortype === 0
                                  ? secondaryColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(secondaryColor)
                                  : hexToHsl(secondaryColor)
                              }',`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`'accent': '${
                                selectedExportColortype === 0
                                  ? accentColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(accentColor)
                                  : hexToHsl(accentColor)
                              }',`}
                            </div>
                            <div>{`},`}</div>
                          </div>
                        </>
                      ) : selectedExportType === 2 ? (
                        <>
                          <div className={navStyle["modal-color-buttons"]}>
                            <span
                              className={
                                selectedExportColortype === 0
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(0)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              HEX
                            </span>
                            <span
                              className={
                                selectedExportColortype === 1
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(1)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              RGB
                            </span>
                            <span
                              className={
                                selectedExportColortype === 2
                                  ? navStyle["export-color-type-selected"]
                                  : navStyle["export-color-type"]
                              }
                              onClick={() => handleExportColorType(2)}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              HSL
                            </span>
                          </div>
                          <div
                            className={navStyle["modal-content-box"]}
                            style={{
                              color: `${textColor}`,
                            }}
                          >
                            <div className={navStyle["modal-content-items"]}>
                              {`$text: '${
                                selectedExportColortype === 0
                                  ? textColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(textColor)
                                  : hexToHsl(textColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`$background: '${
                                selectedExportColortype === 0
                                  ? backgroundColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(backgroundColor)
                                  : hexToHsl(backgroundColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`$primary: '${
                                selectedExportColortype === 0
                                  ? primaryColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(primaryColor)
                                  : hexToHsl(primaryColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`$secondary: '${
                                selectedExportColortype === 0
                                  ? secondaryColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(secondaryColor)
                                  : hexToHsl(secondaryColor)
                              }`}
                            </div>
                            <div className={navStyle["modal-content-items"]}>
                              {`$accent: '${
                                selectedExportColortype === 0
                                  ? accentColor
                                  : selectedExportColortype === 1
                                  ? hexToRgb(accentColor)
                                  : hexToHsl(accentColor)
                              }`}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <p className={navStyle["modal-content-header"]}>
                            Without #
                          </p>
                          <div
                            className={navStyle["modal-content-box"]}
                            style={{
                              color: `${textColor}`,
                            }}
                          >
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {textColor.replace(/^#/, "")}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {backgroundColor.replace(/^#/, "")}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {primaryColor.replace(/^#/, "")}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {secondaryColor.replace(/^#/, "")}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {accentColor.replace(/^#/, "")}
                            </span>
                          </div>
                          <p className={navStyle["modal-content-header"]}>
                            With #
                          </p>
                          <div
                            className={navStyle["modal-content-box"]}
                            style={{
                              color: `${textColor}`,
                            }}
                          >
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {textColor}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {backgroundColor}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {primaryColor}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {secondaryColor}
                            </span>
                            <span
                              className={navStyle["modal-content-csv-items"]}
                              style={{
                                color: `${textColor}`,
                              }}
                            >
                              {accentColor}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ColorNav;
