import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import EducationImg from "../../../public/assets/images/EducationImg";
import ThemeContext from "../../context/ThemeContext";
import { mySkills, competitiveSites, degrees } from "../../data/portfolio";
import "./education.css";

const Education = () => {
  const { theme } = useContext(ThemeContext);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const flipVariants = {
    hidden: { rotateY: 180, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="education-main">
      <div className="basic-education">
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Skills
              </h3>
              <div className="competitive-sites-main-div">
                <ul className="dev-icons">
                  {competitiveSites.competitiveSites.map((logo, index) => (
                    <li className="competitive-sites-inline" key={index + 1} name={logo.siteName}>
                      <a
                        href={logo.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          className="iconify"
                          data-icon={logo.iconifyClassname}
                          style={logo.style}
                          data-inline="false"
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Degrees Section */}
        <div className="main" id="educations">
          <div className="educations-header-div">
            <motion.h1
              className="educations-header"
              style={{ color: theme.text }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Degrees Received
            </motion.h1>
          </div>

          {/* Loop through degrees */}
          <div className="educations-body-div">
            {degrees.degrees.map((degree, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true }); // Track when the section is in view

              return (
                <div className="degree-card" key={index + 1} ref={ref}>
                  {degree.logo_path && (
                    <motion.div
                      variants={flipVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"} // Animate only when in view
                      transition={{ duration: 2, ease: "easeOut" }}
                    >
                      <div className="card-img">
                        <img
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            transform: "scale(0.9)",
                            borderRadius: "50%"
                          }}
                          src={`../../../public/assets/images/${degree.logo_path}`}
                          alt={degree.alt_name}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Card Body */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 2 }}
                  >
                    <div className="card-body" style={{ width: degree.logo_path ? "90%" : "100%" }}>
                      <div className="body-header" style={{ backgroundColor: theme.headerColor }}>
                        <div className="body-header-title">
                          <h2 className="card-title" style={{ color: theme.text }}>
                            {degree.title}
                          </h2>
                          <h3 className="card-subtitle" style={{ color: theme.text }}>
                            {degree.subtitle}
                          </h3>
                        </div>
                        <div className="body-header-duration">
                          <h3 className="duration" style={{ color: theme.text }}>
                            {degree.duration}
                          </h3>
                        </div>
                      </div>
                      <div className="body-content">
                        {degree.descriptions.map((sentence, index) => (
                          <p key={index} className="content-list" style={{ color: theme.text }}>
                            {sentence}
                          </p>
                        ))}
                        {degree.website_link && (
                          <a href={degree.website_link} target="_blank" rel="noopener noreferrer">
                            <div className="visit-btn" style={{ backgroundColor: theme.headerColor }}>
                              <p className="btn" style={{ color: theme.text }}>
                                Visit Website
                              </p>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {mySkills.skills.length > 0 ? (
          <div className="main" id="certs">
            <div className="certs-header-div">
              <motion.h1
                className="certs-header"
                style={{ color: theme.text }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                My Skills
              </motion.h1>
            </div>
            <div className="certs-body-div">
              {mySkills.skills.map((skill, index) => {
                return (
                  <motion.div
                    className="cert-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 2, ease: "easeOut" }}
                    key={index + 1}
                  >
                    <div className="content">
                      <a
                        href={skill.skill_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="content-overlay"></div>
                        <div
                          className="cert-header"
                          style={{ background: theme.headerColor }}
                        >
                          {skill.fontAwesomeClassname && (
                            <span
                              className="iconify logo-img"
                              data-icon={skill.fontAwesomeClassname}
                              style={{
                                color: skill.color_code, width: 76, height: 100
                              }}
                              data-inline="false"
                            ></span>
                          )}
                        </div>
                      </a>
                    </div>

                    <div className="cert-body">
                      <h2 className="cert-body-title" style={{ color: theme.text }}>
                        {skill.title}
                      </h2>
                      <h3 className="cert-body-subtitle" style={{ color: theme.secondaryText }}>
                        {skill.subtitle}
                      </h3>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Education;
