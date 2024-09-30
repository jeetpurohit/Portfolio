import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoaderLogo from "../../components/loader/loader-logo";
import ThemeContext from "../../context/ThemeContext";
import "./splash.css";

const Splash = () => {
  const [redirect, setRedirect] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/home");
    }
  }, [redirect, navigate]);

  const AnimatedSplash = () => {
    return (
      <div className="logo_wrapper">
        <div className="screen" style={{ backgroundColor: theme.splashBg }}>
          <LoaderLogo id="logo" theme={theme} />
        </div>
      </div>
    );
  };

  return <AnimatedSplash />;
};

export default Splash;
