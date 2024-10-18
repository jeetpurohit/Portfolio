import { motion } from "framer-motion"; // Import motion
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { greeting } from "../../data/portfolio";
import "./footer.css";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="footer-div">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made<span role="img"></span> by {greeting.title}
        </p>
      </motion.div>
    </div>
  );
}
