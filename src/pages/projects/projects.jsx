import { motion } from "framer-motion";
import { useContext } from "react";
import ProjectsImg from "../../../public/assets/images/ProjectsImg";
import ThemeContext from "../../context/ThemeContext";
import { greeting, projectsHeader, publications, publicationsHeader } from "../../data/portfolio";
import ProjectsData from "../../data/projects.json";
import "./projects.css";

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const openRepoinNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  }

  // Define animation variants for framer-motion
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="projects-main">
      <div className="basic-projects">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2, ease: "easeOut" }}
          className="projects-heading-div"
        >
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
              {projectsHeader.description}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="repo-cards-div-main"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {ProjectsData.data.map((repo, index) => (
          <motion.div
            key={index}
            className="repo-card-div"
            style={{ backgroundColor: theme.highlight }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.div
              onClick={() => openRepoinNewTab(repo.url)}
            >
              <div className="repo-name-div">
                <svg
                  aria-hidden="true"
                  className="octicon repo-svg"
                  height="16"
                  role="img"
                  viewBox="0 0 12 16"
                  width="12"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                  ></path>
                </svg>
                <p className="repo-name" style={{ color: theme.text }}>
                  {repo.name}
                </p>
              </div>
              <p className="repo-description" style={{ color: theme.text }}>
                {repo.description}
              </p>
              <div className="repo-details">
                <p
                  className="repo-creation-date subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Created on {repo.createdAt.split("T")[0]}
                </p>
                <div className="software-skills-main-div">
                  <ul className="dev-icons-languages">
                    {repo.languages.map((logo, index) => {
                      return (
                        <li
                          key={index}
                          className="software-skill-inline-languages"
                          name={logo.skillName}
                        >
                          <span
                            className="iconify"
                            style={{ height: 26, width: 26 }}
                            data-icon={logo.iconifyClass}
                            data-inline="false"
                          ></span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Publications */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {publications.data.length > 0 && (
          <div className="basic-projects">
            <motion.div
              className="publications-heading-div"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="publications-heading-text-div">
                <h1 className="publications-heading-text" style={{ color: theme.text }}>
                  {publicationsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {publicationsHeader.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>

      <motion.div
        className="repo-cards-div-main"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {publications.data.map((pub, index) => (
          <motion.div
            key={index}
            className="publication-card-div"
            style={{ backgroundColor: theme.highlight }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.div
              onClick={() => openRepoinNewTab(pub.url)}
            >
              <div className="publication-name-div">
                <p className="publication-name" style={{ color: theme.text }}>
                  {pub.name}
                </p>
              </div>
              <p className="publication-description" style={{ color: theme.text }}>
                {pub.description}
              </p>
              <div className="publication-details">
                <p
                  className="publication-creation-date subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Published on {pub.createdAt.split("T")[0]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
