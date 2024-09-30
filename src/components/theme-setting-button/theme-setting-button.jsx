import { useContext, useState } from "react";
import ThemeContext from '../../context/ThemeContext';
import {
  blackTheme,
  blueTheme,
  brownTheme,
  greenTheme,
  materialDarkTheme,
  materialLightTheme,
  materialTealTheme,
  orangeTheme,
  pinkTheme,
  purpleTheme,
  redTheme,
  tealTheme,
  violetTheme,
  yellowTheme,
} from '../../utils/theme';
import "./theme-setting-button.css";

const ThemeSettingButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [activeClass, setActiveClass] = useState(false);

  const themeColors = {
    blue: blueTheme,
    brown: brownTheme,
    purple: purpleTheme,
    green: greenTheme,
    red: redTheme,
    black: blackTheme,
    pink: pinkTheme,
    violet: violetTheme,
    teal: tealTheme,
    orange: orangeTheme,
    yellow: yellowTheme,
    materialDark: materialDarkTheme,
    materialLight: materialLightTheme,
    materialTeal: materialTealTheme,
  };

  const handleThemeChange = (themeName) => {
    setTheme(themeColors[themeName]);
  };

  return (
    <div className={`color-switcher ${activeClass ? `active` : ''}`}>
      <div className="switcher-btn" style={{ background: theme.text, color: '#fff' }} onClick={() => setActiveClass(!activeClass)}>
        <i className="fa-solid fa-gear"></i>
      </div>

      <h3 style={{ color: theme.text }}>Select Color</h3>
      <div className="theme-buttons-container">
        {Object.keys(themeColors).map((themeName) => (
          <span
            key={themeName}
            className="theme-button"
            style={{ backgroundColor: themeColors[themeName].splashBg }}
            onClick={() => handleThemeChange(themeName)}
          >
          </span>
        ))}
      </div>
    </div >
  )
}

export default ThemeSettingButton;
