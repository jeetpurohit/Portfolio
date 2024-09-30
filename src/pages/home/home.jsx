import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import CloudInfraImg from "../../assets/images/CloudInfraImg";
import DataScienceImg from "../../assets/images/DataScienceImg";
import DesignImg from "../../assets/images/DesignImg";
import FeelingProud from "../../assets/images/FeelingProud";
import FullStackImg from "../../assets/images/FullStackImg";
import MyPdf from "../../assets/pdf/Vivek_Vaishnani_Resume.pdf";
import Button from "../../components/button/button";
import ThemeContext from "../../context/ThemeContext";
import { greeting, skills, socialMediaLinks } from "../../data/portfolio";
import "./home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const handleMouseEnter = (event, hoverColor) => {
    event.target.style.backgroundColor = hoverColor;
  };

  const handleMouseLeave = (event, originalColor) => {
    event.target.style.backgroundColor = originalColor;
  };

  const GetSkillSvg = (theme, fileName) => {
    if (fileName === "DataScienceImg")
      return <DataScienceImg theme={theme} />;
    else if (fileName === "FullStackImg")
      return <FullStackImg theme={theme} />;
    else if (fileName === "CloudInfraImg")
      return <CloudInfraImg theme={theme} />;
    return <DesignImg theme={theme} />;
  }

  // Define animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
        className="greet-main"
        id="greeting"
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <div className="social-media-div">
                {socialMediaLinks.map((media, i) => {
                  return (
                    <a
                      key={i}
                      href={media.link}
                      className="icon-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        style={{ backgroundColor: media.backgroundColor }}
                        className={`fab ${media.fontAwesomeIcon}`}
                        onMouseEnter={(event) =>
                          handleMouseEnter(event, theme.text)
                        }
                        onMouseLeave={(event) =>
                          handleMouseLeave(event, media.backgroundColor)
                        }
                      ></i>
                    </a>
                  );
                })}
              </div>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Download CV"
                  theme={theme}
                  className="portfolio-repo-btn"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = MyPdf;
                    link.download = "Vivek_Vaishnani_Resume.pdf";
                    link.click();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </motion.div>
      {/* What I Do section */}
      <div className="main" id="skills">
        <div className="skills-header-div">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h1 className="skills-header" style={{ color: theme.text }}>
              What I Do?
            </h1>
          </motion.div>
        </div>
        <div>
          {skills.data.map((skill, i) => {
            const alignItem = i % 2 === 0 ? 'flex-row-reverse' : '';
            const sideAlign = i % 2 === 0;

            // Reference for the current skill section
            const ref = useRef(null);
            // Use useInView to track if the ref is in view
            const isInView = useInView(ref, { once: true }); // { once: true } makes it trigger only once
            return (
              <div key={i} className={`skills-main-div ${alignItem}`} ref={ref}>
                <motion.div
                  initial={{ opacity: 0, x: sideAlign ? 100 : -100 }} // Left for true, Right for false
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (sideAlign ? 100 : -100) }} // Animate to center when in view
                  exit={{ opacity: 0, x: sideAlign ? 100 : -100 }} // Exit to left for true, right for false
                  transition={{ duration: 2 }}
                  className="skills-image-div text-align-right"
                >
                  {GetSkillSvg(theme, skill.fileName)}
                </motion.div>
                <div className="skills-text-div">
                  <motion.h1
                    initial={{ opacity: 0, x: sideAlign ? -100 : 100 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (sideAlign ? -100 : 100) }}
                    exit={{ opacity: 0, x: sideAlign ? -100 : 100 }}
                    transition={{ duration: 1 }}
                    className="skills-heading"
                    style={{ color: theme.text }}
                  >
                    {skill.title}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, x: sideAlign ? -100 : 100 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (sideAlign ? -100 : 100) }}
                    exit={{ opacity: 0, x: sideAlign ? -100 : 100 }}
                    transition={{ duration: 1.5 }}
                  >
                    <div className="software-skills-main-div">
                      <ul className="dev-icons">
                        {skill.softwareSkills.map((logo, index) => (
                          <li className="software-skill-inline" name={logo.skillName} key={index + 1}>
                            {logo.fontAwesomeClassname && (
                              <span
                                className="iconify"
                                data-icon={logo.fontAwesomeClassname}
                                style={logo.style}
                                data-inline="false"
                              ></span>
                            )}
                            {!logo.fontAwesomeClassname && logo.imageSrc && (
                              <img
                                className="skill-image"
                                style={logo.style}
                                src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                                alt={logo.skillName}
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: sideAlign ? -100 : 100 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : (sideAlign ? -100 : 100) }}
                    exit={{ opacity: 0, x: sideAlign ? -100 : 100 }}
                    transition={{ duration: 2 }}
                  >
                    <div>
                      {skill.skills.map((skillSentence, i) => (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
