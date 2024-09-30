import { motion } from "framer-motion";
import { useContext, useState } from "react";
import ExperienceImg from "../../../public/assets/images/ExperienceImg";
import ThemeContext from "../../context/ThemeContext";
import { experience } from "../../data/portfolio";
import "./experience.css";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="experience-main">
      <div className="basic-experience">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1 className="experience-heading-text" style={{ color: theme.text }}>
                {experience.title}
              </h1>
              <h3 className="experience-heading-sub-text" style={{ color: theme.text }}>
                {experience["subtitle"]}
              </h3>
              <p className="experience-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {experience["description"]}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="experience-accord">
        {experience["sections"].map((section, index) => (
          <div key={index + 1} className="accord-panel">
            <div
              className="accord-header"
              onClick={() => handleToggle(index)} // Toggle accordion on click
              style={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "20px",
                backgroundColor: theme.body,
                border: `1px solid ${theme.headerColor}`,
                borderRadius: "5px",
                marginBottom: "3px",
                padding: "16px 20px",
                cursor: "pointer",
                color: theme.text,
                fontFamily: "Google Sans Regular",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              {section.title}
              {activeIndex !== index ? (
                <i className="fa-solid fa-plus" style={{ width: "12px", height: "12px", fontSize: "14px" }}></i>
              ) : (
                <i className="fa-solid fa-minus" style={{ width: "12px", height: "12px", fontSize: "14px" }}></i>
              )}
            </div>

            {/* Animated content area */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                height: activeIndex === index ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }} // Animation duration
              className="accord-content"
              style={{
                overflow: "hidden",
                backgroundColor: theme.body,
                fontSize: "14px",
                padding: activeIndex === index ? "26px" : "0", // Padding only when open
              }}
            >
              {section.experiences.map((experienceItem, experienceIndex) => (
                <div className="experience-list-item" style={{ marginTop: experienceIndex === 0 ? 30 : 50 }} key={experienceIndex + 1}>
                  {/* Logo with motion animation */}
                  <motion.div
                    className="experience-card-logo-div"
                    initial={{ opacity: 0, x: -40 }} // Initial state for animation
                    animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }} // Animate only when the accordion is opened
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <img className="experience-card-logo" src={`/assets/images/${experienceItem["logo_path"]}`} alt="" />
                  </motion.div>

                  {/* Stepper for experience timeline */}
                  <div className="experience-card-stepper">
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: `${theme.headerColor}`,
                        borderRadius: 50,
                        zIndex: 100,
                      }}
                    />
                    {experienceIndex !== section.experiences.length - 1 && (
                      <div
                        style={{
                          height: 190,
                          width: 2,
                          backgroundColor: `${theme.headerColor}`,
                          position: "absolute",
                          marginTop: 20,
                        }}
                      />
                    )}
                  </div>

                  {/* Experience card details with motion animation */}
                  <motion.div
                    style={{ display: "flex", flexDirection: "row" }}
                    initial={{ opacity: 0, x: 40 }} // Initial state for animation
                    animate={activeIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} // Animate only when the accordion is opened
                    transition={{ duration: 0.5 }} // Transition duration
                  >
                    <div className="arrow-left" style={{ borderRight: `10px solid ${theme.body}` }}></div>
                    <div className="experience-card" style={{ background: `${theme.body}` }}>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                          <h3 className="experience-card-title" style={{ color: theme.text }}>
                            {experienceItem["title"]}
                          </h3>
                          <p className="experience-card-company" style={{ color: theme.text }}>
                            <a href={experienceItem["company_url"]} target="_blank" rel="noopener noreferrer">
                              {experienceItem["company"]}
                            </a>
                          </p>
                        </div>
                        <div>
                          <div className="experience-card-heading-right">
                            <p className="experience-card-duration" style={{ color: theme.secondaryText }}>
                              {experienceItem["duration"]}
                            </p>
                            <p className="experience-card-location" style={{ color: theme.secondaryText }}>
                              {experienceItem["location"]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 20 }}>
                        <div className="repo-description" />
                        {experienceItem["description"]}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
