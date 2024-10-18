import { motion, useInView } from "framer-motion";
import React, { useContext, useRef } from "react";
import AddressImg from "../../../public/assets/images/AddressImg";
import Button from "../../components/button/button";
import ThemeContext from "../../context/ThemeContext";
import { contactPageData, greeting, socialMediaLinks } from "../../data/portfolio";
import "./contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef(null);
  // Use useInView to track if the ref is in view
  const isInView = useInView(ref, { once: true }); // Triggers only once when in view

  const ContactData = contactPageData.contactSection;
  const addressSection = contactPageData.addressSection;
  const phoneSection = contactPageData.phoneSection;

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="contact-main">
      <div className="basic-contact">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
            </div>
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text" style={{ color: theme.text }}>
                {ContactData["title"]}
              </h1>
              <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {ContactData["description"]}
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
                        className={`fab ${media.fontAwesomeIcon} social-icon`}
                        style={{ backgroundColor: media.backgroundColor }}
                      ></i>
                    </a>
                  );
                })}
              </div>
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="address-heading-div">
          <motion.div
            ref={ref} // Attach the ref here for in-view detection
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 2 }}
            className="address-heading-text-div"
          >
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {addressSection["title"]}
            </h1>
            <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
              {addressSection["subtitle"]}
            </p>
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {phoneSection["title"]}
            </h1>
            <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
              {phoneSection["subtitle"]}
            </p>
            <div className="address-btn-div">
              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={addressSection.location_map_link}
                theme={theme}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="contact-heading-img-div"
          >
            <AddressImg theme={theme} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;