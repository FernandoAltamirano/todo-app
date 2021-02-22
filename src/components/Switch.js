import React, { useEffect, useState } from "react";
import "../styles/switch.css";
import iconMoon from "../images/icon-moon.svg";
import iconSun from "../images/icon-sun.svg";
export default function Switch() {
  const [theme, setTheme] = useState(false);
  const [icon, setIcon] = useState(iconMoon);
  useEffect(() => {
    setDark();
    if (theme) {
      setIcon(iconSun);
    } else {
      setIcon(iconMoon);
    }
  }, [theme]);

  const setDark = () => {
    if (theme) {
      document.documentElement.style.setProperty(
        "--Very-Light-Gray",
        "hsl(235, 21%, 11%)"
      );

      document.documentElement.style.setProperty(
        "--white",
        "hsl(235, 24%, 19%)"
      );
      document.documentElement.style.setProperty(
        "--black",
        "hsl(233, 11%, 84%)"
      );
      document.documentElement.style.setProperty(
        "--Light-Grayish-Blue",
        " hsl(233, 14%, 35%)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--black",
        "hsl(235, 21%, 11%)"
      );
      document.documentElement.style.setProperty(
        "--Light-Grayish-Blue",
        "hsl(234, 39%, 85%)"
      );
      document.documentElement.style.setProperty(
        "--Very-Light-Gray",
        "hsl(0, 0%, 98%)"
      );
      document.documentElement.style.setProperty("--white", "#fff");
    }
  };
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <button className="switch" onClick={handleTheme}>
      <img src={icon} alt="" />
    </button>
  );
}
