import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  


  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`background ${darkMode ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
