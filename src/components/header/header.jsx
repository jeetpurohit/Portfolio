import { motion } from "framer-motion"; // Import motion
import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext.jsx";
import { greeting } from "../../data/portfolio.jsx";
import { headerItems, settings } from "../../utils/utils.jsx";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const { theme } = useContext(ThemeContext);
  const link = settings.isSplash ? "/splash" : "/home";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animate to this state
      exit={{ opacity: 0, y: -20 }} // Exit animation
      transition={{ duration: 0.5 }} // Transition duration
    >
      <header className="header">
        <NavLink to={link} className="logo">
          <span style={{ color: theme.text }}> &lt;</span>
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          {headerItems.map((item, index) => (
            <li key={index + 1}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : "" // Apply active class
                }
                style={{ color: theme.text }}
              >
                {path === item.path ? (
                  <>
                    <span className="logo-name" style={{ color: theme.text, fontFamily: 'Google Sans Regular' }}>
                      {item.name}
                    </span>
                  </>
                ) : item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </motion.div>
  );
}

export default Header;
