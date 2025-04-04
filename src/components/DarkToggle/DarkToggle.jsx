import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import './DarkToggle.css';

export const DarkToggle = () => {

  // Get device's default preference for light or dark theme and add to local storage
   const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)"
    },
    undefined,
    prefersDark => {
      setIsDark(prefersDark);
      localStorage.setItem('DARK_MODE', prefersDark);
    }
  );

  // Set isDark to true if system setting or local storage variable is for dark theme
  const storageDark = systemPrefersDark || localStorage.getItem('DARK_MODE') === "true";
  const [isDark, setIsDark] = useState(storageDark);

  // Update classes for body tag if dark is turned on or off
  useEffect(() => {
    const darkIsStored = localStorage.getItem('DARK_MODE') ? localStorage.getItem('DARK_MODE').toLowerCase() === "true" : false;
    
    if (isDark && darkIsStored) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Toggle
      className="DarkToggle"
      checked={isDark}
      onChange={toggleEvent => {
        setIsDark(toggleEvent.target.checked);
        localStorage.setItem('DARK_MODE', toggleEvent.target.checked);
      }}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode"
    />
  );
};
