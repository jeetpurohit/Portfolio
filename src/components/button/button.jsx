import React, { useState } from "react";
import DownloadIcon from "../../../public/assets/images/Download-icon";
import "./button.css";

export default function Button({ text, className, href, newTab, theme, onClick }) {
  const [iconColor, setIconColor] = useState(theme.body);

  const onMouseEnter = (event, color, bgColor) => {
    setIconColor(color);
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
  };

  const onMouseOut = (event, color, bgColor) => {
    setIconColor(color);
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
  };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6
        }}
        onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
        onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
        onClick={onClick}
      >
        {text === "Download CV" && <DownloadIcon onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
          onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)} fill={iconColor} />} {text}
      </a>
    </div >
  );
}
